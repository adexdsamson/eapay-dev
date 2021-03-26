import { Component } from "react";
import View from "../../presentations/login";
import Adapter from "../../adapter";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { GET_STARTED_DASHBOARD_ROUTE } from "../../routes";

class LoginContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleSubmit = async (values) => {
    const response = await this.props.onLogin(values);
    // if (response) return <Redirect path={GET_STARTED_DASHBOARD_ROUTE} />
  };

  render() {
    let {
      handleSubmit,
      props: { isloading, isNotification },
    } = this;
    return (
      <View
        onSubmit={handleSubmit}
        loading={isloading}
        notify={isNotification}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isloading: state.otherReducer.isloading,
    isNotification: state.otherReducer.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLogin: (data) => dispatch(Adapter.loginUserAccount(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
