import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  logoContainer: {
    padding: "0 5%",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column-reverse",
      textAlign: "center",
    },
  },
  alanLogo: {
    height: "27vmin",
    borderRadius: "15%",
    padding: "0 5%",
    margin: "3% 0",
    [theme.breakpoints.down("sm")]: {
      height: "35vmin",
    },
  },
  infoContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  card: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "50%",
    padding: "3%",
    borderRadius: 10,
    color: "white",
    backgroundColor: "rgba(21, 101, 192)",
    margin: "0 12px",
    textAlign: "center",
    height: "25vmin",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column-reverse",
      textAlign: "center",
      width: "100%",
      height: "initial",
      "&:nth-of-type(1)": {
        marginBottom: "12px",
      },
    },
  },
}));
