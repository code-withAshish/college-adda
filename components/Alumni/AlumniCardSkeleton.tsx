import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Badge,
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useState } from "react";

const AlumniCardSkeleton = () => {
  return (
    <Center py={6}>
      <Box
        minW={"320px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        rounded={"lg"}
        p={6}
      >
        <Center>
          <SkeletonCircle size={"110px"} mb={4} />
        </Center>

        <Skeleton h={"18px"} />
        <Center>
          <Skeleton mt={"3"} mb={4} h="10px" w={"100px"} />
        </Center>

        <SkeletonText noOfLines={4} px={"6"} mt="4" />

        <Stack align={"center"} justify={"center"} direction={"row"} mt={6}>
          <Skeleton p={4} w={"45px"} rounded={"xl"} />
          <Skeleton p={4} w={"55px"} rounded={"xl"} />
        </Stack>

        <Stack mt={8} direction={"row"} spacing={4}>
          <Skeleton h="38px" rounded={"full"} w={"50%"} />
          <Skeleton h="38px" rounded={"full"} w={"50%"} />
        </Stack>
      </Box>
    </Center>
  );
};

export default AlumniCardSkeleton;
