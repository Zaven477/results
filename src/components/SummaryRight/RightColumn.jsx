import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Rea } from "../Rea/Rea";
import { Memory } from "../Memory/Memory";
import { Verbal } from "../Verbal/Verbal";
import { Visual } from "../Visual/Visual";
import { Btn } from "../BtnClick/ButtonClick";

export const RightColumn = () => {
  return (
    <Box>
      <Typography
        sx={{
          pt: "15px",
          ml: "30px",
          fontWeight: "700",
        }}
      >
        Summary
      </Typography>
       <Rea />
       <Memory />
       <Verbal />
       <Visual />
       <Btn />
    </Box>
  );
};
