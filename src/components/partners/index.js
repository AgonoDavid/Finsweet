import React from "react";
import partner1 from "../../assets/Logo 1.png";
import partner2 from "../../assets/Logo 2.png";
import partner3 from "../../assets/Logo 3.png";
import partner4 from "../../assets/Logo 4.png";
import partner5 from "../../assets/Logo 5.png";
import { Box, Img, useMediaQuery } from "@chakra-ui/react";

const Partners = () => {
  const [isLargerThan800] = useMediaQuery("(min-width: 800px)");

  return (
    <Box maxW={"1150px"} m={"auto"}>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        gap={isLargerThan800 ? "100px" : "20px"}
        mt={"50px"}
        w={"100%"}
        px={isLargerThan800 ? null : "20px"}
      >
        <Box my={"auto"}>
          <Img src={partner1} />
        </Box>

        <Box my={"auto"}>
          <Img src={partner2} />
        </Box>
        <Box my={"auto"}>
          <Img src={partner3} />
        </Box>
        <Box my={"auto"}>
          <Img src={partner4} />
        </Box>
        <Box my={"auto"}>
          <Img src={partner5} />
        </Box>
      </Box>
    </Box>
  );
};

export default Partners;
