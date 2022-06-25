import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Heading,
  Avatar,
  Box,
  Center,
  Text,
  Stack,
  Button,
  Link,
  Badge,
  useColorModeValue,
} from "@chakra-ui/react";

interface AlumniCardProps {
  name: string;
  image?: string;
  batch: string;
  degree: string;
  branch: string;
  description: string;
}

export default function AlumniCard(props: AlumniCardProps) {
  return (
    <Center py={6}>
      <Box
        maxW={"320px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        rounded={"lg"}
        p={6}
        textAlign={"center"}
        _hover={{
          transform: "scale(1.05)",
          transition: "all 0.2s ease-in-out",
          cursor: "pointer",
        }}
      >
        <Avatar
          size={"xl"}
          name={props.name}
          src={props.image}
          mb={4}
          pos={"relative"}
        />
        <Heading fontSize={"2xl"} fontFamily={"body"}>
          {props.name}
        </Heading>
        <Text
          fontWeight={600}
          color={"gray.500"}
          mt={"2"}
          mb={4}
          fontSize={"md"}
        >
          {props.batch}
        </Text>
        <Text
          textAlign={"center"}
          color={useColorModeValue("gray.700", "gray.400")}
          px={3}
        >
          {props.description}
        </Text>

        <Stack align={"center"} justify={"center"} direction={"row"} mt={6}>
          <Badge p={2} rounded={"xl"} colorScheme={"green"} fontWeight={"Bold"}>
            {props.degree}
          </Badge>
          <Badge p={2} rounded={"xl"} colorScheme={"green"} fontWeight={"Bold"}>
            {props.branch}
          </Badge>
        </Stack>

        <Stack mt={8} direction={"row"} spacing={4}>
          <Button
            flex={1}
            fontSize={"sm"}
            rounded={"full"}
            rightIcon={<ChevronDownIcon boxSize={"20px"} />}
            _focus={{
              bg: "gray.200",
            }}
          >
            More info
          </Button>
          <Button
            flex={1}
            fontSize={"sm"}
            rounded={"full"}
            bg={"blue.400"}
            color={"white"}
            boxShadow={
              "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
            }
            _hover={{
              bg: "blue.500",
            }}
            _focus={{
              bg: "blue.500",
            }}
          >
            Message
          </Button>
        </Stack>
      </Box>
    </Center>
  );
}
