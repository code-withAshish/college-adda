import {
  Box,
  Flex,
  Stack,
  Heading,
  Text,
  Container,
  Input,
  Button,
  SimpleGrid,
  Avatar,
  AvatarGroup,
  useBreakpointValue,
  IconProps,
  Icon,
  FormLabel,
  FormControl,
  Center,
  Divider,
  HStack,
} from "@chakra-ui/react";
import Head from "next/head";
import LoginBox from "../components/Login/LoginBox";

const avatars = [
  {
    name: "Ryan Florence",
    url: "https://bit.ly/ryan-florence",
  },
  {
    name: "Segun Adebayo",
    url: "https://bit.ly/sage-adebayo",
  },
  {
    name: "Kent Dodds",
    url: "https://bit.ly/kent-c-dodds",
  },
  {
    name: "Prosper Otemuyiwa",
    url: "https://bit.ly/prosper-baba",
  },
  {
    name: "Christian Nwamba",
    url: "https://bit.ly/code-beast",
  },
];

export default function Login() {
  return (
    <div>
      <Head>
        <title>Login</title>
      </Head>
      <Box position={"relative"}>
        <Container
          as={SimpleGrid}
          maxW={"7xl"}
          columns={{ base: 1, md: 2 }}
          spacing={{ base: 10, lg: 32 }}
          py={{ base: 10, sm: 20, lg: 32 }}
        >
          <Stack spacing={{ base: 10, md: 20 }}>
            <Heading
              lineHeight={1.1}
              fontSize={{ base: "3xl", sm: "4xl", md: "5xl", lg: "6xl" }}
            >
              <Text>
                {"Hello,"}
                <br />
                {"your batchmates are waiting for you!!!"}
              </Text>
              <br />
              <Text
                as={"span"}
                bgGradient={{
                  md: "linear(to-b, blue.400,purple.400)",
                  sm: "linear(to-r,black,purple.400)",
                }}
                bgClip="text"
              >
                {"Join them by registering today"}
              </Text>
            </Heading>
            <Stack direction={"row"} spacing={4} align={"center"}>
              <AvatarGroup>
                {avatars.map((avatar) => (
                  <Avatar
                    key={avatar.name}
                    name={avatar.name}
                    src={avatar.url}
                    size={"md"}
                    position={"relative"}
                    zIndex={2}
                    _before={{
                      content: `""`,
                      width: `"full"`,
                      height: `"full"`,
                      rounded: `"full"`,
                      transform: `"scale(1.125)"`,
                      bgGradient: `"linear(to-bl, red.400,pink.400)"`,
                      position: `"absolute"`,
                      zIndex: `-1`,
                      top: `0`,
                      left: `0`,
                    }}
                  />
                ))}
              </AvatarGroup>
              <Text
                fontFamily={"heading"}
                fontSize={{ base: "4xl", md: "6xl" }}
              >
                +
              </Text>
              <Flex
                align={"center"}
                justify={"center"}
                fontFamily={"heading"}
                fontSize={{ base: "sm", md: "lg" }}
                bg={"gray.800"}
                color={"white"}
                rounded={"full"}
                width={useBreakpointValue({ base: "44px", md: "60px" })}
                height={useBreakpointValue({ base: "44px", md: "60px" })}
                position={"relative"}
                _before={{
                  content: '""',
                  width: "full",
                  height: "full",
                  rounded: "full",
                  transform: "scale(1.125)",
                  bgGradient: "linear(to-bl, orange.400,yellow.400)",
                  position: "absolute",
                  zIndex: -1,
                  top: 0,
                  left: 0,
                }}
              >
                YOU
              </Flex>
            </Stack>
          </Stack>
          <Stack
            bg={"gray.50"}
            rounded={"xl"}
            p={{ base: 4, sm: 6, md: 8 }}
            spacing={{ base: 8 }}
            maxW={{ lg: "lg" }}
          >
            <Stack spacing={4}>
              <Center>
                <Heading
                  color={"gray.800"}
                  lineHeight={1.1}
                  fontWeight={"thin"}
                  fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
                >
                  Login
                </Heading>
              </Center>
              <Center>
                <Text color={"gray.500"} fontSize={{ base: "sm", sm: "md" }}>
                  {"Enter your email and password to login"}
                </Text>
              </Center>
            </Stack>
            <LoginBox />
          </Stack>
        </Container>
        <Blur
          position={"absolute"}
          top={-10}
          left={-10}
          style={{ filter: "blur(70px)" }}
        />
      </Box>
    </div>
  );
}

export const Blur = (props: IconProps) => {
  return (
    <Icon
      width={useBreakpointValue({ base: "100%", md: "40vw", lg: "30vw" })}
      zIndex={useBreakpointValue({ base: -1, md: -1, lg: 0 })}
      height="560px"
      viewBox="0 0 528 560"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="71" cy="61" r="111" fill="#a4bbe2" />
      <circle cx="244" cy="106" r="139" fill="#6366f1" />
      <circle cy="291" r="139" fill="#6366f1" />
      <circle cx="80.5" cy="189.5" r="101.5" fill="#3b82f6" />
      <circle cx="196.5" cy="317.5" r="101.5" fill="#8b5cf6" />
      <circle cx="70.5" cy="458.5" r="101.5" fill="#c084fc" />
      <circle cx="426.5" cy="-0.5" r="101.5" fill="#4299E1" />
    </Icon>
  );
};
