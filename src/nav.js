import PropTypes from "prop-types";
import React from "react";
import styleable from "react-styleable";

import css from "./nav.module.css";

function Nav(props) {
  return (
    <div className={props.css.root}>
      <button className={props.css.prev} onClick={props.onPrevious}>
        &#10094;
      </button>
      <button className={props.css.next} onClick={props.onNext}>
        &#10095;
      </button>
    </div>
  );
}

Nav.propTypes = {
  onPrevious: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
  hasPrevious: PropTypes.bool,
  hasNext: PropTypes.bool
};

export default styleable(css)(Nav);
