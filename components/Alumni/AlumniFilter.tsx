import { ChevronDownIcon } from "@chakra-ui/icons";
import { Select, Flex, Button } from "@chakra-ui/react";
import { useState } from "react";
import { FaFilter } from "react-icons/fa";

const startingYear = 2010;
const courseList = ["B.Sc", "B.Com", "BA", "BCA"];
const yearList = Array.from(
  Array(new Date().getFullYear() - startingYear).keys()
).map((x) => x + startingYear);

const AlumniFilter = () => {
  const [alumniCourse, setAlumniCourse] = useState<string | null>(null);
  const [alumniYear, setAlumniYear] = useState<number | null>(null);
  const [filter, setFilter] = useState(false);
  return (
    <Flex
      justify={"center"}
      align={"center"}
      m={"4"}
      direction={{ base: "column", md: "row" }}
      gap={"4"}
    >
      <Button
        leftIcon={<FaFilter />}
        colorScheme={"purple"}
        onClick={() => {
          setFilter(!filter);
        }}
      >
        {!filter ? "" : "Filter"}
      </Button>
      <Select
        display={filter ? "none" : "block"}
        icon={<ChevronDownIcon />}
        placeholder="Select Course"
        w={"xs"}
        borderColor={"blue.400"}
        onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
          setAlumniCourse(event.target.value);
        }}
      >
        {courseList.map((course) => (
          <option key={course} value={course}>
            {course}
          </option>
        ))}
      </Select>
      <Select
        display={filter ? "none" : "block"}
        icon={<ChevronDownIcon />}
        placeholder="Select Year"
        w={"xs"}
        borderColor={"blue.400"}
        onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
          setAlumniYear(parseInt(event.target.value));
        }}
      >
        {yearList.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </Select>
      <Button display={filter ? "none" : "block"} colorScheme={"purple"}>
        Apply
      </Button>
    </Flex>
  );
};

export default AlumniFilter;
