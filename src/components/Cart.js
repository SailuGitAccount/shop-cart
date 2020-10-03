import React from "react";
import { connect } from "react-redux";

function Cart(props) {
  return (
    <div>
      Cart {props.globalUserName}
      <p> productCount:{props.globalProductCount}</p>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    globalUserName: state.userName,
    globalProductCount: state.productCount,
  };
};
export default connect(mapStateToProps)(Cart);
