import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import CustomButton from "../Button";

const Navlinks = () => {
  return (
    <Box
      display={"flex"}
      flexDir={"row"}
      alignItems={"center"}
      gap={"40px"}
      mt={"auto"}
      mb={"auto"}
    >
      {/*Home link*/}
      <Link to="/">
        <Text>Home</Text>
      </Link>
      {/* Product link*/}
      <Link to="/product">
        <Text>Product</Text>
      </Link>
      {/*pricing link*/}
      <Link to="/pricing">
        <Text>Pricing</Text>
      </Link>
      {/*about us link*/}
      <Link to="/about">
        <Text>About Us</Text>
      </Link>
      {/*blog link*/}
      <Link to="/blog">
        <Text>Blog</Text>
      </Link>
      {/*contact link*/}
      <Link to="/contact">
        <Text>Contact</Text>
      </Link>
      <Box>
        <Link to="/pricing">
          <CustomButton>Free Trial</CustomButton>
        </Link>
      </Box>
    </Box>
  );
};

export default Navlinks;
