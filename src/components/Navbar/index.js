import React from "react";
import Navlinks from "./navlinks";
import logo from "../../assets/Logo.png";
import { Box, Link, useMediaQuery } from "@chakra-ui/react";

const Navbar = () => {
  const [isLessThan650] = useMediaQuery("(max-width: 600px)");

  return (
    <Box>
      <Box display={"flex"} justifyContent={"space-between"}>
        <Box mt={"auto"} mb={"auto"}>
          <Link to="/">
            <img src={logo} alt="logo" width={"70%"} />
          </Link>
        </Box>
        <Box>{isLessThan650 ? null : <Navlinks />}</Box>
      </Box>
    </Box>
  );
};

export default Navbar;
