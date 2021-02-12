import { CircularProgress, Container } from "@material-ui/core";
import { useState } from "react";
// import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ExploreCardComponent from "../../components/ExploreCards/explore-card.component";
import { selectStoreData } from "../../store/shop.reducer";
import { IStoreData } from "../../store/store.d";
import "./explore.styles.css";
// import { initialStoreData } from "../../store/shop.reducer";

const ExploreComponent = () => {
  const { data, loading } = useSelector(selectStoreData);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemPerPage] = useState(30);
  const indexOfLastItem = currentPage * itemPerPage;
  const indexOfFirstItem = indexOfLastItem - itemPerPage;
  const currentItem = data.slice(indexOfFirstItem, indexOfLastItem);
  const pageNumberClass: any = document.getElementsByClassName(
    "btn-native-color"
  );

  if (loading)
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
        }}
      >
        <CircularProgress />
      </div>
    );

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(data.length / itemPerPage); i++) {
    pageNumbers.push(i);
  }

  const handleClick = (event: any) => {
    setCurrentPage(Number(event.target.id));
    window.scrollTo(0, 0);
  };

  const handleBackClick = () => {
    if (currentPage === 1) return;
    setCurrentPage(currentPage - 1);
    window.scrollTo(0, 0);
  };

  const handleForwardClick = () => {
    if (currentPage === pageNumbers.length) return;
    setCurrentPage(currentPage + 1);
    window.scrollTo(0, 0);
  };

  const renderItems = currentItem.map((datum: IStoreData) => {
    return (
      <ExploreCardComponent
        key={datum.unique_id}
        title={datum.product_name}
        Img={datum.product_image_url.split("|")[0]}
        details={datum.product_description}
        id={datum.unique_id}
      />
    );
  });

  const renderPageNumbers = pageNumbers.map((number) => {
    pageNumberClass?.classList?.remove("btn-active-color");
    return (
      <>
        {number === currentPage ? (
          <li
            className="btn-native-color btn-active-color"
            key={number}
            id={String(number)}
            onClick={(event) => handleClick(event)}
          >
            {number}
          </li>
        ) : (
          <li
            className="btn-native-color"
            key={number}
            id={String(number)}
            onClick={(event) => handleClick(event)}
          >
            {number}
          </li>
        )}
      </>
    );
  });

  return (
    <div>
      <section className="explore-page-section-alignment">
        <Container>
          <div className="explore-page-card-alignment">{renderItems}</div>
        </Container>
      </section>
      <div className="explore-items__page-numbers">
        <li onClick={() => handleBackClick()}>{"<<"}</li>
        {renderPageNumbers}
        <li onClick={() => handleForwardClick()}>{">>"}</li>
      </div>
    </div>
  );
};

export default ExploreComponent;
