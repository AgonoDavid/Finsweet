import React from "react";
import { Box, Text, Flex, Img, useMediaQuery } from "@chakra-ui/react";
import arrow from "../../../assets/arrow.svg";
import styles from "../style.module.css";
import { useRef, useEffect } from "react";
import { useAnimation, motion } from "framer-motion";

const SecondSection = () => {
  const [isLargerThan800] = useMediaQuery("(min-width: 800px)");
  const [isMdScreen] = useMediaQuery(" (max-width: 1024px)");

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
      <Box
        maxW={[
          isLargerThan800 ? "1150px" : "330px",
          isMdScreen ? "750px" : null,
        ]}
        m={"auto"}
        ref={sectionRef}
      >
        <Box
          display={"flex"}
          my={"100px"}
          flexDir={isLargerThan800 ? "row" : "column"}
          justifyContent={"space-between"}
          align={isLargerThan800 ? "start" : "center"}
          gap={isMdScreen ? "40px" : null}
        >
          <Box pb={isLargerThan800 ? "0px" : "40px"}>
            <Text
              className={styles.gradient}
              fontSize={"23px"}
              fontWeight={"semibold"}
              fontFamily={"Roboto"}
              pb={"10px"}
            >
              Why should you work with us?
            </Text>
            <Text
              fontFamily={"Roboto"}
              fontSize={isMdScreen ? "25px" : "38px"}
              fontWeight={"bold"}
              pb={"10px"}
            >
              To upscale your business
              <br /> to the next level
            </Text>
            <Text fontFamily={"Roboto"} fontSize={"12px"}>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy
              <br /> eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam
              <br /> voluptua invidunt ut labore.
            </Text>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent={"space-between"}
            textAlign={isLargerThan800 ? null : "start"}
            gap={isLargerThan800 ? null : "20px"}
          >
            <Box>
              <Flex>
                <Img src={arrow} />
                <Text my={"auto"} fontSize={"15px"} pl={"20px"}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod.
                </Text>
              </Flex>
            </Box>
            <Box>
              <Flex>
                <Img src={arrow} />
                <Text my={"auto"} fontSize={"15px"} pl={"20px"}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod.
                </Text>
              </Flex>
            </Box>
            <Box>
              <Flex>
                <Img src={arrow} />
                <Text my={"auto"} fontSize={"15px"} pl={"20px"}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod.
                </Text>
              </Flex>
            </Box>
          </Box>
        </Box>
      </Box>
    </motion.div>
  );
};

export default SecondSection;
