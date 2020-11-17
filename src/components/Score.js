import React from "react";
import PropTypes from "prop-types";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  score: (props) => ({
    padding: [7, 13],
    color: props.color,
    borderTop: `2px solid ${props.color}`,
    borderBottom: `2px solid ${props.color}`,
    borderRadius: 10,
    fontSize: props.fontSize,
    textAlign: "center",
    fontFamily: "inherit",
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
  fontSize: 32,
  color: "#000",
};

Score.propTypes = {
  score: PropTypes.number,
  onClick: PropTypes.func,
};
