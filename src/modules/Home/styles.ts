import { BoxProps, Box as MuiBox } from "@mui/material";
import { styled } from "@mui/system";
import { Colors } from "../../styles/theme";

interface MuiBoxProps extends BoxProps {}

export const Box = styled(MuiBox)<MuiBoxProps>(({ theme }) => ({
  position: "relative",
  backgroundColor: Colors.grey[300],
  padding: "7px",
  borderRadius: "6px",
  "&::before": {
    content: "''",
    display: "block",
    paddingTop: "100%", // 1:1 aspect ratio (change this value for other ratios)
  },
  "> *": {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
}));
