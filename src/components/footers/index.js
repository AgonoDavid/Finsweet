import React from "react";
import { Box, Text, Img, Grid, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import logo from "../../assets/Logo2.png";

const Footer = () => {
  const company = [
    {
      name: "About Us",
      to: "/about",
    },
    {
      name: "Why Choose Us",
      to: "/about",
    },
    {
      name: "Pricing",
      to: "/pricing",
    },
    {
      name: "Testimonial",
      to: "#",
    },
  ];

  const resources = [
    {
      name: "Privacy Policy",
      to: "#",
    },
    {
      name: "Terms and Condition",
      to: "#",
    },
    {
      name: "Blog",
      to: "/blog",
    },
    {
      name: "Contact Us",
      to: "/contact",
    },
  ];

  const product = [
    {
      name: "Project Management",
      to: "#",
    },
    {
      name: "Time Tracker",
      to: "#",
    },
    {
      name: "Time Scedule",
      to: "#",
    },
    {
      name: "Lead Generate",
      to: "#",
    },
    {
      name: "Remote Collaboration",
      to: "#",
    },
  ];

  return (
    <Box bg={"#1D2130"} textColor={"white"}>
      <Box display={"flex"}>
        <Grid templateColumns={"repeat(4,1fr)"} gap={"90px"}>
          {/*Compnay footer */}
          <Box display={"flex"} flexDir={"column"} gap={"10px"}>
            <Text>Company</Text>
            {company.map((data) => (
              <Link to={data.to}>
                <Text
                  fontSize={"12px"}
                  _hover={{
                    textDecoration: "underline",
                  }}
                  textColor={"white"}
                >
                  {data.name}
                </Text>
              </Link>
            ))}
          </Box>
          {/*Resources */}
          <Box display={"flex"} flexDir={"column"} gap={"10px"}>
            <Text>Resources</Text>
            {resources.map((data) => (
              <Link to={data.to}>
                <Text
                  fontSize={"12px"}
                  _hover={{
                    textDecoration: "underline",
                  }}
                  textColor={"white"}
                >
                  {data.name}
                </Text>
              </Link>
            ))}
          </Box>
          {/*Product */}
          <Box display={"flex"} flexDir={"column"} gap={"10px"}>
            <Text>Product</Text>
            {product.map((data) => (
              <Link to={data.to}>
                <Text
                  fontSize={"12px"}
                  _hover={{
                    textDecoration: "underline",
                  }}
                  textColor={"white"}
                >
                  {data.name}
                </Text>
              </Link>
            ))}
          </Box>
          <Box>
            <Img src={logo} alt="logo" />
            <Box bg={"#2B2E3C"}>
              <input
                type="text"
                style={{ backgroundColor: "#2B2E3C", padding: "10px" }}
                placeholder="Enter your Email"
              ></input>
              <Button></Button>
            </Box>
          </Box>
        </Grid>
      </Box>
    </Box>
  );
};

export default Footer;
