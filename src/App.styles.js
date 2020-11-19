import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  app: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    minHeight: "100vh",
    color: "#f5f5f5",
    background: "radial-gradient(circle at top, #246a97 46%, #03a89e)",
    font: {
      size: 23,
      family: "Noto",
    },
  },
  header: {
    width: "100%",
    padding: [16, 9],
  },
  main: {
    flex: 1,
    width: "100%",
    padding: [16, 29],
  },
  scoreBox: {
    width: "100%",
    padding: [24, 0],
  },
  table: {
    flex: 1,
    width: "100%",
    padding: [12, 0],
  },
  result: {
    border: "none",
  },
  "@media (max-width: 767.98px)": {
    header: {
      fontSize: 25,
    },
    table: {
      flexDirection: "column",
    },
    result: {
      margin: [32, 0],
      borderTop: {
        color: "initial",
        width: 2,
        style: "solid",
      },
      borderBottom: {
        color: "initial",
        width: 2,
        style: "solid",
      },
    },
  },
});

export default useStyles;
