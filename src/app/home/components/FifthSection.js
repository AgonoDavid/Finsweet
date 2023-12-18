import React from "react";
import { Box, Text, Center, Img, useMediaQuery } from "@chakra-ui/react";
import man1 from "../../../assets/man-3.png";
import man2 from "../../../assets/man-2.png";
import man3 from "../../../assets/man-1.png";
import { useAnimation, motion } from "framer-motion";
import { useRef, useEffect } from "react";

const FifthSection = () => {
  const [isLargerThan800] = useMediaQuery("(min-width: 800px)");

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
        maxW={isLargerThan800 ? "1150px" : "350px"}
        m={"auto"}
        ref={sectionRef}
      >
        <Box
          display={"flex"}
          flexDir={isLargerThan800 ? "row" : "column"}
          justifyContent={"space-between"}
          gap={"50px"}
          fontSize={"13px"}
          textAlign={"center"}
          mt={"70px"}
        >
          <Box
            as={motion.div}
            initial="hidden"
            animate="visible"
            variants={variants}
            transition={transition}
            border={"1px solid #6199ED "}
            p={"40px"}
            rounded={"20px"}
          >
            <Text fontWeight={"bold"}>
              {" "}
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua.
            </Text>
            <Center>
              <Img src={man1} w={"25%"} py={"20px"} />
            </Center>
            <Text fontWeight={"Bold"} fontSize={"20px"}>
              Ron Wood
            </Text>
            <Text fontSize={"10px"}>CEO</Text>
          </Box>
          <Box
            as={motion.div}
            initial="hidden"
            animate="visible"
            variants={variants}
            transition={transition}
            border={"1px solid #6199ED "}
            p={"40px"}
            rounded={"20px"}
          >
            <Text fontWeight={"bold"}>
              {" "}
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua.
            </Text>
            <Center>
              <Img src={man2} w={"25%"} py={"20px"} />
            </Center>
            <Text fontWeight={"Bold"} fontSize={"20px"}>
              Mark Mason{" "}
            </Text>
            <Text fontSize={"10px"}>Marketing Manager</Text>
          </Box>
          <Box
            as={motion.div}
            initial="hidden"
            animate="visible"
            variants={variants}
            transition={transition}
            border={"1px solid #6199ED "}
            p={"40px"}
            rounded={"20px"}
          >
            <Text fontWeight={"bold"}>
              {" "}
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua.
            </Text>
            <Center>
              <Img src={man3} w={"25%"} py={"20px"} />
            </Center>
            <Text fontWeight={"Bold"} fontSize={"20px"}>
              Sam Preston
            </Text>
            <Text fontSize={"10px"}>CTO</Text>
          </Box>
        </Box>
      </Box>
    </motion.div>
  );
};

export default FifthSection;
