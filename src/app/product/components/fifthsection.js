import React from "react";
import { Box, Text, Img, useMediaQuery } from "@chakra-ui/react";
import styles from "../style.module.css";
import datadrivenImg from "../../../assets/ProductPageImages/Data-drivenImg.png";
import { useAnimation, motion } from "framer-motion";
import { useEffect, useRef } from "react";

const Fifthsection = () => {
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
        my={isLargerThan800 ? "50px" : "130px"}
        ref={sectionRef}
      >
        <Box
          display={"flex"}
          flexDir={isLargerThan800 ? "row" : "column"}
          justifyContent={"space-between"}
          gap={isLargerThan800 ? "50px" : "0px"}
        >
          <Box
            my={"auto"}
            w={"100%"}
            textAlign={isLargerThan800 ? "start" : "center"}
          >
            <Text
              className={styles.gradient}
              fontSize={isLargerThan800 ? "30px" : "20px"}
              fontWeight={"bold"}
            >
              Lead Generation
            </Text>
            <Text
              fontSize={[
                isLargerThan800 ? "45px" : "33px",
                isMdScreen ? "35px" : null,
              ]}
              fontWeight={"bold"}
              py={"15px"}
            >
              More leads that convert
            </Text>
            <Text fontSize={"14px"}>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              et ea rebum. Stet clita kasd gubergren.
            </Text>
          </Box>
          <Box
            className={styles.fifthsectionBg}
            w={isLargerThan800 ? "30%" : "100%"}
          >
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              height={isLargerThan800 ? "auto" : "auto"}
            >
              <Img src={datadrivenImg} w={isLargerThan800 ? "80%" : "100%"} />
            </Box>
          </Box>
        </Box>
      </Box>
    </motion.div>
  );
};

export default Fifthsection;
