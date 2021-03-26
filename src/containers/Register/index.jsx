import { Component } from 'react';
import View from '../../presentations/register';
import Adapter from '../../adapter';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { GET_STARTED_DASHBOARD_ROUTE } from '../../routes'
import { notify } from '../../store/actionTypes';

class RegisterContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }

  handleSubmit = async (values) => {
    const response = await this.props.onCreate(values);
    // if (response) return <Redirect path={GET_STARTED_DASHBOARD_ROUTE} />
  }

  render() { 
    let { handleSubmit, props: { isloading, isNotification, onClose } } = this
    return <View onSubmit={handleSubmit} notify={isNotification} loading={isloading}  onNotificationCancel={onClose} />;
  }
}

const mapStateToProps = state => {
  return {
    isloading: state.otherReducer.isloading,
    isNotification: state.otherReducer.notify,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onCreate: (data) => dispatch(Adapter.createUserAccount(data)),
    onClose: () => dispatch(notify(''))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterContainer);