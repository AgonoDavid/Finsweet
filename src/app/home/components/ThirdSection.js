import React from "react";
import styles from "../style.module.css";
import { Box, Text, Img, useMediaQuery, Center } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import cardImg from "../../../assets/Image.png";
import { useRef, useEffect } from "react";
import { useAnimation, motion } from "framer-motion";

const ThirdSection = () => {
  const [isLargerThan800] = useMediaQuery("(min-width: 800px)");
  const [isMdScreen] = useMediaQuery("(max-width: 1024px)");

  const controls = useAnimation();
  const sectionRef = useRef(null);

  const variants = {
    hidden: { opacity: 0, x: isLargerThan800 ? -100 : 0 },
    visible: { opacity: 1, x: 0 },
  };

  const transition = { duration: 2 };

  const startAnimation = async () => {
    await controls.start("visible");
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startAnimation();
          }
        });
      },
      { threshold: 0.1 }
    );
    observer.observe(sectionRef.current);
    return () => {
      observer.disconnect();
    };
  });

  return (
    <motion.div
      initial="hidden"
      animate={controls}
      variants={variants}
      transition={transition}
    >
      <Box className={styles.colorBg}>
        <Box
          maxW={[
            isLargerThan800 ? "1150px" : "330px",
            isMdScreen ? "750px" : null,
          ]}
          m={"auto"}
          ref={sectionRef}
        >
          <Box
            py={"60px"}
            display={"flex"}
            flexDir={isLargerThan800 ? "row" : "column"}
            justifyContent={"space-between"}
            gap={isLargerThan800 ? "70px" : "90px"}
            w={"100%"}
          >
            <Box
              my={"auto"}
              textAlign={isLargerThan800 ? "start" : "center"}
              w={isLargerThan800 ? "100%" : "100%"}
            >
              <Text fontSize={isMdScreen ? "35px" : "55px"} fontWeight={"bold"}>
                More impressions, more conversions
              </Text>
              <Text fontSize={"15px"} py={"25px"}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua invidunt ut labore.
              </Text>
              <Button
                bg={"black"}
                p={"25px"}
                textColor={"white"}
                _hover={{ bg: "white", color: "black" }}
                textAlign={"center"}
              >
                Get a Free Trial
              </Button>
            </Box>
            <Center>
              <Img
                src={cardImg}
                alt="cardImg"
                objectFit={"contain"}
                w={isLargerThan800 ? "100%" : "100%"}
              />
            </Center>{" "}
          </Box>
        </Box>
      </Box>
    </motion.div>
  );
};

export default ThirdSection;
