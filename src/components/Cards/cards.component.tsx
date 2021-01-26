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
            <Icon component={Ico} />
          <Typography gutterBottom variant="h5" component="h2">
            {heading}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {detail}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CardComponent;
