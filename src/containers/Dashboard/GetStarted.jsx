import { Component } from 'react';
import { connect } from "react-redux";
import View from '../../presentations/dashboard/getStarted';
import { getLoaderState, getNotifyState, getUserState } from '../../store/selector';

class GetStarted extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return <View />;
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
   
  };
};
 
export default connect(mapStateToProps, mapDispatchToProps)(GetStarted);