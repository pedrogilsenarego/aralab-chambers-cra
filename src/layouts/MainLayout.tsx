import { Box } from "@mui/material";

const HomepageLayout = (props: any) => {
  return (
    <>
      <Box padding="20px 20px" height="100vh">
        {props.children}
      </Box>
    </>
  );
};

export default HomepageLayout;
