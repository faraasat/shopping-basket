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
      <h1>Explore World</h1>
      <Container>
        <div className="explore-page-card-alignment">
          {data.map((datum: IStoreData) => {
            return <ExploreCardComponent key={datum.unique_id} />;
          })}
        </div>
      </Container>
    </section>
  );
};

export default ExploreComponent;
