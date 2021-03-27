import { Component } from "react";
import View from "../../presentations/login";
import Adapter from "../../adapter";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { GET_STARTED_DASHBOARD_ROUTE, VERIFICATION_ROUTE } from "../../routes";
import { notify } from "../../store/actionTypes";

class LoginContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleSubmit = async (values) => {
    const response = await this.props.onLogin(values);
    if (response?.merchant?.newDevice === true) {
      this.props.history.push(VERIFICATION_ROUTE)
    } else if (response.merchant.verified === false) {
      this.props.history.push(VERIFICATION_ROUTE)
    } else {
      this.props.history.push(GET_STARTED_DASHBOARD_ROUTE)
    }
    
  };

  render() {
    let {
      handleSubmit,
      props: { isloading, isNotification, onClose },
    } = this;
    return (
      <View
        onSubmit={handleSubmit}
        loading={isloading}
        notify={isNotification}
        onNotificationCancel={onClose}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isloading: state.otherReducer.isloading,
    isNotification: state.otherReducer.notify,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLogin: (data) => dispatch(Adapter.loginUserAccount(data)),
    onClose: () => dispatch(notify("")),
  };
};

const connectedRoute = withRouter(LoginContainer);

export default connect(mapStateToProps, mapDispatchToProps)(connectedRoute);
