import React from "react";
import { Box, Text, Button, Grid, Flex, Img } from "@chakra-ui/react";
import Price1 from "../../../assets/price-1.png";
import Price2 from "../../../assets/price-2.png";
import Price3 from "../../../assets/price-3.png";
import line from "../../../assets/Line.png";
import check from "../../../assets/check.svg";
import styles from "../style.module.css";

const Secondsection = () => {
  return (
    <Box maxW={"1100px"} m={"auto"}>
      <Grid templateColumns={"repeat(3,1fr)"} mt={"90px"} gap={"70px"}>
        <Box
          border={"1px solid white"}
          bg={"white"}
          rounded={"10px"}
          py={"25px"}
          boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)"
        >
          <Box display={"flex"} alignItems={"center"} pb={"15px"} px={"20px"}>
            <Box>
              <Img src={Price1} w={"70%"} objectFit={"contain"} />
            </Box>
            <Box textAlign={"start"}>
              <Text fontWeight={"bold"} fontSize={"25px"}>
                Regular
              </Text>
              <Text fontSize={"13px"}>Starter Plan</Text>
            </Box>
          </Box>
          <Box m={"auto"} w={"100%"}>
            <Img src={line} />
          </Box>
          <Box pt={"15px"} px={"20px"}>
            <Box
              display={"flex"}
              flexDirection={"column"}
              gap={"20px"}
              py={"10px"}
            >
              <Box display={"flex"} gap={"10px"}>
                <Img src={check} />
                <Text fontSize={"12px"} my={"auto"} fontWeight={"bold"}>
                  Limited Projects
                </Text>
              </Box>
              <Box display={"flex"} gap={"10px"}>
                <Img src={check} />
                <Text fontSize={"12px"} my={"auto"} fontWeight={"bold"}>
                  Regular Support Business{" "}
                </Text>
              </Box>
              <Box display={"flex"} gap={"10px"}>
                <Img src={check} />
                <Text fontSize={"12px"} my={"auto"} fontWeight={"bold"}>
                  1 month Free Trial{" "}
                </Text>
              </Box>
              <Box display={"flex"} gap={"10px"}>
                <Img src={check} />
                <Text fontSize={"12px"} my={"auto"} fontWeight={"bold"}>
                  3GB storage{" "}
                </Text>
              </Box>
              <Box display={"flex"} gap={"10px"}>
                <Img src={check} />
                <Text fontSize={"12px"} my={"auto"} fontWeight={"bold"}>
                  Ads Preview{" "}
                </Text>
              </Box>
            </Box>
            <Box
              pt={"10px"}
              display={"flex"}
              flexDirection={"column"}
              gap={"10px"}
            >
              <Text fontSize={"12px"}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
              </Text>
              <Box py={"10px"}>
                <Text fontWeight={"bold"} fontSize={"28px"}>
                  Free
                </Text>
                <Text fontSize={"12px"}>For Limited Period</Text>
              </Box>
              <Button bg={"black"} textColor={"white"}>
                Get Started
              </Button>
            </Box>
          </Box>
        </Box>
        <Box
          border={"2px solid #6B7CFF"}
          className={styles.colorBg}
          rounded={"10px"}
          py={"25px"}
          boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)"
        >
          <Box display={"flex"} alignItems={"center"} pb={"15px"} px={"20px"}>
            <Box>
              <Img src={Price2} w={"70%"} objectFit={"contain"} />
            </Box>
            <Box textAlign={"start"}>
              <Text fontWeight={"bold"} fontSize={"25px"}>
                Platinum{" "}
              </Text>
              <Text fontSize={"13px"}>For the best results</Text>
            </Box>
          </Box>
          <Box m={"auto"} w={"100%"}>
            <Img src={line} />
          </Box>
          <Box pt={"15px"} px={"20px"}>
            <Box
              display={"flex"}
              flexDirection={"column"}
              gap={"20px"}
              py={"10px"}
            >
              <Box display={"flex"} gap={"10px"}>
                <Img src={check} />
                <Text fontSize={"12px"} my={"auto"} fontWeight={"bold"}>
                  Limited Projects
                </Text>
              </Box>
              <Box display={"flex"} gap={"10px"}>
                <Img src={check} />
                <Text fontSize={"12px"} my={"auto"} fontWeight={"bold"}>
                  Regular Support Business{" "}
                </Text>
              </Box>
              <Box display={"flex"} gap={"10px"}>
                <Img src={check} />
                <Text fontSize={"12px"} my={"auto"} fontWeight={"bold"}>
                  1 month Free Trial{" "}
                </Text>
              </Box>
              <Box display={"flex"} gap={"10px"}>
                <Img src={check} />
                <Text fontSize={"12px"} my={"auto"} fontWeight={"bold"}>
                  3GB storage{" "}
                </Text>
              </Box>
              <Box display={"flex"} gap={"10px"}>
                <Img src={check} />
                <Text fontSize={"12px"} my={"auto"} fontWeight={"bold"}>
                  Ads Preview{" "}
                </Text>
              </Box>
            </Box>
            <Box
              pt={"10px"}
              display={"flex"}
              flexDirection={"column"}
              gap={"10px"}
            >
              <Text fontSize={"12px"}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
              </Text>
              <Box py={"10px"}>
                <Text fontWeight={"bold"} fontSize={"28px"}>
                  $342
                </Text>
                <Text fontSize={"12px"}>For Limited Period</Text>
              </Box>
              <Button bg={"black"} textColor={"white"}>
                Get Started
              </Button>
            </Box>
          </Box>
        </Box>
        <Box
          border={"1px solid white"}
          bg={"white"}
          rounded={"10px"}
          py={"25px"}
          boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)"
        >
          <Box display={"flex"} alignItems={"center"} pb={"15px"} px={"20px"}>
            <Box>
              <Img src={Price3} w={"70%"} objectFit={"contain"} />
            </Box>
            <Box textAlign={"start"}>
              <Text fontWeight={"bold"} fontSize={"25px"}>
                Standard
              </Text>
              <Text fontSize={"13px"}>Most Popular</Text>
            </Box>
          </Box>
          <Box m={"auto"} w={"100%"}>
            <Img src={line} />
          </Box>
          <Box pt={"15px"} px={"20px"}>
            <Box
              display={"flex"}
              flexDirection={"column"}
              gap={"20px"}
              py={"10px"}
            >
              <Box display={"flex"} gap={"10px"}>
                <Img src={check} />
                <Text fontSize={"12px"} my={"auto"} fontWeight={"bold"}>
                  Limited Projects
                </Text>
              </Box>
              <Box display={"flex"} gap={"10px"}>
                <Img src={check} />
                <Text fontSize={"12px"} my={"auto"} fontWeight={"bold"}>
                  Regular Support Business{" "}
                </Text>
              </Box>
              <Box display={"flex"} gap={"10px"}>
                <Img src={check} />
                <Text fontSize={"12px"} my={"auto"} fontWeight={"bold"}>
                  1 month Free Trial{" "}
                </Text>
              </Box>
              <Box display={"flex"} gap={"10px"}>
                <Img src={check} />
                <Text fontSize={"12px"} my={"auto"} fontWeight={"bold"}>
                  3GB storage{" "}
                </Text>
              </Box>
              <Box display={"flex"} gap={"10px"}>
                <Img src={check} />
                <Text fontSize={"12px"} my={"auto"} fontWeight={"bold"}>
                  Ads Preview{" "}
                </Text>
              </Box>
            </Box>
            <Box
              pt={"10px"}
              display={"flex"}
              flexDirection={"column"}
              gap={"10px"}
            >
              <Text fontSize={"12px"}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
              </Text>
              <Box py={"10px"}>
                <Text fontWeight={"bold"} fontSize={"28px"}>
                  $234
                </Text>
                <Text fontSize={"12px"}>For Limited Period</Text>
              </Box>
              <Button bg={"black"} textColor={"white"}>
                Get Started
              </Button>
            </Box>
          </Box>
        </Box>
      </Grid>
    </Box>
  );
};

export default Secondsection;
