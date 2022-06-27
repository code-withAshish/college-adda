import {
  Box,
  Grid,
  GridItem,
  Heading,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { Post } from "@prisma/client";
import { prisma } from "../prisma/db";
import FeedCard from "../components/Index/FeedCard";
import { GetStaticProps, GetStaticPropsContext } from "next";
import TestComponent from "../components/Index/TestComponent";

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  const posts = await prisma.post.findMany({
    take: 25,
    orderBy: {
      heading: "asc",
    },
  });
  return {
    props: { posts },
    revalidate: 10,
  };
};

function Home({ posts }: { posts: Post[] }) {
  return (
    <SimpleGrid h={["100vh", "100vh", "100vh"]} columns={{ sm: 1, md: 3 }}>
      <Box
        display={{ base: "none", md: "block" }}
        bgGradient={"linear(to-r,blue.200,purple.100)"}
      ></Box>
      <Box
        borderLeft={"6px solid #fff"}
        bgGradient={"linear(to-r,blue.200,purple.200)"}
        overflowY={"scroll"}
        overflowX={"hidden"}
        scrollBehavior={"smooth"}
        sx={{
          "&::-webkit-scrollbar": {
            backgroundColor: "white",
            width: "8px",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundImage: "linear-gradient(to bottom, #ec4899, #c026d3)",
            borderRadius: "10px",
          },
        }}
      >
        <Stack gap={4} m={3}>
          {posts.map(({ id, heading, imageURL, description }) => {
            return (
              <FeedCard
                key={id}
                heading={heading}
                imgURL={imageURL}
                description={description}
              />
            );
          })}
        </Stack>
      </Box>
      <Box
        display={{ base: "none", md: "block" }}
        bgGradient={"linear(to-r,blue.200,purple.200)"}
      >
        <TestComponent />
      </Box>
    </SimpleGrid>
  );
}

export default Home;
