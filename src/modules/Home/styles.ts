import { ButtonProps, Button as MuiButton } from "@mui/material";
import { styled } from "@mui/system";
import { Colors } from "../../styles/theme";

interface MuiButtonProps extends ButtonProps {}

export const Button = styled(MuiButton)<MuiButtonProps>(({ theme }) => ({
  backgroundColor: Colors.grey[300],
  flexDirection: "column",
  aspectRatio: 1,
}));
