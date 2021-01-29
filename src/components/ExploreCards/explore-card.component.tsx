import "./explore-card.style.css";
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBCol,
} from "mdbreact";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import ListIcon from "@material-ui/icons/List";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { Icon } from "@material-ui/core";

const ExploreCardComponent = () => {
  return (
    <MDBCol>
      <MDBCard style={{ width: "22rem", marginTop: 15, marginBottom: 15 }}>
        <MDBCardImage
          className="img-fluid"
          src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg"
          waves
        />
        <MDBCardBody>
          <MDBCardTitle>Card title</MDBCardTitle>
          <MDBCardText>
            Some quick example text to build on the card title and make up the
            bulk of the card&apos;s content.
          </MDBCardText>
          <div className="explore-card-btn-wrappers">
            <a href="https://dsda">
              <Icon component={FavoriteIcon} />
            </a>
            <a href="https://dsda">
              <Icon component={ListIcon} />
            </a>
            <a href="https://dsda">
              <Icon component={AddShoppingCartIcon} />
            </a>
            <a href="https://dsda">
              <Icon component={ArrowForwardIcon} />
            </a>
          </div>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  );
};

export default ExploreCardComponent;
