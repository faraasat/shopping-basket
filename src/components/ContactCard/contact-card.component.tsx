import { Typography, ButtonBase } from "@material-ui/core";
import { IContactCard } from "./contact-card";
import "./contact-card.styles.css";

const ContactCardComponent: React.FC<IContactCard> = ({
  Ico,
  heading,
  detail,
}) => {
  return (
    <div className="contact-card-component-card-alignment">
      <ButtonBase className="contact-card-component-card__icon-base">
        <img
          src={Ico}
          alt="card content"
          className="contact-card-component-card__icon-icon"
        />
      </ButtonBase>
      <Typography
        gutterBottom
        variant="h5"
        component="h2"
        className="contact-card-component-card__heading"
      >
        {heading}
      </Typography>
      <Typography
        variant="body2"
        color="textSecondary"
        component="p"
        className="contact-card-component-card__detail"
      >
        {detail}
      </Typography>
    </div>
  );
};

export default ContactCardComponent;
