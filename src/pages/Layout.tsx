import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import { Box } from "@chakra-ui/react";

const Layout = () => {

  return (
    <>
      <NavBar />
      <Box padding={{base: 3, md: 5}}>
        <Outlet />
      </Box>
    </>
  )

}

export default Layout;