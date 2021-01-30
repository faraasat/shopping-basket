import "./explore-card.style.css";
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBCol,
  MDBTooltip,
} from "mdbreact";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import ListIcon from "@material-ui/icons/List";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { Icon } from "@material-ui/core";
import { IExploreCards } from "./explore-cards";
import { Link } from "react-router-dom";

const ExploreCardComponent: React.FC<IExploreCards> = ({
  title,
  Img,
  details,
  id,
}) => {
  return (
    <Link to={id}>
      <MDBCol className="explore-card__alignment">
        <MDBCard style={{ width: "22rem", marginTop: 15, marginBottom: 15 }}>
          <MDBCardImage
            className="explore-card__card-img img-fluid"
            src={Img}
            waves
          />
          <span className="explore-card__card-hover-effect">Awesome😊</span>
          <MDBCardBody>
            <MDBCardTitle className="explore-card__card-title">
              <MDBTooltip domElement tag="span" placement="right">
                <span>{title}</span>
                <span>{title}</span>
              </MDBTooltip>
            </MDBCardTitle>
            <MDBCardText className="explore-card__card-details">
              {details}
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
    </Link>
  );
};

export default ExploreCardComponent;
