import {
  Badge,
  Box,
  Button,
  Center,
  Divider,
  Flex,
  Heading,
  Image,
  Link,
  Stack,
  StackDivider,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Head from "next/head";

interface FeedCardProps {
  imgURL: string;
  heading: string;
  description: string;
}

export default function FeedCard({
  imgURL,
  heading,
  description,
}: FeedCardProps) {
  return (
    <div>
      <Head>
        <title>Feed</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Stack
        borderWidth="1px"
        borderRadius="lg"
        direction={{ base: "column", md: "row" }}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        padding={4}
        gap={"4"}
        divider={
          <Box w={"3px"} bgGradient={"linear(to-b,purple.400,purple.700)"} />
        }
      >
        <Flex bg="white" justify={{ base: "center", md: "normal" }}>
          <Image
            alt={heading}
            borderRadius={"xl"}
            objectFit="cover"
            fit={"cover"}
            boxSize="auto"
            boxShadow={"lg"}
            src={imgURL}
          />
        </Flex>

        <Stack flex={1} flexDirection="column" alignItems="center" p={2}>
          <Heading fontSize={"2xl"} fontFamily={"body"}>
            {heading}
          </Heading>

          <Text
            textAlign={"center"}
            color={useColorModeValue("gray.700", "gray.400")}
            px={3}
          >
            {description}
          </Text>
        </Stack>
      </Stack>
    </div>
  );
}
