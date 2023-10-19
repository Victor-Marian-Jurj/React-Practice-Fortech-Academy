import Box from "@mui/material/Box";
import { Outlet } from "react-router-dom";

const MainView = () => {
  return (
    <Box
      component="main"
      sx={{
        margin: "3rem",
        mt: "5rem",
        width: "100%",
      }}
    >
      <Outlet />
    </Box>
  );
};

export default MainView;
