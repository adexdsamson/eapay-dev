import View from '../../presentations/dashboard';
import { connect } from 'react-redux'
import { Component } from 'react';
import { drawer } from '../../store/actionTypes';


class DashboardContainer extends Component {
  state = {  }
  render() { 
    let { props: { onDrawer } } = this;
    return <View setDrawer={onDrawer} user />;
  }
}

const mapStateToProps = state => {
  return {

  }
}

const mapDispatchToProps = dispatch => {
  return {
    onDrawer: () => dispatch(drawer(true))
  }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);