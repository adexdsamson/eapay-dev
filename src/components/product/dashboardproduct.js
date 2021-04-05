import { Typography, withStyles, LinearProgress } from "@material-ui/core";

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 10,
    borderRadius: 5,
  },
  colorPrimary: {
    backgroundColor:
      theme.palette.grey[theme.palette.type === "light" ? 200 : 700],
  },
  bar: {
    borderRadius: 5,
    backgroundColor: theme.palette.primary,
  },
}))(LinearProgress);

const DashboardProduct = ({productName, value}) => {
  return (
    <div className="d-flex w-100 align-items-center">
      <div className="w-100 mr-2">
        <Typography variant="body2">{productName}</Typography>
        <BorderLinearProgress variant="determinate" value={value} />
      </div>
      <Typography variant="overline">{value}</Typography>
    </div>
  );
};

export default DashboardProduct;
