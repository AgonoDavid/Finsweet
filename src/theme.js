import { extendTheme } from "@chakra-ui/react";

export const Theme = extendTheme({
  styles: {
    global: () => ({
      body: {
        backgroundColor: "#fff",
        color: "#060212",
        fontFamily: `'Roboto', sans-serif`,
      },
    }),
  },
});
