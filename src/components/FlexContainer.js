import React from "react";
import PropTypes from "prop-types";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  container: (props) => ({
    display: "flex",
    flexDirection: props.flexDirection,
    justifyContent: props.justifyContent,
    align: {
      self: props.alignSelf,
      items: props.alignItems,
      content: props.alignContent,
    },
    flexWrap: props.flexWrap,
    flex: props.flex,
  }),
});

export default function FlexContainer({ children, className = "", ...props }) {
  const classes = useStyles(props);

  return <div className={`${classes.container} ${className}`}>{children}</div>;
}

FlexContainer.propTypes = {
  className: PropTypes.string,
};
