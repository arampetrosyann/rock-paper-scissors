import React from "react";
import PropTypes from "prop-types";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  figure: (props) => ({
    width: props.width,
    margin: props.margin,
    cursor: "pointer",
    transitionDuration: 450,
    "&:hover, &:active": {
      transform: "rotate(-23deg)",
    },
  }),
});

export default function Figure({ src, alt, onClick, ...props }) {
  const classes = useStyles(props);

  return (
    <span className={classes.figure} onClick={onClick}>
      <img src={src} alt={alt} />
    </span>
  );
}

Figure.defaultProps = {
  width: 80,
  margin: 44,
};

Figure.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onClick: PropTypes.func,
};
