import { Box, Flex, SimpleGrid } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import AlumniCard from "../components/Alumni/AlumniCard";
import AlumniCardSkeleton from "../components/Alumni/AlumniCardSkeleton";
import AlumniFilter from "../components/Alumni/AlumniFilter";

const Alumni = () => {
  const [isLoaded, setLoaded] = useState(true);
  const mockupCardKeys = ["1", "2", "3", "4", "5"];
  return (
    <Box>
      <AlumniFilter />
      <SimpleGrid minChildWidth={"340px"} mt={"6"} mb={"6"} px={"6"}>
        <AlumniCard
          name="Amit Nath"
          batch={"2020-2022"}
          image={"/amitNath.jpg"}
          description={
            "Drinks Lemon tea, loves coffee smell, Programmer, Tech Savy."
          }
          branch={"PCAM"}
          degree={"B.Sc"}
        />
        <AlumniCard
          name="Minakshi Srivastava"
          batch={"2020-2022"}
          image={"/minakshiSrivastava.jpg"}
          description={"Student in Ewing Christian College"}
          branch={"PCAM"}
          degree={"B.Sc"}
        />

        <AlumniCard
          name="Jayati Rai"
          batch={"2021-2023"}
          image={"/jayatiRai.webp"}
          description={
            "You can also call me Rai Sahab. Existing with the thought that I will do something I like everyday. I will cost 100000000 for signing an autograph (Even i don't know kitna zero hai)"
          }
          branch={"PCAM"}
          degree={"B.Sc"}
        />
        <AlumniCard
          name="Anshika Singh Chandel"
          batch={"2021-2023"}
          image={"/anshikaChandel.jpg"}
          description={"Your girl next door running on coffee, books n music."}
          branch={"PCAM"}
          degree={"B.Sc"}
        />
        <AlumniCard
          name="Ashish Kumar"
          batch={"2021-2023"}
          image={"/ashishKumar.jpg"}
          description={"Want to sink in coding life"}
          branch={"PCAM"}
          degree={"B.Sc"}
        />
        <AlumniCard
          name="Malay Bhattacharya"
          batch={"2021-2023"}
          image={"/malayBhattacharya.jpg"}
          description={
            "I am an enthusiastic, self-motivated, reliable, responsible and hard working person."
          }
          branch={"PCAM"}
          degree={"B.Sc"}
        />
        <AlumniCard
          name="Aditya Singh"
          batch={"2021-2023"}
          image={"/adityaSingh.jpg"}
          description={"200 m runner "}
          branch={"PCAM"}
          degree={"B.Sc"}
        />
      </SimpleGrid>
    </Box>
  );
};

export default Alumni;
