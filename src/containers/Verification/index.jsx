import { Component } from "react";
import View from "../../presentations/verification";
import Adapter from "../../adapter";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { GET_STARTED_DASHBOARD_ROUTE } from "../../routes";
import { notify } from "../../store/actionTypes";

class VerificationContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleSubmit = async (values) => {
    const user = this.props.user;
    const data = {
      ...values,
      phone: `+${user?.phone}`
    }
    const response = await this.props.onVerification(data, {
      id: user?._id,
      verify: user?.newDevice,
    });
    if (response) this.props.history.push(GET_STARTED_DASHBOARD_ROUTE)
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
    user: state.otherReducer.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onVerification: (data, query) =>
      dispatch(Adapter.verifyUserAccount(data, query)),
    onClose: () => dispatch(notify("")),
  };
};

const connectedRoute = withRouter(VerificationContainer);

export default connect(mapStateToProps, mapDispatchToProps)(connectedRoute);
