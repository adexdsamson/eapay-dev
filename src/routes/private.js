import { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { getUserState } from "../store/selector";

class PrivateRoute extends Component {
  render() {
    const {
      props: { component: Component, user, isLoggedIn, onUser, ...rest },
    } = this;
    return (
      <Route
        {...rest}
        render={(props) => {
          return isLoggedIn ? <Component {...props} /> : <Redirect to />;
        }}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: getUserState(state),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // onUserOffline: () => {
    //   dispatch(userOffline());
    // }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute)
