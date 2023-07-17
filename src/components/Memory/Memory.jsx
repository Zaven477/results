import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export const Memory = () => {
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
        bgcolor: "#EEE8AA",
        border: "none",
      }}
    >
      <Typography
        sx={{
          pl: "30px",
          pt: "6px",
          color: "#4682B4",
        }}
      >
        Memory
      </Typography>
      <Typography
        sx={{
          ml: "75px",
          pt: "6px",
        }}
      >
        92/100
      </Typography>
    </Box>
  );
};
