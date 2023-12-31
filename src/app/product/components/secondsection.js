import React from "react";
import { Box, Text, Img, Grid, useMediaQuery } from "@chakra-ui/react";
import styles from "../style.module.css";
import privacy from "../../../assets/ProductPageImages/Privacy.svg";
import feat from "../../../assets/ProductPageImages/Feat.svg";
import built from "../../../assets/ProductPageImages/Built-in.svg";
import easy from "../../../assets/ProductPageImages/Easy.svg";
import collab from "../../../assets/ProductPageImages/Collaborate.svg";
import sync from "../../../assets/ProductPageImages/Sync.svg";
import { useAnimation, motion } from "framer-motion";
import { useEffect, useRef } from "react";

const SecondSection = () => {
  const [isLargerThan800] = useMediaQuery("(min-width: 800px)");
  const [isMdScreen] = useMediaQuery(" (max-width: 1024px)");
  const controls = useAnimation();
  const sectionRef = useRef(null);

  const variants = {
    hidden: { opacity: 0, x: isLargerThan800 ? -100 : 0 },
    visible: { opacity: 1, x: 0 },
  };

  const transition = { duration: 1.5 };

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
      <Box className={styles.colorBg} mt={"160px"}>
        <Box ref={sectionRef}>
          <Box>
            <Text
              fontSize={isLargerThan800 ? "30px" : "25px"}
              fontWeight={"bold"}
              py={"70px"}
              textAlign={"center"}
              // mt={"40px"}
            >
              Get the best out of your company
              {isLargerThan800 ? <br /> : null} with our service
            </Text>
          </Box>
          <Box
            bg={"rgba(255, 255, 255, 0.69)"}
            w={"97%"}
            borderTopRightRadius={"50px"}
          >
            <Box
              maxW={[
                isLargerThan800 ? "1100px" : "320px",
                isMdScreen ? "730px" : null,
              ]}
              m={"auto"}
              py={"80px"}
            >
              <Grid
                templateColumns={
                  isLargerThan800 ? "repeat(3,2fr)" : "repeat(2,1fr)"
                }
                gap={[
                  isLargerThan800 ? "120px" : "60px",
                  isMdScreen ? "90px" : null,
                ]}
              >
                <Box my={"auto"}>
                  <Img src={privacy} />
                  <Text
                    fontSize={isLargerThan800 ? "20px" : "17px"}
                    fontWeight={"bold"}
                    fontFamily={"Roboto"}
                    py={"10px"}
                  >
                    Security and privacy
                  </Text>
                  <Text fontSize={isLargerThan800 ? "13px" : "11px"}>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor.
                  </Text>
                </Box>
                <Box my={"auto"}>
                  <Img src={built} />
                  <Text
                    fontSize={isLargerThan800 ? "20px" : "17px"}
                    fontWeight={"bold"}
                    fontFamily={"Roboto"}
                    py={"10px"}
                  >
                    Built-in AI features
                  </Text>
                  <Text fontSize={isLargerThan800 ? "13px" : "11px"}>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor.
                  </Text>
                </Box>
                <Box my={"auto"}>
                  <Img src={collab} />
                  <Text
                    fontSize={isLargerThan800 ? "20px" : "17px"}
                    fontWeight={"bold"}
                    fontFamily={"Roboto"}
                    py={"10px"}
                  >
                    Collaborate with others{" "}
                  </Text>
                  <Text fontSize={isLargerThan800 ? "13px" : "11px"}>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor.
                  </Text>
                </Box>
                <Box my={"auto"}>
                  <Img src={sync} />
                  <Text
                    fontSize={isLargerThan800 ? "20px" : "17px"}
                    fontWeight={"bold"}
                    fontFamily={"Roboto"}
                    py={"10px"}
                  >
                    Real time sync
                  </Text>
                  <Text fontSize={isLargerThan800 ? "13px" : "11px"}>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor.
                  </Text>
                </Box>
                <Box my={"auto"}>
                  <Img src={feat} />
                  <Text
                    fontSize={isLargerThan800 ? "20px" : "17px"}
                    fontWeight={"bold"}
                    fontFamily={"Roboto"}
                    py={"10px"}
                  >
                    Built-in AI features{" "}
                  </Text>
                  <Text fontSize={isLargerThan800 ? "13px" : "11px"}>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor.
                  </Text>
                </Box>
                <Box my={"auto"}>
                  <Img src={easy} />
                  <Text
                    fontSize={isLargerThan800 ? "20px" : "17px"}
                    fontWeight={"bold"}
                    fontFamily={"Roboto"}
                    py={"10px"}
                  >
                    Easy notes organization{" "}
                  </Text>
                  <Text fontSize={isLargerThan800 ? "13px" : "11px"}>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor.
                  </Text>
                </Box>
              </Grid>
            </Box>
          </Box>
        </Box>
      </Box>
    </motion.div>
  );
};

export default SecondSection;
