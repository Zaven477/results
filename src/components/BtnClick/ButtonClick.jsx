import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { useStyles } from "./style";

export const Btn = () => {
  const classes = useStyles();

  return (
    <Box display="flex" justifyContent="center" ml="30px" mt="30px">
      <Button variant="contained" color="success" className={classes.btn}>
        Continue
      </Button>
    </Box>
  );
};
