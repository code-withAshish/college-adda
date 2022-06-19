import {
  Avatar,
  Box,
  Button,
  Grid,
  GridItem,
  HStack,
  Text,
} from "@chakra-ui/react";
import { signIn, signOut, useSession } from "next-auth/react";
import { useState } from "react";

function Home() {
  const [clicked, setClicked] = useState<"facebook" | "github" | null>(null);
  const { data: session, status } = useSession();

  return (
    <Grid
      h={["100vh", "100vh", "100vh"]}
      templateRows={"repeat(1,1fr)"}
      templateColumns={"repeat(8,1fr)"}
    >
      <GridItem
        colSpan={2}
        bgGradient={"linear(to-r,blue.200,purple.100)"}
      ></GridItem>
      <GridItem
        borderLeft={"6px solid #fff"}
        colSpan={4}
        bgGradient={"linear(to-r,blue.200,purple.200)"}
        overflow={"scroll"}
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
        <HStack spacing={4}>
          <Button
            isLoading={clicked === "facebook"}
            loadingText="Authenticating"
            w="xl"
            variant={"solid"}
            colorScheme={"facebook"}
            size="lg"
            onClick={() => {
              signIn("facebook");
              setClicked("facebook");
            }}
          >
            facebook
          </Button>
          <Button
            isLoading={clicked === "github"}
            loadingText="Authenticating"
            w="xl"
            variant={"solid"}
            colorScheme={"orange"}
            size="lg"
            onClick={() => {
              signIn("github");
              setClicked("github");
            }}
          >
            Github
          </Button>
          <Button
            isDisabled={status === "unauthenticated" || status === "loading"}
            w="xl"
            variant={"solid"}
            colorScheme={"gray"}
            size="lg"
            onClick={() => {
              signOut({ redirect: false });
            }}
          >
            SignOut
          </Button>
        </HStack>
        {status === "authenticated" ? (
          <Box>
            <Text>{session.user?.name}</Text>
            <Avatar src={session.user?.image!} />
          </Box>
        ) : (
          <Text>Not Authenticated</Text>
        )}
      </GridItem>
      <GridItem
        colSpan={2}
        bgGradient={"linear(to-r,blue.200,purple.200)"}
      ></GridItem>
    </Grid>
  );
}

export default Home;
