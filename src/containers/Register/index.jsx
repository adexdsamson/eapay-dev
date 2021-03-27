import { Component } from "react";
import View from "../../presentations/register";
import Adapter from "../../adapter";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { VERIFICATION_ROUTE } from "../../routes";
import { notify } from "../../store/actionTypes";

class RegisterContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleSubmit = async (values) => {
    const response = await this.props.onCreate(values);
    if (response) await this.props.history.push(VERIFICATION_ROUTE);
  };

  render() {
    let {
      handleSubmit,
      props: { isloading, isNotification, onClose },
    } = this;
    return (
      <View
        onSubmit={handleSubmit}
        notify={isNotification}
        loading={isloading}
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
    onCreate: (data) => dispatch(Adapter.createUserAccount(data)),
    onClose: () => dispatch(notify("")),
  };
};

const connectedRoute = withRouter(RegisterContainer)

export default connect(mapStateToProps, mapDispatchToProps)(connectedRoute);
