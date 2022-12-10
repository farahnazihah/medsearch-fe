import "../styles/globals.css";
import { ChakraProvider, Box } from "@chakra-ui/react";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Box minH={"100vh"} minW={"100vw"} m="20px">
        <Component {...pageProps} />
      </Box>
    </ChakraProvider>
  );
}

export default MyApp;
