import React, { Component } from "react";
import View from "../../presentation/Index";

class IndexPage extends Component {
  state = {
    value: ''
  };

  handleInput = event => {
    this.setState({ value: event.target.value })
  }

  handleSubmit = () => {}

  render() {
    let { state: { value }, handleInput } = this
    return <View inputValue={value} onChange={handleInput} />;
  }
}

export default IndexPage;
