import { Box, Grid, Typography } from "@mui/material";
import { BsDroplet } from "react-icons/bs";
import { FiMenu } from "react-icons/fi";
import { PiThermometerHotDuotone } from "react-icons/pi";
import { Colors } from "../../../../styles/theme";
import { ContainerBox } from "./styles";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  variant: "blue" | "red";
}

const VALUE = 25;
const SET_VALUE = 25;

const InfoBox = ({ variant, ...props }: Props) => {
  return (
    <ContainerBox variant={variant} {...props}>
      <Grid container>
        <Grid item xs={12} display="flex" alignItems="center">
          <Grid container>
            <Grid item xs={1} display="flex" alignItems="center">
              {variant === "red" ? (
                <>
                  <PiThermometerHotDuotone
                    size="60px"
                    color={Colors.white[400]}
                  />
                </>
              ) : (
                <>
                  <BsDroplet size="60px" color={Colors.white[400]} />
                </>
              )}
            </Grid>
            <Grid
              item
              xs={10}
              display="flex"
              flexDirection="column"
              alignItems="center"
            >
              <Typography fontSize="30px" color="white">
                Temperature
              </Typography>
              <Typography fontSize="90px" color="white">
                {VALUE.toFixed(1)}
              </Typography>
            </Grid>
            <Grid item xs={1}>
              <FiMenu size="30px" color="white" />
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          display="flex"
          justifyContent="space-between"
          alignItems="end"
        >
          <Typography
            fontSize="36px"
            color={Colors.white[400]}
            lineHeight="36px"
            fontWeight={200}
          >
            {variant === "red" ? "\u00B0C" : "%rH"}
          </Typography>
          <Box display="flex" alignItems="end" columnGap={1}>
            <Typography
              fontSize="40px"
              color={Colors.white[400]}
              lineHeight="40px"
            >
              {SET_VALUE.toFixed(1)}
            </Typography>
            <Typography color={Colors.white[400]}>set value</Typography>
          </Box>
        </Grid>
      </Grid>
    </ContainerBox>
  );
};

export default InfoBox;
