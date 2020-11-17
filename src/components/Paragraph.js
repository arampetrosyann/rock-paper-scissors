import React from "react";
import PropTypes from "prop-types";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  par: (props) => ({
    display: props.display,
    margin: props.margin,
    padding: props.padding,
    color: props.color,
    backgroundColor: props.backgroundColor,
    border: props.border,
    fontSize: props.size,
    textAlign: props.align,
  }),
});

export default function Paragraph({ text, ...props }) {
  const classes = useStyles(props);

  return <p className={classes.par}>{text}</p>;
}

Paragraph.defaultProps = {
  text: "",
  margin: 0,
};

Paragraph.propTypes = {
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
