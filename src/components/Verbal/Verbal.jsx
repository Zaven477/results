import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export const Verbal = () => {
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
        bgcolor: "#E0FFFF",
        border: "none",
      }}
    >
      <Typography
        sx={{
          pl: "30px",
          pt: "6px",
          color: "#66CDAA",
        }}
      >
        Verbal
      </Typography>
      <Typography
        sx={{
          ml: "87px",
          pt: "6px",
        }}
      >
        61/100
      </Typography>
    </Box>
  );
};
