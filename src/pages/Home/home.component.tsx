import { Container } from "@material-ui/core";
import CardComponent from "../../components/Cards/cards.component";
import CarouselComponent from "../../components/Carousel/carousel.component";
import "./home.styles.css";
import EqualizerIcon from "@material-ui/icons/Equalizer";
import HomeIcon from "@material-ui/icons/Home";
import QueryBuilderIcon from "@material-ui/icons/QueryBuilder";
import ContactCardComponent from "../../components/ContactCard/contact-card.component";
import Chat from "../../assets/chat.png";
import Email from "../../assets/email.png";
import Live from "../../assets/live.png";

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
      <div className="home-page__bg">
        <h1>Lets get Started!</h1>
        <Container>
          <p>
            In this world you cannot trust anyone but we are here to help you.
            We will give you 7-days guarantee with easy return😊.
          </p>
        </Container>
      </div>
      <div className="home-page__contact">
        <Container>
          <div className="home-page__contact-alignment">
            <ContactCardComponent
              Ico={Email}
              heading="Email Us"
              detail="You can email us at example@email.com anytime and we will always be there to help you!"
            />
            <ContactCardComponent
              Ico={Chat}
              heading="24/7 Live Chat"
              detail="Have a nice and high quality chat with us. We are always eager to solve your problems!"
            />
            <ContactCardComponent
              Ico={Live}
              heading="Customer Support"
              detail="Guess what you can call us any time for support. We give our customers world class support!"
            />
          </div>
        </Container>
      </div>
      <footer className="home-page__footer">
        <h1>Copyright &copy; 2021 Shopping Basket. All Right Reserved.</h1>
      </footer>
    </section>
  );
};

export default HomeComponent;
