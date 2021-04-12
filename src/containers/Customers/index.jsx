import { Component } from "react";
import { connect } from "react-redux";
import Adapter from "../../adapter";
import View from "../../presentations/customers";
import { notify } from "../../store/actionTypes";
import { getLoaderState, getNotifyState } from "../../store/selector";

class Customers extends Component {
  state = {};
  render() {
    let {
      // handleSubmit,
      props: { isloading, isNotification, onClose },
    } = this;
    return (
      <View
        loading={isloading}
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
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLogin: (data) => dispatch(Adapter.loginUserAccount(data)),
    onNotify: (data) => dispatch(notify(data)),
    onClose: () => dispatch(notify("")),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Customers);