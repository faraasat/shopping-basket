import { Container } from "@material-ui/core";
import CardComponent from "../../components/Cards/cards.component";
import CarouselComponent from "../../components/Carousel/carousel.component";
import "./home.styles.css";
import EqualizerIcon from "@material-ui/icons/Equalizer";
import HomeIcon from "@material-ui/icons/Home";
import QueryBuilderIcon from "@material-ui/icons/QueryBuilder";

const HomeComponent = () => {
  return (
    <section className="home-page">
      <CarouselComponent />
      <div className="home-page__alignment">
        <Container className="home-page__container">
          <div className="home-page__cards">
            <span className="home-page__cards-card1">
              <CardComponent
                Ico={HomeIcon}
                heading="At Doorsteps"
                detail="No need to be worried. We are here to care about you. Get your items at your doorsteps!"
              />
            </span>
            <span className="home-page__cards-card2">
              <CardComponent
                Ico={EqualizerIcon}
                heading="Finest Quality"
                detail="Are sick of low quality products? Buy from us and we will guarantee that you will find finest quality!"
              />
            </span>
            <span className="home-page__cards-card3">
              <CardComponent
                Ico={QueryBuilderIcon}
                heading="On Time"
                detail="Tired of waiting, calling and tracking for product? We are here to make your deliveries on time!"
              />
            </span>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default HomeComponent;
