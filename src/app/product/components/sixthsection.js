import React from "react";
import styles from "../style.module.css";
import { Box, Img, Text, useMediaQuery } from "@chakra-ui/react";
import performanceImg from "../../../assets/ProductPageImages/performance.png";
import { useAnimation, motion } from "framer-motion";
import { useEffect, useRef } from "react";

const Sixthsection = () => {
  const [isLargerThan800] = useMediaQuery("(min-width: 800px)");
  const [isMdScreen] = useMediaQuery(" (max-width: 1024px)");

  const controls = useAnimation();
  const sectionRef = useRef(null);

  const variants = {
    hidden: { opacity: 0, x: isLargerThan800 ? -100 : 0 },
    visible: { opacity: 1, x: 0 },
  };

  const transition = { duration: 1 };

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
          isLargerThan800 ? "1100px" : "320px",
          isMdScreen ? "750px" : null,
        ]}
        m={"auto"}
        my={isMdScreen ? "130px" : null}
        ref={sectionRef}
      >
        <Box
          display={"flex"}
          flexDir={isLargerThan800 ? "row" : "column-reverse"}
          justifyContent={"space-between"}
          gap={"50px"}
        >
          <Box w={isLargerThan800 ? "55%" : "100%"}>
            <Img src={performanceImg} w={isLargerThan800 ? "85%" : "100%"} />
          </Box>
          <Box
            my={"auto"}
            w={isLargerThan800 ? "45%" : "100%"}
            textAlign={isLargerThan800 ? "start" : "center"}
          >
            <Text
              className={styles.gradient}
              fontSize={isLargerThan800 ? "30px" : "20px"}
              fontWeight={"bold"}
            >
              Remote teams{" "}
            </Text>
            <Text
              fontSize={isLargerThan800 ? "40px" : "33px"}
              fontWeight={"bold"}
              py={"15px"}
            >
              Real-time collaboration{" "}
            </Text>
            <Text fontSize={"13px"}>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren.
            </Text>
          </Box>
        </Box>
      </Box>
    </motion.div>
  );
};

export default Sixthsection;
