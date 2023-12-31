import React from "react";
import { Box, Text, Img, Grid, Button, useMediaQuery } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import logo from "../../assets/Logo2.png";
import styles from "./style.module.css";
import line from "../../assets/Line.png";
import { FaLinkedin, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const [isLargerThan800] = useMediaQuery("(min-width: 800px)");
  const [isMdScreen] = useMediaQuery("(max-width: 1024px)");

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
    <Box bg={"#1D2130"} textColor={"white"} py={"60px"}>
      <Box
        display={"flex"}
        maxW={[
          isLargerThan800 ? "1150px" : "350px",
          isMdScreen ? "750px" : null,
        ]}
        m={"auto"}
      >
        <Box>
          <Grid
            templateColumns={
              isLargerThan800 ? "repeat(4,1fr)" : "repeat(1,1fr)"
            }
            gap={isLargerThan800 ? "10px" : "40px"}
          >
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
                    textColor={"#B4B4B3"}
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
                    textColor={"#B4B4B3"}
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
                    textColor={"#B4B4B3"}
                  >
                    {data.name}
                  </Text>
                </Link>
              ))}
            </Box>
            <Box>
              <Box mb={"20px"}>
                <Link to="/">
                  <Img src={logo} alt="logo" w={"50%"} />
                </Link>
              </Box>
              <Text pb={"10px"}>Subscribe to our Newsletter</Text>
              <Box
                bg={"#2B2E3C"}
                pl={"10px"}
                w={"100%"}
                display={"flex"}
                gap={"40px"}
                justifyContent={"space-between"}
                borderTopLeftRadius={"5px"}
                borderBottomLeftRadius={"5px"}
              >
                <input
                  type="text"
                  style={{
                    backgroundColor: "#2B2E3C",
                    fontSize: "13px",
                    width: "100%",
                  }}
                  placeholder="Enter your Email"
                ></input>
                <Button
                  style={styles}
                  size={"md"}
                  _hover={{
                    backgroundColor: "black",
                    textColor: "white",
                  }}
                  fontSize={"13px"}
                  p={"22px"}
                >
                  Subscribe
                </Button>
              </Box>
            </Box>
          </Grid>
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            mt={"80px"}
            gap={"10px"}
          >
            <Box mt={"auto"} mb={"auto"}>
              <Img src={line} />
            </Box>
            <Box mt={"auto"} mb={"auto"} display={"flex"} gap={"10px"}>
              <Text fontSize={"9px"} color={"#B4B4B3"}>
                © Copyright Finsweet 2022
              </Text>
              <Box mt={"auto"} mb={"auto"}>
                <Box
                  display={"flex"}
                  justifyContent={"space-between"}
                  gap={"20px"}
                  fontSize={"10px"}
                  color={"#B4B4B3"}
                >
                  <a href="/">
                    <FaFacebook />
                  </a>
                  <a href="/">
                    <FaInstagram />
                  </a>
                  <a href="/">
                    <FaLinkedin />
                  </a>
                  <a href="/">
                    <FaTwitter />
                  </a>
                </Box>
              </Box>
            </Box>
            <Box mt={"auto"} mb={"auto"}>
              <Img src={line} />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
