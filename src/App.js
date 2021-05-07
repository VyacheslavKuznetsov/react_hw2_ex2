import "antd/dist/antd.css";
import { Row, Col } from "antd";
import { InputNumber } from "antd";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { sum: 1}
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(newValue) {
    this.setState({
      sum: newValue * (newValue + 1) / 2
    })
  }

  render() {
    return (
      <div className="App">
        <Row>
          <Col xs={2} sm={2} md={2} lg={2} xl={2}>
            Введите число N:
          </Col>
          <Col xs={2} sm={2} md={2} lg={2} xl={2}>
            <InputNumber min={1} defaultValue={1} onChange={this.handleChange} />
          </Col>
          <Col xs={2} sm={2} md={2} lg={2} xl={2}>
            {this.state.sum}
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
