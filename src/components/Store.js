import React, { Component } from "react";
import { Row, Col, Form, Button, Badge } from "react-bootstrap";
import { connect } from "react-redux";
import {
  setUpdatedUserName,
  countIncrement,
  countDecrement,
  updateProductCount,
} from "./redux/UserActions";

class Store extends Component {
  constructor(props) {
    super(props);
    this.userNameRef = React.createRef();
    this.state = { isUserHandlerCalled: false };
  }

  userNameHandler = () => {
    this.setState({
      isUserHandlerCalled: true,
    });
    this.props.newUpdatedName(this.userNameRef.current.value);
  };
  decrementCounter = () => {
    let { globalProductCount, updateProductCount } = this.props;
    if (globalProductCount >= 1) {
      globalProductCount = globalProductCount - 1;
    }
    updateProductCount(globalProductCount);
  };
  incrementCounter = () => {
    let { globalProductCount, updateProductCount } = this.props;
    globalProductCount = globalProductCount + 1;
    updateProductCount(globalProductCount);
  };
  render() {
    const disableButton = this.props.globalProductCount < 1 ? true : false;
    const buttonBgColor = this.state.isUserHandlerCalled ? "red" : "";
    return (
      <div>
        <Row>
          <Col xs={10} sm={6}>
            STORE
            <Form>
              <Form.Group controlId="formBasic">
                <Form.Label>Input</Form.Label>
                <Form.Control
                  className="mr-sm-2"
                  ref={this.userNameRef}
                  type="text"
                  placeholder="Enter username"
                />
              </Form.Group>

              <Button
                variant="primary"
                onClick={this.userNameHandler}
                type="button"
              >
                Update UserName
              </Button>
            </Form>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button
              disabled={disableButton}
              onClick={this.decrementCounter}
              variant="primary"
              style={{
                backgroundColor: this.state.isUserHandlerCalled ? "red" : "",
              }}
            >
              -
            </Button>{" "}
            <span>
              Product Counter{" "}
              <Badge variant="secondary">{this.props.globalProductCount}</Badge>
            </span>
            <Button onClick={this.incrementCounter} variant="primary">
              +
            </Button>{" "}
          </Col>
        </Row>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    globalUserName: state.userName,
    globalProductCount: state.productCount,
  };
};
/*const mapDispatchToProps = (dispatch) => {
  return {
    newUpdatedName: () => {
      dispatch(setUpdatedUserName());
    },
  };
};*/

const mapDispatchToProps = (dispatch) => ({
  newUpdatedName: (userName) => dispatch(setUpdatedUserName(userName)),
  productIncrementCount: (count) => dispatch(countIncrement(count)),
  productDecrementCount: (count) => dispatch(countDecrement(count)),
  updateProductCount: (count) => dispatch(updateProductCount(count)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Store);
