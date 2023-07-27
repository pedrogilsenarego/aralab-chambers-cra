import { Box } from "@mui/material";

const HomepageLayout = (props: any) => {
  return (
    <Box
      height="100vh"
      width="100vw"
      display="flex"
      justifyContent="center"
      alignItems="center"
      style={{ backgroundColor: "whitesmoke" }}
    >
      <Box
        padding="20px 20px"
        height="100vh"
        maxHeight="480px"
        maxWidth="800px"
        borderRadius="2px"
        style={{
          backgroundColor: "white",
          boxShadow: "1px 1px 15px #00000066",
        }}
      >
        {props.children}
      </Box>
    </Box>
  );
};

export default HomepageLayout;
