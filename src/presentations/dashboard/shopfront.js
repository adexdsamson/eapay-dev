import Header from "../../parts/header";
import {
  Button,
  TextField,
  Typography,
  Fab,
  Input,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@material-ui/core";
import useMediaQuery from "../../hooks/useMediaQuery";
import Card from "../../components/Card";
import { Fragment } from "react";
import Drawer from "../../components/drawer";
import { Check, Image } from "@material-ui/icons";
import Empty from "../../components/Empty";
import { CREATE_PRODUCT, ORDER_LIST } from "../../utils/constant";
import { reduxForm } from "redux-form";
import Notification from "../../components/notification";
import Loader from "../../components/loader";

// TODO: Filter,

const Ecommerce = ({
  user,
  setDrawer,
  openDrawer,
  onCloseDrawer,
  productData,
  onNewProduct,
  page,
  onOrder,
  handleSubmit,
  notify,
  onNotificationCancel,
  loading,
}) => {
  const isMobile = useMediaQuery("down", "md");
  const productList = productData.map((item) => (
    <Card
      title={item.title}
      subheader={item.date}
      image={item.productImage}
      body={item.description}
      link={item.link}
      user={user}
    />
  ));
  const createProduct = (
    <form onSubmit={handleSubmit}>
      <Typography variant="h6" className="mt-4">
        Add Product
      </Typography>
      <TextField
        id="product-name"
        fullWidth
        className="mt-3 mb-4"
        label="Product Name"
      />
      <TextField
        id="product-price"
        className="mb-4"
        fullWidth
        label="Product Price"
      />
      <TextField
        id="product-description"
        label="Describe Product"
        className="mb-4"
        fullWidth
        multiline
        rows={4}
      />
      <TextField
        id="product-quantity"
        className="mb-4"
        fullWidth
        label="Quantity"
      />
      <TextField
        id="product-weoght"
        className="mb-4"
        fullWidth
        label="Weight"
      />
      <label htmlFor="upload-photo">
        <input
          style={{ display: "none" }}
          id="upload-photo"
          name="upload-photo"
          type="file"
        />

        <Fab
          color="secondary"
          size="medium"
          component="span"
          aria-label="add"
          variant="extended"
        >
          <Image /> Product Image
        </Fab>
      </label>
      <div className="mt-5 text-right">
        <Button onClick={onCloseDrawer} className="text-danger" variant="text">
          Close
        </Button>
        <Button
          type="submit"
          className="ml-3"
          color="primary"
          variant="contained"
        >
          Create product
        </Button>
      </div>
    </form>
  );
  const orderList = (
    <>
      <div className="d-flex align-items-center justify-content-between w-100 mt-3 mb-3">
        <Typography className="m-0 p-0" variant="subtitle1">
          Orders
        </Typography>
        <Input
          className="ml-2 mr-2"
          placeholder="search"
          inputProps={{ "aria-label": "description" }}
        />
      </div>
      <Divider />
      <List>
        <ListItem button>
          <ListItemAvatar>
            <Check color="primary" />
          </ListItemAvatar>
          <ListItemText primary="NGN 5,000" secondary="Samuel Wolf" />
        </ListItem>
      </List>
    </>
  );
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <Header
            title="Dashboard"
            className="mt-3"
            onMenu={setDrawer}
            isMobile={isMobile}
            avatarSrc={user?.avatar}
            mode={user?.mode}
            // isNotification
          />
          <Notification
            content={notify}
            onCancel={onNotificationCancel}
            notify={notify}
          />
          <div className="d-flex justify-content-between w-100 mt-5 mb-3 mb-sm-0">
            <Button color="secondary" variant="text">
              filter
            </Button>
            <div>
              <Button
                onClick={() => onOrder(ORDER_LIST)}
                color="secondary"
                variant="text"
              >
                order
              </Button>
              <Button
                onClick={() => onNewProduct(CREATE_PRODUCT)}
                color="primary"
                variant="contained"
                className="ml-3"
              >
                New Product
              </Button>
            </div>
          </div>
          <div className="container pt-2">
            {productData?.length ? productList : <Empty />}
          </div>
          <Drawer open={openDrawer} onClose={onCloseDrawer} anchor="right">
            {page === CREATE_PRODUCT
              ? createProduct
              : page === ORDER_LIST
              ? orderList
              : null}
          </Drawer>
        </Fragment>
      )}
    </>
  );
};

export default reduxForm({ form: "product" })(Ecommerce);
