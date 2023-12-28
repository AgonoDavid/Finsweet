import React from "react";
import Layout from "../../layout";
import { Box, useMediaQuery, Text, Img } from "@chakra-ui/react";
import styles from "./style.module.css";
import ct1 from "../../assets/ct1.png";
import ct2 from "../../assets/ct2.png";
import ct3 from "../../assets/ct3.png";

const Contact = () => {
  const [isLargerThan800] = useMediaQuery("(min-width: 800px)");
  const [isMdScreen] = useMediaQuery(" (max-width: 1024px)");
  return (
    <Layout>
      <Box className={styles.bg}>
        <Box
          maxW={[
            isLargerThan800 ? "1150px" : "330px",
            isMdScreen ? "750px" : null,
          ]}
          m={"auto"}
        >
          <Text
            textAlign={"center"}
            pt={"80px"}
            fontWeight={"bold"}
            fontSize={"40px"}
          >
            Get in touch with us
          </Text>
          <Box
            mt={"30px"}
            bg={"#F0F2FE"}
            py={"10px"}
            px={"50px"}
            rounded={"15px"}
            justifyContent={"space-between"}
            gap={"48px"}
            display={"flex"}
          >
            <Box my={"40px"} w={"70%"}>
              <Text fontSize={"29px"} fontWeight={"bold"}>
                Drop us a message
              </Text>
              <Text>We will get back to you as soon as possible.</Text>
              <Box>
                <form>
                  <Box
                    display={"flex"}
                    justifyContent={"space-between"}
                    gap={"20px"}
                    py={"10px"}
                    mt={"20px"}
                  >
                    <input
                      type="textarea"
                      placeholder="Full Name"
                      style={{
                        width: "100%",
                        padding: "10px",
                        borderRadius: "5px",
                      }}
                    />
                    <input
                      type="textarea"
                      placeholder="Company Name"
                      style={{
                        width: "100%",
                        padding: "10px",
                        borderRadius: "5px",
                      }}
                    />
                  </Box>
                  <Box py={"10px"}>
                    <input
                      type="textarea"
                      placeholder="Work Email"
                      style={{
                        width: "100%",
                        padding: "10px",
                        borderRadius: "5px",
                      }}
                    />
                  </Box>
                  <Box py={"10px"}>
                    <input
                      type="textarea"
                      placeholder="Subject"
                      style={{
                        width: "100%",
                        padding: "10px",
                        borderRadius: "5px",
                      }}
                    />
                  </Box>
                  <Box py={"10px"}>
                    <input
                      type="textarea"
                      placeholder="Message"
                      style={{
                        width: "100%",
                        padding: "10px",
                        borderRadius: "5px",
                        height: "25vh",
                      }}
                    />
                  </Box>
                </form>
              </Box>
            </Box>
            <Box w={"30%"} my={"auto"}>
              <Box display={"flex"} flexDirection={"column"} gap={"20px"}>
                <Box display={"flex"} gap={"10px"}>
                  <Box my={"auto"} w={"12%"}>
                    <Img src={ct1} w={"100%"} />
                  </Box>
                  <Box>
                    <Text fontWeight={"bold"} fontSize={"19px"}>
                      + 1800 145 276
                    </Text>
                    <Text fontSize={"12px"}>Free support</Text>
                  </Box>
                </Box>
                <Box display={"flex"} gap={"10px"}>
                  <Box my={"auto"} w={"12%"}>
                    <Img src={ct2} w={"100%"} />
                  </Box>
                  <Box>
                    <Text fontWeight={"bold"} fontSize={"19px"}>
                      finsweet@gmail.com{" "}
                    </Text>
                    <Text fontSize={"12px"}>Help Email support</Text>
                  </Box>
                </Box>
                <Box display={"flex"} gap={"10px"}>
                  <Box my={"auto"} w={"12%"}>
                    <Img src={ct3} w={"100%"} />
                  </Box>
                  <Box>
                    <Text fontWeight={"bold"} fontSize={"19px"}>
                      sales@finsweet.com{" "}
                    </Text>
                    <Text fontSize={"12px"}>Sales Enquiry</Text>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Layout>
  );
};

export default Contact;
