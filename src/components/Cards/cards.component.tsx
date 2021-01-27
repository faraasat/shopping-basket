import { Icon } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { ICardComponent } from "./cards";
import "./cards.styles.css";

const CardComponent: React.FC<ICardComponent> = ({ Ico, heading, detail }) => {
  return (
    <Card className="card-component-card-alignment">
      <CardActionArea>
        <CardContent
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
            <Icon component={Ico} className='card-component-card__icon' />
          <Typography gutterBottom variant="h5" component="h2" className='card-component-card__heading'>
            {heading}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" className='card-component-card__detail'>
            {detail}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CardComponent;
