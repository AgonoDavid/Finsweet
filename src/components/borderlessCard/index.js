import React from "react";
import { Box, Text, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import styles from "./style.module.css";
const BorderlessCard = () => {
  return (
    <Box className={styles.backGround}>
      <Box py={"100px"}>
        <Text fontSize={"36px"} fontWeight={"semibold"} textAlign={"center"}>
          Are you ready to grow your
          <br /> business with us?
        </Text>
        <Text textAlign={"center"}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy.
        </Text>
        <Box mt={"20px"} textAlign={"center"}>
          <Link to="/pricing">
            <Button
              bg={"black"}
              color={"white"}
              _hover={{ textColor: "black", backgroundColor: "white" }}
            >
              View Pricing
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default BorderlessCard;
