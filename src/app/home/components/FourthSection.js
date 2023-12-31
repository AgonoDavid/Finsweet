import React from "react";
import { useRef, useEffect } from "react";
import { Box, Text, Img, Flex, useMediaQuery } from "@chakra-ui/react";
import styles from "../style.module.css";
import featureicon1 from "../../../assets/Feature Icon with circle.png";
import featureicon2 from "../../../assets/Feature Icon with circle (1).png";
import featureicon3 from "../../../assets/Feature Icon with circle (2).png";
import { useAnimation, motion } from "framer-motion";

const FourthSection = () => {
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
          my={"80px"}
          flexDir={isLargerThan800 ? "row" : "column"}
          justifyContent={"space-between"}
          align={isLargerThan800 ? "start" : "center"}
          gap={(isLargerThan800 ? null : "30px", isMdScreen ? "40px" : null)}
        >
          <Box
            as={motion.div}
            initial="hidden"
            animate="visible"
            variants={variants}
            transition={transition}
          >
            <Text
              className={styles.gradient}
              fontSize={"23px"}
              fontWeight={"semibold"}
              fontFamily={"Roboto"}
              pb={"10px"}
            >
              Discover More{" "}
            </Text>
            <Text
              fontFamily={"Roboto"}
              fontSize={isMdScreen ? "25px" : "38px"}
              fontWeight={"bold"}
              pb={"10px"}
            >
              Analyze Your Sales And
              <br /> Marketing Leads
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
            <Box
              as={motion.div}
              initial="hidden"
              animate="visible"
              variants={variants}
              transition={transition}
            >
              <Flex>
                <Img src={featureicon1} w={"7%"} objectFit={"contain"} />
                <Flex flexDir={"column"}>
                  <Text pl={"20px"} fontSize={"18px"} fontWeight={"semibold"}>
                    Sales Tracking
                  </Text>
                  <Text my={"auto"} fontSize={"13px"} pl={"20px"}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod.
                  </Text>
                </Flex>
              </Flex>
            </Box>
            <Box
              as={motion.div}
              initial="hidden"
              animate="visible"
              variants={variants}
              transition={transition}
            >
              <Flex>
                <Img src={featureicon2} w={"7%"} objectFit={"contain"} />
                <Flex flexDir={"column"}>
                  <Text pl={"20px"} fontSize={"18px"} fontWeight={"semibold"}>
                    Project Management{" "}
                  </Text>
                  <Text my={"auto"} fontSize={"13px"} pl={"20px"}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod.
                  </Text>
                </Flex>
              </Flex>
            </Box>
            <Box
              as={motion.div}
              initial="hidden"
              animate="visible"
              variants={variants}
              transition={transition}
            >
              <Flex>
                <Img src={featureicon3} w={"7%"} objectFit={"contain"} />
                <Flex flexDir={"column"}>
                  <Text pl={"20px"} fontSize={"18px"} fontWeight={"semibold"}>
                    Activity Report{" "}
                  </Text>
                  <Text my={"auto"} fontSize={"13px"} pl={"20px"}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod.
                  </Text>
                </Flex>
              </Flex>
            </Box>
          </Box>
        </Box>
      </Box>
    </motion.div>
  );
};

export default FourthSection;
