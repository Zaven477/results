import Box from "@mui/material/Box";
import { RightColumn } from "../SummaryRight/RightColumn";
import { ContentLeftColumn } from "../ContentLeftColumn/ContentLeftColumn";
import { Title } from "../Title/Title";
import { Text } from "../Text/Text";

export const Summary = () => {
  return (
    <Box
      sx={{
        display: "flex",
        boxShadow: 1,
        width: "600px",
        height: "400px",
        margin: "0 auto",
        mt: "150px",
        borderRadius: 6,
        '@media (max-width: 470px)': {
          flexDirection: "column",
          width: "300px",
          height: "800px"
        },
      }}
    >
      <Box
        sx={{
          zIndex: "tooltip",
          width: "50%",
          bgcolor: "#4169E1",
          height: "100%",
          borderRadius: 6,
          "@media (max-width: 470px)": {
            width: "100%",
            height: "50%"
          },
        }}
      >
        <Title />
        <ContentLeftColumn />
        <Text />
      </Box>
      <RightColumn />
    </Box>
  );
};
