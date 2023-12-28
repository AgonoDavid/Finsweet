import React, { useState } from "react";
import { Box, Text, Button, Grid, Img } from "@chakra-ui/react";
import Price1 from "../../../assets/price-1.png";
import Price2 from "../../../assets/price-2.png";
import Price3 from "../../../assets/price-3.png";
import line from "../../../assets/Line.png";
import check from "../../../assets/check.svg";
import styles from "../style.module.css";
import open from "../../../assets/open.png";
import close from "../../../assets/close.png";

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
                Lorem ipsum dolor sit amet, <br /> consetetur sadipscing elitr.
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
                Lorem ipsum dolor sit amet, <br /> consetetur sadipscing elitr.
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
                Lorem ipsum dolor sit amet, <br /> consetetur sadipscing elitr.
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
      <Card />
    </Box>
  );
};

export default Secondsection;

const Card = () => {
  return (
    <Box
      display={"flex"}
      justifyContent={"space-between"}
      bg={"#F0F2FE"}
      mt={"80px"}
      rounded={"10px"}
      py={"60px"}
      px={"40px"}
      gap={"20px"}
    >
      <Box textAlign={"start"} w={"50%"}>
        <Text fontWeight={"bold"} fontSize={"50px"}>
          Frequestly Asked Questions
        </Text>
        <Text py={"20px"}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt.
        </Text>
      </Box>
      <AccordionItems />
    </Box>
  );
};

const Accordion = ({ title, content }) => {
  const [isOpen, setIsopen] = useState(false);

  return (
    <Box w={"100%"}>
      <Box bg={"white"} rounded={"15px"}>
        <Box display={"flex"} justifyContent={"space-between"}>
          <Box my={"auto"} p={"30px"}>
            <Text fontWeight={"bold"} fontSize={"18px"}>
              {title}{" "}
            </Text>
          </Box>
          <Box my={"auto"} p={"20px"}>
            {isOpen ? (
              <Img onClick={() => setIsopen(!isOpen)} src={close} w={"70%"} />
            ) : (
              <Img onClick={() => setIsopen(!isOpen)} src={open} w={"70%"} />
            )}
          </Box>
        </Box>
        {isOpen && (
          <Box textAlign={"start"} px={"30px"} pb={"10px"} fontSize={"13px"}>
            {content}
          </Box>
        )}
      </Box>
    </Box>
  );
};

const AccordionItems = () => {
  return (
    <Box w={"50%"} display={"flex"} flexDirection={"column"} gap={"20px"}>
      <Accordion
        title={"How do I grow my business?"}
        content={
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.b"
        }
      />
      <Accordion
        title={"Can I cancel my subscription?"}
        content={
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.b"
        }
      />
      <Accordion
        title={"How do I contact the support?"}
        content={
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.b"
        }
      />
      <Accordion
        title={"Is a credit card required?"}
        content={
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.b"
        }
      />
    </Box>
  );
};
