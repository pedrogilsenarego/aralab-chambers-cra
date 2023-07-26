import { Box, Grid } from "@mui/material";

const HomepageLayout = (props: any) => {
  return (
    <>
      <Grid
        container
        direction="column"
        justifyContent="space-between"
        style={{ minHeight: "100vh" }}
      >
        <Grid item xs={12}>
          <Box margin="20px 20px">{props.children}</Box>
        </Grid>
      </Grid>
    </>
  );
};

export default HomepageLayout;
