import React from "react";
import { Box, Text, Img, Grid } from "@chakra-ui/react";
import { Link } from "react-router-dom";

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
      <Box display={"flex"} gap={"90px"}>
        <Grid templateColumns={"repeat(4,2fr)"}>
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
        </Grid>
      </Box>
    </Box>
  );
};

export default Footer;
