import React from "react";
import Navlinks from "./navlinks";
import logo from "../../assets/Logo.png";
import { Box, Link, useMediaQuery, Img } from "@chakra-ui/react";
import { useState } from "react";
import MenuIconImg from "../../assets/icon-hamburger.svg";
import Mobile from "./Mobile";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [isLargerThan800] = useMediaQuery("(min-width: 800px)");

  return (
    <Box maxW={isLargerThan800 ? "1150px" : "560px"} m={"auto"}>
      <Box
        display={"flex"}
        justifyContent={isLargerThan800 ? "space-between" : "space-around"}
        mt={"20px"}
      >
        <Box mt={"auto"} mb={"auto"} w={"40%"}>
          <Link to="/">
            <img
              src={logo}
              alt="logo"
              width={isLargerThan800 ? "25%" : "50%"}
            />
          </Link>
        </Box>

        <Box>
          {isLargerThan800 ? (
            <Navlinks />
          ) : (
            <Box ml="auto" onClick={() => setShow(!show)}>
              <Img src={MenuIconImg} />
            </Box>
          )}
        </Box>
      </Box>
      <Mobile show={show} onClose={() => setShow(false)} />
    </Box>
  );
};

export default Navbar;
