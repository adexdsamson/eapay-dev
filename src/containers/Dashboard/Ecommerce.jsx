import { Component } from 'react';
import { connect } from 'react-redux';
import View from '../../presentations/dashboard/eCommerce';
import { drawer } from '../../store/actionTypes';
import { getLoaderState, getNotifyState, getUserState } from '../../store/selector';


class Ecommerce extends Component {
  state = {  }
  render() { 
    let { props: { onDrawer } } = this;
    return ( 
      <View setDrawer={onDrawer} />
     );
  }
}


const mapStateToProps = (state) => {
  return {
    isloading: getLoaderState(state),
    isNotification: getNotifyState(state),
    user: getUserState(state)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
   onDrawer: () => dispatch(drawer(true))
  };
};
 
export default connect(mapStateToProps, mapDispatchToProps)(Ecommerce);