import Header from "../../parts/header";
import { Button, TextField, Typography } from "@material-ui/core";
import useMediaQuery from "../../hooks/useMediaQuery";
import Card from "../../components/Card";
import { Fragment } from "react";
import Drawer from "../../components/drawer";
import UploadPreview from "material-ui-upload/UploadPreview";

const Ecommerce = ({ isMobile, user, setDrawer }) => {
  // const isMobile = useMediaQuery('down', 'md');
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

      <div className="d-flex justify-content-between w-100 mt-5">
        <Button variant="text">filter</Button>
        <div>
          <Button color="secondary" variant="text">
            order
          </Button>
          <Button color="primary" variant="contained" className="ml-3">
            New Product
          </Button>
        </div>
      </div>
      <div className="container pt-2">
        <Card
          title="Shrimp and Chorizo Paella"
          subheader="September 14, 2016"
          avatar
          image
          body
          link
        />
      </div>
      <Drawer open={true} anchor="right">
        <Typography className="mt-4">Add Product</Typography>
        <TextField
          id="filled-basic"
          fullWidth
          className="mt-3 mb-4"
          label="Product Name"
          // variant="filled"
        />
        <TextField
          id="filled-basic"
          className="mb-4"
          fullWidth
          label="Product Price"
          // variant="filled"
        />
        <TextField
          id="filled-multiline-static"
          label="Multiline"
          className="mb-4"
          fullWidth
          multiline
          rows={4}
          // defaultValue="Default Value"
          // variant="filled"
        />
        <TextField
          id="filled-basic"
          className=""
          fullWidth
          label="Quantity"
          // variant="filled"
        />
        <UploadPreview
          title="Picture"
          label="Add"
          initialItems
          onChange
        />
      </Drawer>
    </Fragment>
  );
};

export default Ecommerce;
