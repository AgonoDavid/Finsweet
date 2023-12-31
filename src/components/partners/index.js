import React from "react";
import partner1 from "../../assets/Logo 1.png";
import partner2 from "../../assets/Logo 2.png";
import partner3 from "../../assets/Logo 3.png";
import partner4 from "../../assets/Logo 4.png";
import partner5 from "../../assets/Logo 5.png";
import { Box, Img, useMediaQuery } from "@chakra-ui/react";

const Partners = () => {
  const [isLargerThan800] = useMediaQuery("(min-width: 800px)");
  const [isMdScreen] = useMediaQuery("(max-width: 1024px)");

  return (
    <Box
      maxW={[isLargerThan800 ? "1150px" : "350px", isMdScreen ? "750px" : null]}
      m={"auto"}
    >
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        gap={isLargerThan800 ? "100px" : "40px"}
        mt={isLargerThan800 ? "130px" : "30px"}
        px={isLargerThan800 ? null : "20px"}
        w={isLargerThan800 ? "100%" : "100%"}
        // mb={"30px"}
      >
        <Box>
          <Img src={partner1} />
        </Box>

        <Box>
          <Img src={partner2} />
        </Box>
        <Box>
          <Img src={partner3} />
        </Box>
        <Box>
          <Img src={partner4} />
        </Box>
        <Box>
          <Img src={partner5} />
        </Box>
      </Box>
    </Box>
  );
};

export default Partners;
