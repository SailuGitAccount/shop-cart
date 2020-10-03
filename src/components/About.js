import React from "react";
import { connect } from "react-redux";

function About(props) {
  return <div>About:{props.adaptedUsername}</div>;
}
const mapStateToProps = (state) => {
  return {
    adaptedUsername: state.userName,
  };
};
export default connect(mapStateToProps)(About);
