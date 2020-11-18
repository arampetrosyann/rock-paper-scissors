import React from "react";
import PropTypes from "prop-types";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  btn: (props) => ({
    padding: [7, 17],
    color: props.color,
    backgroundColor: props.backgroundColor,
    border: {
      color: props.color,
      width: 1.3,
      style: "solid",
      radius: 9,
    },
    fontSize: props.size,
    outline: "none",
    cursor: "pointer",
    transitionDuration: 379,
    "&:disabled": {
      opacity: 0.6,
      cursor: "not-allowed",
    },
    "&:hover, &:active": {
      borderRadius: 18,
    },
  }),
});

export default function Button({ value, disabled, onClick, onBlur, ...props }) {
  const classes = useStyles(props);

  return (
    <input
      type="button"
      value={value}
      className={classes.btn}
      onClick={onClick}
      onBlur={onBlur}
      disabled={disabled}
    />
  );
}

Button.defaultProps = {
  color: "#ffffff",
  backgroundColor: "transparent",
  size: 23,
};

Button.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  onBlur: PropTypes.func,
};
