import { Box, Image, Center, useMediaQuery } from "@chakra-ui/react";
import React from "react";
import logo from "../../assets/Logo.png";

const Loading = () => {
  const [isLargerThan800] = useMediaQuery("(min-width: 800px)");
  const [isMdScreen] = useMediaQuery("(max-width: 1024px)");

  return (
    <Box display="grid" placeItems={"center"} w="100%" h="100vh">
      <Center>
        <Image
          src={logo}
          alt="logo"
          objectFit="contain"
          w={[isLargerThan800 ? "100%" : "50%", isMdScreen ? "50%" : "100%"]}
        />
      </Center>
    </Box>
  );
};

export default Loading;
