import { Component } from "react";
import { connect } from "react-redux";
import View from "../../presentations/dashboard/shopfront";
import { drawer, notify, } from "../../store/actionTypes";
import Adapter from '../../adapter'
import {
  getLoaderState,
  getNotifyState,
  getUserState,
  getProductState
} from "../../store/selector";

class Ecommerce extends Component {
  state = { drawer: false, page: '' };

  componentDidMount() {
   // this.props.getProducts(this.props.user.token)
  }

  /**
   * open and close drawer
   */
  handleDrawer = (value) => {
    this.setState({ drawer: !this.state.drawer, page: value });
  };

  handleCreateProduct = (values) => {
    this.props.onCreate(values)
  }

  render() {
    let {
      props: { onDrawer, products, isloading, isNotification, onClose },
      state: { drawer, page },
      handleDrawer,
      handleCreateProduct
    } = this;
    return (
      <View
        page={page}
        setDrawer={onDrawer}
        productData={products}
        onSubmit={handleCreateProduct}
        onOrder={handleDrawer}
        loading={isloading}
        onCloseDrawer={handleDrawer}
        openDrawer={drawer}
        onNewProduct={handleDrawer}
        notify={isNotification}
        onNotificationCancel={onClose}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isloading: getLoaderState(state),
    isNotification: getNotifyState(state),
    user: getUserState(state),
    products: getProductState(state)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onDrawer: () => dispatch(drawer(true)),
    onCreate: (data) => dispatch(Adapter.createProduct(data)),
    onClose: () => dispatch(notify("")),
    getProducts: (data) => dispatch(Adapter.getProducts(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Ecommerce);
