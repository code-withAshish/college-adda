import { Box, Center, Flex, Text, Link } from "@chakra-ui/react";
import NextLink from "next/link";

const ErrorPage = () => {
  return (
    <Flex h={"100vh"} align={"center"} justify={"center"} rounded="2xl">
      <Box
        bg="white"
        minH={"100px"}
        minW={"300px"}
        rounded={"2xl"}
        shadow={"2xl"}
        p={"4"}
      >
        <Center>
          <Text fontSize={"4xl"} fontWeight={"extrabold"}>
            404
          </Text>
        </Center>
        <Center>
          <Text fontSize={"xl"} fontWeight={"thin"}>
            Page Not Found
          </Text>
        </Center>
        <Center>
          <NextLink href="/">
            <Link
              as="a"
              pt={"4"}
              fontSize={"md"}
              fontWeight={"hairline"}
              color={"red.400"}
              textDecoration={"underline"}
            >
              Click here to go back to the home page
            </Link>
          </NextLink>
        </Center>
      </Box>
    </Flex>
  );
};

export default ErrorPage;
