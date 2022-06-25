import { Box, Flex } from "@chakra-ui/react";
import AlumniCard from "../components/Alumni/AlumniCard";
import AlumniFilter from "../components/Alumni/AlumniFilter";

const Alumni = () => {
  return (
    <Box>
      <AlumniFilter />
      <Flex
        flexWrap={"wrap"}
        direction={{ base: "column", md: "row" }}
        justify={"space-around"}
        align={"center"}
        mt={"6"}
        mb={"6"}
        px={"6"}
      >
        <AlumniCard
          name="Sakshi Jain"
          batch={"2019-2021"}
          description={
            "I am a student of B.Tech in Computer Science and Engineering."
          }
          branch={"PCAM"}
          degree={"B.Sc"}
        />
        <AlumniCard
          name="Sakshi Jain"
          batch={"2019-2021"}
          description={
            "I am a student of B.Tech in Computer Science and Engineering."
          }
          branch={"PCAM"}
          degree={"B.Sc"}
        />
        <AlumniCard
          name="Ashish Bhushan"
          batch={"2019-2021"}
          description={
            "I am a student of B.Tech in Computer Science and Engineering."
          }
          branch={"PCAM"}
          degree={"B.Sc"}
        />
        <AlumniCard
          name="Sakshi Jain"
          batch={"2019-2021"}
          description={
            "I am a student of B.Tech in Computer Science and Engineering."
          }
          branch={"PCAM"}
          degree={"B.Sc"}
        />
        <AlumniCard
          name="Sakshi Jain"
          batch={"2019-2021"}
          description={
            "I am a student of B.Tech in Computer Science and Engineering."
          }
          branch={"PCAM"}
          degree={"B.Sc"}
        />
        <AlumniCard
          name="Ashish Bhushan Kumar"
          batch={"2019-2021"}
          description={
            "I am a student of B.Tech in Computer Science and Engineering."
          }
          branch={"PCAM"}
          degree={"B.Sc"}
        />
        <AlumniCard
          name="Abhijeet Kushwaha"
          batch={"2019-2021"}
          description={
            "I am a student of B.Tech in Computer Science and Engineering."
          }
          branch={"PCAM"}
          degree={"B.Sc"}
        />
        <AlumniCard
          name="Abhijeet Kumar"
          batch={"2019-2021"}
          description={
            "I am a student of B.Tech in Computer Science and Engineering."
          }
          branch={"PCAM"}
          degree={"B.Sc"}
        />
      </Flex>
    </Box>
  );
};

export default Alumni;
