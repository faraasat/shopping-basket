import {
  MDBCarousel,
  MDBCarouselCaption,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBMask,
} from "mdbreact";
import ShoppingBg2 from "../../assets/shopping-bg2.jpg";
import ShoppingBg3 from "../../assets/shopping-bg3.jpg";
import ShoppingBg5 from "../../assets/shopping-bg5.jpg";
import "./carousel.styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { MDBBtn } from "mdbreact";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faGifts } from "@fortawesome/free-solid-svg-icons";
import { faMoneyCheckAlt } from "@fortawesome/free-solid-svg-icons";

const CarouselComponent = () => {
  return (
    <section className="home-carousel-section">
      <MDBCarousel
        activeItem={1}
        length={3}
        showControls={true}
        showIndicators={true}
        className="z-depth-1"
      >
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1" className="shopping-carousel-1">
            <MDBView>
              <img
                className="d-block w-100"
                src={ShoppingBg3}
                alt="First slide"
              />
              <MDBMask overlay="black-light" />
            </MDBView>
            <MDBCarouselCaption>
              <h3 className="h3-responsive">Everything Online!</h3>
              <p>
                Buy Everything You want online. Your things are just one click
                away. Just click the item and let us deliver them to your door
                step!! 🏡
              </p>
              <MDBBtn gradient="peach">
                Shop Now&nbsp;&nbsp;
                <FontAwesomeIcon icon={faShoppingCart} />
              </MDBBtn>
            </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2" className="shopping-carousel-2">
            <MDBView>
              <img
                className="d-block w-100"
                src={ShoppingBg2}
                alt="Second slide"
              />
              <MDBMask overlay="black-slight" />
            </MDBView>
            <MDBCarouselCaption>
              <h3 className="h3-responsive">Win Gift and Prizes!</h3>
              <p>
                We care about you so much that we give everyone chance to win
                the prizes. We are also giving gifts with products! 🎁
              </p>
              <MDBBtn gradient="aqua">
                Win Now&nbsp;&nbsp;
                <FontAwesomeIcon icon={faGifts} />
              </MDBBtn>
            </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3" className="shopping-carousel-3">
            <MDBView>
              <img
                className="d-block w-100"
                src={ShoppingBg5}
                alt="Third slide"
              />
              <MDBMask overlay="black-strong" />
            </MDBView>
            <MDBCarouselCaption>
              <h3 className="h3-responsive">Coupon and Discounts!</h3>
              <p>
                All of your favorite things are under one umbrella. So what are
                you waiting for? Shop Now and Avail tons of Discounts! 🤑
              </p>
              <MDBBtn gradient="purple">
                Discounts&nbsp;&nbsp;
                <FontAwesomeIcon icon={faMoneyCheckAlt} />
              </MDBBtn>
            </MDBCarouselCaption>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
    </section>
  );
};

export default CarouselComponent;
