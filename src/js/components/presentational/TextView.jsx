import React, {Component} from "react";
import PropTypes from "prop-types";

const TextView = ({content}) => (
    <div>
      {content}
    </div>
);

TextView.propTypes = {
  content: PropTypes.string.isRequired,
};

export default TextView;
