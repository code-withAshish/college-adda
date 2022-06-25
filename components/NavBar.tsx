import { ReactNode } from "react";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Text,
  Spacer,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { useSession } from "next-auth/react";
import { BiPowerOff } from "react-icons/bi";
import SignoutModal from "./Login/SignoutModal";

const Links = ["", "Resources", "Alumni", "About"];

const NavLink = ({ children }: { children: ReactNode }) => (
  <NextLink href={`/${children}`} passHref>
    <Link
      px={2}
      py={1}
      zIndex={10}
      fontWeight={"semibold"}
      _hover={{
        textDecoration: "none",
        borderBottom: "1px solid",
      }}
    >
      {children === "" ? "Home" : children}
    </Link>
  </NextLink>
);

export default function NavBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const session = useSession();
  return (
    <>
      <Box bg={useColorModeValue("gray.300", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8}>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>
          <Spacer />
          <NextLink href={"/Login"} passHref>
            <Button
              mr={4}
              display={
                session.status === "unauthenticated" ? "inline-block" : "none"
              }
              colorScheme={"purple"}
            >
              Login
            </Button>
          </NextLink>
          <SignoutModal />
          <Menu>
            <MenuButton
              as={Button}
              rounded={"full"}
              variant={"link"}
              cursor={"pointer"}
              minW={0}
            >
              <Avatar
                size={"sm"}
                name={session.data?.user?.name!}
                src={session.data?.user?.image!}
              />
            </MenuButton>
            <MenuList>
              <MenuItem>Link 1</MenuItem>
              <MenuItem>Link 2</MenuItem>
              <MenuDivider />
              <MenuItem>
                <HStack>
                  <BiPowerOff color={"red"} size={"22px"} />
                  <Text ml={2} color={"red"}>
                    Sign Out
                  </Text>
                </HStack>
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>
        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
