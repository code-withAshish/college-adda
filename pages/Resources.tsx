import { Flex, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import SearchBar from "../components/Resources/SearchBar";
import SubjectCards from "../components/Resources/SubjectCards";

const Resources = () => {
  return (
    <SimpleGrid minChildWidth={"200px"} mt={"6"} mb={"6"} px={"6"} gap={"4"}>
      <SubjectCards />
      <SubjectCards />
      <SubjectCards />
    </SimpleGrid>
  );
};

export default Resources;
