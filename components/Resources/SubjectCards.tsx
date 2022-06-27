import {
  Flex,
  Box,
  Icon,
  chakra,
  Image,
  HStack,
  Text,
  Avatar,
  Badge,
  Button,
  Center,
  Heading,
  Stack,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { ChevronDownIcon, StarIcon } from "@chakra-ui/icons";
const SubjectCards = () => {
  return (
    <Center py={6}>
      <Box
        minW={"200px"}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        rounded={"lg"}
        p={6}
        textAlign={"center"}
      >
        <Stack direction={{ base: "column", md: "row" }}>
          <Flex bg="white" justify={{ base: "center", md: "normal" }}>
            <Image
              flexBasis={1}
              alt={"Cewvef"}
              borderRadius={"xl"}
              objectFit="fill"
              fit={"cover"}
              boxSize="auto"
              boxShadow={"lg"}
              src={
                "https://images.unsplash.com/photo-1494726161322-5360d4d0eeae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
              }
            />
          </Flex>

          <Box>
            <VStack>
              <Heading fontSize={"2xl"} fontFamily={"body"}>
                {"Physics"}
              </Heading>
              <Text
                textAlign={"center"}
                color={useColorModeValue("gray.700", "gray.400")}
                px={3}
                minH={"100px"}
                noOfLines={3}
              >
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio
                suscipit eaque sunt, temporibus totam ab corrupti doloremque,
                magni nisi minima in dolores repellat? Voluptatem, consectetur
                necessitatibus dicta laboriosam distinctio adipisci.
              </Text>
            </VStack>
          </Box>
        </Stack>
      </Box>
    </Center>
  );
};

export default SubjectCards;
