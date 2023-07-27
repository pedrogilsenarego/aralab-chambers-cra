import { Box, Grid, Typography } from "@mui/material";
import { MdOutlineModeEdit } from "react-icons/md";
import { MultilineChart } from "../../components/MultilineChart";
import { Colors } from "../../styles/theme";
import InfoBox from "./components/InfoBox";
import * as Styled from "./styles";

const Home = () => {
  const RenderButton = ({ variant }: { variant: "max" | "min" }) => {
    return (
      <Styled.Button>
        <MdOutlineModeEdit size="26px" color={Colors.grey[600]} />
        <Typography fontSize="12px" fontWeight={800} color={Colors.grey[600]}>
          {variant === "max" ? "MAX" : "MIN"}
        </Typography>
      </Styled.Button>
    );
  };

  return (
    <Box style={{ border: "solid 2px blue", height: "100%" }}>
      <Grid container style={{ border: "solid 2px red", height: "100%" }}>
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
        <Grid
          item
          xs={10}
          style={{
            border: "solid 2px yellow",
          }}
        >
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
