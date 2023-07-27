import { Box } from "@mui/material";

const HomepageLayout = (props: any) => {
  return (
    <>
      <Box margin="20px 20px">{props.children}</Box>
    </>
  );
};

export default HomepageLayout;
