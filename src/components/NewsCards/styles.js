import { makeStyles } from "@mui/styles"; // Updated import statement to '@mui/styles'

const useStyles = makeStyles({
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: "45vh",
    padding: "10%",
    borderRadius: 10,
    color: "white",
  },
  infoCard: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
  },
  container: {
    padding: "0 5%",
    width: "100%",
    margin: 0,
  },
});

export default useStyles;