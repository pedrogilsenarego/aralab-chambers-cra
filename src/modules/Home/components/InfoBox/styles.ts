import { BoxProps, Box as MuiBox } from "@mui/material";
import { styled } from "@mui/system";
import { Colors } from "../../../../styles/theme";

interface MuiBoxProps extends BoxProps {
  variant: "red" | "blue";
}

export const ContainerBox = styled(MuiBox)<MuiBoxProps>(
  ({ theme, variant }) => ({
    //backgroundColor: variant === "red" ? Colors.red[400] : Colors.blue[400],
    background:
      variant === "red"
        ? `linear-gradient(0deg, ${Colors.red[400]} 0%, ${Colors.red[200]} 100%)`
        : `linear-gradient(0deg, ${Colors.blue[400]} 0%, ${Colors.blue[200]} 100%)`,
    padding: "10px 20px",
    borderRadius: "6px",
  })
);
