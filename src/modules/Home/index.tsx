import { Box, Grid, Typography } from "@mui/material";
import InfoBox from "./components/InfoBox";

const Home = () => {
  return (
    <Box width="100%" display="flex" justifyContent="center">
      <Grid container columnSpacing={2}>
        <Grid item xs={6}>
          <InfoBox variant="red">
            <Typography color="error.main">ole</Typography>
          </InfoBox>
        </Grid>
        <Grid item xs={6}>
          <InfoBox variant="blue">
            <Typography color="error.main">ole</Typography>
          </InfoBox>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
