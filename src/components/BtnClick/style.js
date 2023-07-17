import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  btn: {
    padding: "5px 80px !important",
    borderRadius: "16px !important",
    '@media (max-width: 470px)': {
      marginRight: "29px !important"
    },
  },
});
