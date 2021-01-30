import { Container } from "@material-ui/core";
import { useSelector } from "react-redux";
import ExploreCardComponent from "../../components/ExploreCards/explore-card.component";
import { selectStoreData } from "../../store/shop.reducer";
import { IStoreData } from "../../store/store.d";
import "./explore.styles.css";

const ExploreComponent = () => {
  const { data, loading } = useSelector(selectStoreData);

  if (loading) return <div>Loading</div>;

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
