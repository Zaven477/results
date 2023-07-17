import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export const Text = () => {
  return (
    <Box>
      <Typography
        sx={{
          display: "flex",
          justifyContent: "center",
          pt: "30px",
          fontSize: "24px",
          color: "white",
          fontWeight: "700",
        }}
      >
        Great
      </Typography>
      <Typography
        sx={{
          textAlign: "center",
          pt: "20px",
          color: "white",
        }}
      >
        You scored higher than 65% of the people who have taken these tests
      </Typography>
    </Box>
  );
};
