import { Box, Grid, Typography } from "@mui/material";
import { MdOutlineModeEdit } from "react-icons/md";
import { MultilineChart } from "../../components/MultilineChart";
import { Colors } from "../../styles/theme";
import InfoBox from "./components/InfoBox";
import * as Styled from "./styles";

const Home = () => {
  const RenderButton = ({ variant }: { variant: "max" | "min" }) => {
    return (
      <Styled.Box>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <MdOutlineModeEdit size="24px" color={Colors.grey[600]} />
          <Typography fontSize="12px" fontWeight={800} color={Colors.grey[600]}>
            {variant === "max" ? "MAX" : "MIN"}
          </Typography>
        </Box>
      </Styled.Box>
    );
  };

  return (
    <Box height="100">
      <Grid container height="100%" spacing={2}>
        <Grid item xs={6}>
          <InfoBox variant="red" />
        </Grid>
        <Grid item xs={6}>
          <InfoBox variant="blue" />
        </Grid>
        <Grid
          item
          xs={1}
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
        >
          <RenderButton variant={"max"} />
          <RenderButton variant={"min"} />
        </Grid>
        <Grid item xs={10}>
          <MultilineChart />
        </Grid>
        <Grid
          item
          xs={1}
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
        >
          <RenderButton variant={"max"} />
          <RenderButton variant={"min"} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
