import React from "react";
import { Box, Img, Text, useMediaQuery } from "@chakra-ui/react";
import styles from "../style.module.css";
import datadrivenImg from "../../../assets/ProductPageImages/Data-drivenImg.png";
import { useAnimation, motion } from "framer-motion";
import { useEffect, useRef } from "react";

const Thirdsection = () => {
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
        className={styles.thirdsectionBg}
        py={[isMdScreen ? "140px" : "100px"]}
        mb={"90px"}
      >
        <Box
          maxW={[
            isLargerThan800 ? "1100px" : "320px",
            isMdScreen ? "750px" : null,
          ]}
          m={"auto"}
          ref={sectionRef}
        >
          <Box
            display={"flex"}
            flexDir={isLargerThan800 ? "row" : "column"}
            justifyContent={"space-between"}
            gap={isLargerThan800 ? "50px" : "70px"}
          >
            <Box
              my={isLargerThan800 ? "auto" : "-30px"}
              w={isLargerThan800 ? "60%" : "100%"}
              textAlign={isLargerThan800 ? "start" : "center"}
            >
              <Text
                className={styles.gradient}
                fontSize={isLargerThan800 ? "30px" : "20px"}
                fontWeight={"bold"}
              >
                Marketing insights
              </Text>
              <Text
                fontSize={isLargerThan800 ? "48px" : "33px"}
                fontWeight={"bold"}
                py={"20px"}
              >
                Data-driven client
                <br /> feedback
              </Text>
              <Text fontSize={"13px"}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren.
              </Text>
            </Box>
            <Box w={isLargerThan800 ? "40%" : "100%"}>
              <Img src={datadrivenImg} w={isLargerThan800 ? "100%" : "90%"} />
            </Box>
          </Box>
        </Box>
      </Box>
    </motion.div>
  );
};

export default Thirdsection;
