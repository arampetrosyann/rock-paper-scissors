import React from "react";
import PropTypes from "prop-types";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  score: (props) => ({
    padding: [7, 13],
    color: props.color,
    borderTop: {
      color: props.color,
      width: 2,
      style: "solid",
    },
    borderBottom: {
      color: props.color,
      width: 2,
      style: "solid",
    },
    borderRadius: 10,
    font: {
      size: props.size,
      family: "inherit",
    },
    textAlign: "center",
  }),
});

export default function Score({ score, onClick, ...props }) {
  const classes = useStyles(props);

  return (
    <span className={classes.score} onClick={onClick}>
      score: {score}
    </span>
  );
}

Score.defaultProps = {
  score: 0,
  size: 32,
  color: "#000",
};

Score.propTypes = {
  score: PropTypes.number,
  onClick: PropTypes.func,
};
