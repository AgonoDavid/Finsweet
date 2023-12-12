import { extendTheme } from "@chakra-ui/react";

export const Theme = extendTheme({
  styles: {
    global: () => ({
      body: {
        backgroundColor: "#fff",
        fontFamily: `'Raleway', sans-serif`,
        color: "#060212",
      },
    }),
  },
});
