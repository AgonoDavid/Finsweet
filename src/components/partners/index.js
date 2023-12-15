import React from "react";
import partner1 from "../../assets/Logo 1.png";
import partner2 from "../../assets/Logo 2.png";
import partner3 from "../../assets/Logo 3.png";
import partner4 from "../../assets/Logo 4.png";
import partner5 from "../../assets/Logo 5.png";
import { Box, Img } from "@chakra-ui/react";

const Partners = () => {
  return (
    <Box maxW={"1150px"} m={"auto"}>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        gap={"100px"}
        mt={"50px"}
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
