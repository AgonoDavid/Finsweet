import React from "react";
import { Box, Text, Button, useMediaQuery } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import styles from "./style.module.css";

const BorderlessCard = () => {
  const [isLargerThan800] = useMediaQuery("(min-width: 800px)");

  return (
    <Box className={styles.backGround}>
      <Box py={"100px"} maxW={isLargerThan800 ? "1150px" : "320px"} m={"auto"}>
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
