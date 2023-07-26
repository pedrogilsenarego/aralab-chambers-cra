import { BoxProps, Box as MuiBox } from "@mui/material";
import { styled } from "@mui/system";
import { Colors } from "../../../../styles/theme";

interface MuiBoxProps extends BoxProps {
  variant: "red" | "blue";
}

export const ContainerBox = styled(MuiBox)<MuiBoxProps>(
  ({ theme, variant }) => ({
    width: "100%",
    backgroundColor: variant === "red" ? Colors.red[400] : Colors.blue[400],
    padding: "20px",
  })
);
