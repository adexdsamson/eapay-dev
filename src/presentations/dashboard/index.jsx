import { Fragment, useMemo } from "react";
import Header from "../../parts/header";
import useMediaQuery from "../../hooks/useMediaQuery";
import Table from "../../components/table";
import { Typography, Grid } from "@material-ui/core";
import {
  DoneAll,
  ErrorOutline,
  Cancel,
  TrendingUp,
  TrendingDown,
  Visibility,
} from "@material-ui/icons";
import { Cube } from "heroicons-react";
import { convertToCurrency, getPercent } from "../../utils";
import Product from "../../components/product/dashboardproduct";

const StatusIcon = ({ value }) => {
  return value === "success" ? (
    <DoneAll fontSize="small" className="text-success" />
  ) : value === "pending" ? (
    <ErrorOutline fontSize="small" className="text-warning" />
  ) : (
    <Cancel fontSize="small" className="text-danger" />
  );
};
const Indicator = ({ isTrendingUp }) => {
  return (
    <div className="d-flex mt-4 align-items-center">
      <div className="d-flex p-2 btn-primary-eapay rounded align-items-center">
        {isTrendingUp ? (
          <TrendingUp fontSize="small" />
        ) : (
          <TrendingDown fontSize="small" />
        )}
        <p className="ml-1 mb-0">12</p>
      </div>
      <p className="ml-2 mb-0">vs last month</p>
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
        <Grid item lg={7} className="h-100vh overflowY">
          <div className="">
            <Typography variant="h6">Channels</Typography>
          </div>
          <div className=" pr-3">
            <Typography variant="h6" className="mb-4">
              Transactions
            </Typography>
            <Table columns={columns} data={data} />
          </div>
        </Grid>
        <Grid
          style={{ borderLeft: "1px solid rgba(0, 0, 0, 0.12)" }}
          item
          lg={5}
        >
          <div className="ml-3">
            <Typography variant="h6" className="mb-2">
              Total Revenue
            </Typography>
            <Typography variant="h4">
              {convertToCurrency("10000500000")}
            </Typography>
            <Indicator />
            <div className="d-flex justify-content-between mt-4">
              <div>
                <Typography variant="subtitle2">
                  Total viewed product
                </Typography>
                <div className="d-flex align-items-center mt-2">
                  <Visibility fontSize="small" className="text-eapay" />
                  <Typography paragraph className="ml-3 mb-0">
                    300
                  </Typography>
                </div>
              </div>
              <div>
                <Typography variant="subtitle2">Total product</Typography>
                <div className="d-flex align-items-center mt-2">
                  <Cube fontSize="small" className="text-eapay" />
                  <Typography paragraph className="ml-3 mb-0">
                    300
                  </Typography>
                </div>
              </div>
            </div>
          </div>
          <div className="ml-3 mt-5">
            <div className="d-flex align-items-center justify-content-between mb-4">
              <Typography variant="h6" className="">
                Products
              </Typography>
              <Typography variant="subtitle2">Sold</Typography>
            </div>
            {productList}
          </div>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default DashboardPresentation;
