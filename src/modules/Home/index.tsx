import { Box, Button, Grid } from "@mui/material";
import InfoBox from "./components/InfoBox";

const Home = () => {
  return (
    <Box>
      <Grid container>
        <Grid item xs={6}>
          <InfoBox variant="red" />
        </Grid>
        <Grid item xs={6}>
          <InfoBox variant="blue" />
        </Grid>
        <Grid item xs={1} style={{ backgroundColor: "black" }}>
          <Button>t</Button>
          <Button>t</Button>
        </Grid>
        <Grid item xs={10} style={{ backgroundColor: "green" }}></Grid>
        <Grid item xs={1} style={{ backgroundColor: "red" }}></Grid>
      </Grid>
    </Box>
  );
};

export default Home;
