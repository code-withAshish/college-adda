import { Flex } from "@chakra-ui/react";
import React from "react";
import SearchBar from "../components/Resources/SearchBar";

const Resources = () => {
  return (
    <Flex align={"center"} justify="center" h={"100vh"}>
      <SearchBar />
    </Flex>
  );
};

export default Resources;
