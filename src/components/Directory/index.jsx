import React, { Component } from "react";
import MenuItem from "../MenuItem";
import { connect } from "react-redux";

import "./index.scss";
import { selectDirectory } from "../../redux/directory/directorySelector";
class Directory extends Component {
  render() {
    return (
      <div className="directory-menu">
        {this.props.sections.map(({ id, ...otherSecProps }) => (
          <MenuItem key={id} {...otherSecProps} />
        ))}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    sections: selectDirectory(state)
  };
}

export default connect(
  mapStateToProps,
  null
)(Directory);
