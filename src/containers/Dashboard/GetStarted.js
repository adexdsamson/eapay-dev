import { Component } from 'react';
import { connect } from "react-redux";

const GetStarted = ({ user }) => {
  return ( 
    <> 
      <div style={{ height: '100vh' }} className='d-flex flex-column justify-content-center align-items-center'>
        <h3>Welcome to your dashboard { user?.name }</h3>
        <p>Nice having you here, we are working on the dashboard to make it look good and add value to your business</p>
      </div>
    </>
   );
}


const mapStateToProps = (state) => {
  return {
    isloading: state.otherReducer.isloading,
    isNotification: state.otherReducer.notify,
    user: state.otherReducer.user
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
   
  };
};
 
export default connect(mapStateToProps, mapDispatchToProps)(GetStarted);