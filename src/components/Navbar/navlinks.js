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
      fontSize={"13px"}
    >
      {/*Home link*/}
      <Link to="/">
        <Text _hover={{ fontWeight: "bold", textDecoration: "underline" }}>
          Home
        </Text>
      </Link>
      {/* Product link*/}
      <Link to="/product">
        <Text _hover={{ fontWeight: "bold", textDecoration: "underline" }}>
          Product
        </Text>
      </Link>
      {/*pricing link*/}
      <Link to="/pricing">
        <Text _hover={{ fontWeight: "bold", textDecoration: "underline" }}>
          Pricing
        </Text>
      </Link>
      {/*about us link*/}
      <Link to="/about">
        <Text _hover={{ fontWeight: "bold", textDecoration: "underline" }}>
          About Us
        </Text>
      </Link>
      {/*blog link*/}
      <Link to="/blog">
        <Text _hover={{ fontWeight: "bold", textDecoration: "underline" }}>
          Blog
        </Text>
      </Link>
      {/*contact link*/}
      <Link to="/contact">
        <Text _hover={{ fontWeight: "bold", textDecoration: "underline" }}>
          Contact
        </Text>
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
