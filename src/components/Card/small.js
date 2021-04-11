import { Button, Typography } from "@material-ui/core";
import "./small.css";

const Card = ({ src, title, body, button }) => {
  return (
    <div className="d-flex mx-auto small-card p-3 justify-content-between align-items-center pt-3">
      <img width={80} height={80} classname="img-fluid" src={src} alt="icon" />
      <div className="ml-3">
        <Typography variant="subtitle1">{title}</Typography>
        <Typography variant="body2">{body}</Typography>
        <Button
          size="small"
          className="float-right"
          color="primary"
          variant="text"
        >
          {button}
        </Button>
      </div>
    </div>
  );
};

export default Card;
