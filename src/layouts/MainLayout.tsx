import { Grid } from "@mui/material";

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
          {props.children}
        </Grid>
      </Grid>
    </>
  );
};

export default HomepageLayout;
