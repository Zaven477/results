import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export const ContentLeftColumn = () => {
  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        justifyContent: "center",
        zIndex: "tooltip",
        height: "140px",
        width: "140px",
        bgcolor: "#7B68EE",
        borderRadius: "50%",
        margin: "0 auto",
        mt: "25px",
      }}
    >
      <Typography
        sx={{
          position: "absolute",
          fontSize: 50,
          color: "white",
          fontWeight: 700,
          pt: "20%",
        }}
      >
        76
      </Typography>
      <Typography
        sx={{
          position: "absolute",
          top: "68%",
          fontSize: "12px",
          color: "white",
        }}
      >
        of 100
      </Typography>
    </Box>
  );
};
