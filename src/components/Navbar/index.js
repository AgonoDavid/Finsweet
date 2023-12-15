import React from "react";
import Navlinks from "./navlinks";
import logo from "../../assets/Logo.png";
import { Box, Link, useMediaQuery } from "@chakra-ui/react";

const Navbar = () => {
  const [isLessThan650] = useMediaQuery("(max-width: 600px)");

  return (
    <Box maxW={"1150px"} m={"auto"}>
      <Box display={"flex"} justifyContent={"space-between"} mt={"20px"}>
        <Box mt={"auto"} mb={"auto"} w={"40%"}>
          <Link to="/">
            <img src={logo} alt="logo" width={"25%"} />
          </Link>
        </Box>
        <Box>{isLessThan650 ? null : <Navlinks />}</Box>
      </Box>
    </Box>
  );
};

export default Navbar;
