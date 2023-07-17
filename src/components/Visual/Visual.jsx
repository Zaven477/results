import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export const Visual = () => {
  return (
    <Box
      sx={{
        display: "flex",
        border: "1px solid",
        height: "35px",
        width: "240px",
        mt: "30px",
        ml: "30px",
        borderRadius: 1,
        bgcolor: "#B0E0E6",
        border: "none",
      }}
    >
      <Typography
        sx={{
          pl: "30px",
          pt: "6px",
          color: "#0000FF",
        }}
      >
        Visual
      </Typography>
      <Typography
        sx={{
          ml: "87px",
          pt: "6px",
        }}
      >
        72/100
      </Typography>
    </Box>
  );
};
