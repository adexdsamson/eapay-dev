import { Card, CardMedia, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: theme.spacing(2), // 16px
    transition: "0.3s",
    boxShadow: "0px 14px 80px rgba(34, 35, 58, 0.2)",
    width: "95%",
    position: "relative",
    maxWidth: 800,
    marginLeft: "auto",
    // overflow: "initial",
    background: "#ffffff",
    display: "flex",
    height: '20rem',
    alignItems: "center",
    padding: `${theme.spacing(2)} 0`,
    "&:hover": {
      transform: "translateY(-3px)",
      boxShadow: "0 4px 20px 0 rgba(0,0,0,0.12)",
    },
    [theme.breakpoints.down('md')]: {
      height: '10rem',
      marginTop: '2rem'
    }
  },
  content: {
    borderRadius: '1rem',
    height: '100%',
    width: '100%'
  },
}));

const CardImg = ({ src }) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardMedia
      className={classes.content}
      image={
        src
      }
    />
    </Card>
  );
};


export default CardImg;