import React from "react";
import PropTypes from "prop-types";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  img: (props) => ({
    width: props.width,
    margin: props.margin,
    cursor: "pointer",
    transitionDuration: 450,
    "&:hover, &:active": {
      transform: "rotate(-23deg)",
    },
  }),
});

export default function Image({ src, alt, onClick, className, ...props }) {
  const classes = useStyles(props);

  return (
    <img
      className={`${classes.img} ${className}`}
      src={src}
      alt={alt}
      onClick={onClick}
    />
  );
}

Image.defaultProps = {
  width: 80,
  margin: 44,
  className: "",
};

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onClick: PropTypes.func,
  className: PropTypes.string,
};
