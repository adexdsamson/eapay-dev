import { Fragment, useMemo } from "react";
import Header from "../../parts/header";
import useMediaQuery from "../../hooks/useMediaQuery";
// import Table from "../../components/table";
import { Typography, Grid } from "@material-ui/core";
import {
  DoneAll,
  ErrorOutline,
  Cancel,
  TrendingUp,
  TrendingDown,
  Visibility,
} from "@material-ui/icons";
import LoaderLabel from "../../components/loader/progressWithLabel";
import { Cube } from "heroicons-react";
import { convertToCurrency, getPercent } from "../../utils";
import Product from "../../components/product/dashboardproduct";
import Activity from '../../components/activity';

const StatusIcon = ({ value }) => {
  return value === "success" ? (
    <DoneAll fontSize="small" className="text-success" />
  ) : value === "pending" ? (
    <ErrorOutline fontSize="small" className="text-warning" />
  ) : (
    <Cancel fontSize="small" className="text-danger" />
  );
};

/**
 *
 * @param {*} isTrendingUp
 * @returns react component
 */

const Indicator = ({ isTrendingUp }) => {
  return (
    <div className="d-flex align-items-center">
      <div className="d-flex align-items-center">
        {isTrendingUp ? (
          <TrendingUp fontSize="small" />
        ) : (
          <TrendingDown fontSize="small" />
        )}
        <Typography
          color="textSecondary"
          variant="caption"
          className="ml-1 mb-0"
        >
          12
        </Typography>
      </div>
      <Typography color="textSecondary" variant="caption" className="ml-1 mb-0">
        vs last month
      </Typography>
    </div>
  );
};

const DashboardPresentation = ({ setDrawer, user, product, transaction }) => {
  const isMobile = useMediaQuery("down", "md");
  const productList = product.map((item) => (
    <Product
      productName={item.productName}
      value={getPercent(item.sold, item.quantity)}
    />
  ));
  const data = useMemo(
    () => [
      {
        status: "pending", // Takes three params: success, pending, failed.
        channel: "App", // Channel used to make payment to the merchant.
        amount: "5000", // The amount paid to the merchant.
        category: "Product", // Category of product paid for.
        date: "09/07/2020", // The date the transaction was initialized.
        customer: "Samuel Wolf", // The customer who authorized the payment.
        reference: "Eri3903-djkvjnd", // Reference number of the transaction
      },
    ],
    []
  );
  const columns = useMemo(
    () => [
      {
        Header: "Transactions",
        columns: [
          {
            Header: "Status",
            accessor: "status",
            Cell: ({ cell: { value } }) => <StatusIcon value={value} />,
          },
          {
            Header: "Channel",
            accessor: "channel",
          },
          {
            Header: "Amount",
            accessor: "amount",
          },
          {
            Header: "Category",
            accessor: "category",
          },
          {
            Header: "Date",
            accessor: "date",
          },
        ],
      },
    ],
    []
  );

  return (
    <Fragment>
      <Header
        title="Dashboard"
        className="mt-3"
        onMenu={setDrawer}
        isMobile={isMobile}
        avatarSrc={user?.avatar}
        mode={user?.mode}
        isNotification
      />
      <Grid container className="mt-3 mb-5">
        <Grid item lg={8} className="h-100vh overflowY">
          <div className="mr-3">
            <div className="row">
              <div className="col-lg-6 p-4 d-flex align-items-center justify-content-between">
                <Typography variant="subtitle1">Success Rate</Typography>
                <LoaderLabel size={60} value={20} />
              </div>
              <div className="col-lg-6 p-4 d-flex align-items-center justify-content-between">
                <Typography variant="subtitle1">Sale Completed</Typography>
                <LoaderLabel size={60} value={50} />
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 p-4 d-flex align-items-center justify-content-between">
                <Typography variant="subtitle1">Store Interaction</Typography>
                <LoaderLabel size={60} value={10} />
              </div>
              <div className="col-lg-6 p-4 d-flex align-items-center justify-content-between">
                <Typography variant="subtitle1">Total Transactions</Typography>
                <LoaderLabel size={60} value={70} />
              </div>
            </div>
          </div>
          <div>
            <Activity data={[{}]} />
          </div>
        </Grid>
        <Grid
          style={{ borderLeft: "1px solid rgba(0, 0, 0, 0.12)" }}
          item
          lg={4}
        >
          <div className="ml-3">
            <div className="d-flex align-items-center justify-content-between mb-3">
              <Typography variant="subtitle1" className="">
                Total Revenue
              </Typography>
              <Indicator />
            </div>
            <Typography align="center" variant="h6">
              {convertToCurrency("0")}
            </Typography>

            <div className="d-flex justify-content-between mt-5">
              <div>
                <Typography variant="subtitle2">
                  Total product viewed
                </Typography>
                <div className="d-flex align-items-center mt-2">
                  <Visibility fontSize="small" className="text-eapay" />
                  <Typography paragraph className="ml-3 mb-0">
                    0
                  </Typography>
                </div>
              </div>
              <div>
                <Typography variant="subtitle2">Total product</Typography>
                <div className="d-flex align-items-center mt-2">
                  <Cube fontSize="small" className="text-eapay" />
                  <Typography paragraph className="ml-3 mb-0">
                    0
                  </Typography>
                </div>
              </div>
            </div>
          </div>
          <div className="ml-3 mt-5">
            <div className="d-flex align-items-center justify-content-between mb-4">
              <Typography variant="subtitle1" className="">
                Products
              </Typography>
              <Typography variant="subtitle2">Sold</Typography>
            </div>
            <div
              style={{
                overflowY: "scroll",
                height: "50vh",
                scrollbarWidth: "none",
              }}
              className="scrollbar-hide"
            >
              {productList}
            </div>
          </div>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default DashboardPresentation;
