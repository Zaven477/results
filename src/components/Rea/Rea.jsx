import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export const Rea = () => {
  return (
    <Box
      sx={{
        display: "flex",
        border: "1px solid",
        height: "35px",
        width: "240px",
        mt: "40px",
        ml: "30px",
        borderRadius: 1,
        bgcolor: "#FFC0CB",
        border: "none",
      }}
    >
      <Typography
        sx={{
          pl: "30px",
          pt: "6px",
          color: "#CD5C5C",
        }}
      >
        Reaction
      </Typography>
      <Typography
        sx={{
          ml: "70px",
          pt: "6px",
        }}
      >
        80/100
      </Typography>
    </Box>
  );
};
