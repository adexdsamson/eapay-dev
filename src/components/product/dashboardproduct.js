import { Typography, withStyles, LinearProgress } from "@material-ui/core";

/**
 * 
 * @material-ui custom component withStyles 
 * 
 */

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

/**
 * 
 * React component to display the percentage of product sold.
 * 
 * @param {productName} The name of the merchant's product.
 * @param {value} The percentage of the product sold.
 * @returns react component
 */
// TODO: only accept products that are activeand not sold out or archived

const DashboardProduct = ({productName, value}) => {
  return (
    <div className="d-flex w-100 align-items-center mb-3">
      <div className="w-100 mr-2">
        <Typography variant="body2">{productName}</Typography>
        <BorderLinearProgress variant="determinate" value={value} />
      </div>
      <Typography variant="overline">{value}%</Typography>
    </div>
  );
};

export default DashboardProduct;
