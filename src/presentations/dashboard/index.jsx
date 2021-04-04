import { Fragment, useMemo } from "react";
import Header from "../../parts/header";
import useMediaQuery from "../../hooks/useMediaQuery";
import Table from "../../components/table";
import {
  DoneAll,
  ErrorOutline,
  Cancel,
  TrendingUp,
  TrendingDown,
  Visibility
} from "@material-ui/icons";
import { Cube } from 'heroicons-react';

const StatusIcon = ({ value }) => {
  return value === "success" ? (
    <DoneAll className="text-success" />
  ) : value === "pending" ? (
    <ErrorOutline className="text-warning" />
  ) : (
    <Cancel className="text-danger" />
  );
};
const Indicator = ({ isTrendingUp }) => {
  return (
    <div className="d-flex mt-4 align-items-center">
      <div className="d-flex p-2 btn-primary-eapay rounded align-items-center">
        {isTrendingUp ? <TrendingUp /> : <TrendingDown />}
        <p className="ml-1 mb-0">12</p>
      </div>
      <p className="ml-3 mb-0">vs last month</p>
    </div>
  );
};

const DashboardPresentation = ({ setDrawer, user }) => {
  const isMobile = useMediaQuery("down", "md");
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
  return (
    <Fragment>
      <Header
        title="Dashboard"
        onMenu={setDrawer}
        isMobile={isMobile}
        avatarSrc={user?.avatar}
        mode={user?.mode}
        isNotification
      />
      <div className="row mt-5 pt-5 mb-5">
        <div className="col-lg-8">
          <div className="h-50vh">
            <h4>Channel</h4>
          </div>
          <div className="h-50vh">
            <h4 className="mb-5">Transactions</h4>
            <Table columns={columns} data={data} />
          </div>
        </div>
        <div className="col-lg-4">
          <div>
            <h4>Total Revenue</h4>
            <h2>NGN 150,000</h2>
            <Indicator />
            <div className="d-flex justify-content-between mt-4">
              <div>
                <h6>Total viewed product</h6>
                <div className='d-flex align-items-center'>
                  <Visibility className='text-eapay' />
                  <p className='ml-3 mb-0'>300</p>
                </div>
              </div>
              <div>
                <h6>Total product</h6>
                <div className='d-flex align-items-center'>
                  <Cube className='text-eapay' />
                  <p className='ml-3 mb-0'>300</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default DashboardPresentation;
