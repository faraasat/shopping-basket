import { CircularProgress, Container } from "@material-ui/core";
// import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ExploreCardComponent from "../../components/ExploreCards/explore-card.component";
import { selectStoreData } from "../../store/shop.reducer";
import { IStoreData } from "../../store/store.d";
import "./explore.styles.css";
// import { initialStoreData } from "../../store/shop.reducer";

const ExploreComponent = () => {
  const { data, loading } = useSelector(selectStoreData);
  // const [prevNumber, setPrevNumber] = useState(0);
  // const [loadNumber, setLoadNumber] = useState(9);
  // let reducedData = initialStoreData;

  // useEffect(() => {
  //   setTimeout(() => {
  //     if (loadNumber === data.length) reducedData.push(data.splice(0, 9));
  //     setPrevNumber(loadNumber);
  //     setLoadNumber(loadNumber + 9);
  //     console.log(reducedData);
  //   }, 2000);
  // }, [reducedData, loadNumber]);

  //Hello World

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

  return (
    <section className="explore-page-section-alignment">
      <Container>
        <div className="explore-page-card-alignment">
          {data.map((datum: IStoreData) => {
            return (
              <ExploreCardComponent
                key={datum.unique_id}
                title={datum.product_name}
                Img={datum.product_image_url.split("|")[0]}
                details={datum.product_description}
                id={datum.unique_id}
              />
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default ExploreComponent;
