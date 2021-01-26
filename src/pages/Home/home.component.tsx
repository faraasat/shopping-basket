import { Container } from "@material-ui/core";
import CardComponent from "../../components/Cards/cards.component";
import CarouselComponent from "../../components/Carousel/carousel.component";
import "./home.styles.css";
import AcUnitIcon from "@material-ui/icons/AcUnit";

const HomeComponent = () => {
  return (
    <section className="home-page">
      <CarouselComponent />
      <div className="home-page__alignment">
        <Container className="home-page__container">
          <div className="home-page__cards">
            <CardComponent
              Ico={AcUnitIcon}
              heading="hello"
              detail="sdbfk sdf sdijjfn skjdfjn lkklsf sd dmnsfl s dfnsflksdn fldsfl"
            />
            <CardComponent
              Ico={AcUnitIcon}
              heading="hello"
              detail="sdbfk sdf sdijjfn skjdfjn lkklsf sd dmnsfl s dfnsflksdn fldsfl"
            />
            <CardComponent
              Ico={AcUnitIcon}
              heading="hello"
              detail="sdbfk sdf sdijjfn skjdfjn lkklsf sd dmnsfl s dfnsflksdn fldsfl"
            />
          </div>
        </Container>
      </div>
    </section>
  );
};

export default HomeComponent;
