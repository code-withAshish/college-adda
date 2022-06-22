import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  Stack,
  Center,
  Divider,
  HStack,
  Text,
  FormErrorMessage,
  useToast,
} from "@chakra-ui/react";
import { Field, Formik } from "formik";
import { FaGithub } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import * as Yup from "yup";
import { signIn, signOut, useSession } from "next-auth/react";
import AuthModal from "./AuthModal";
import { useEffect, useState } from "react";

const SignInSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(8, "Password Should be minimum 8 characters long")
    .max(20, "Password Should be maximum 20 characters long")
    .required("Password is required"),
});

interface ButtonClickedProps {
  provider: "github" | "facebook" | "credential" | null;
  state: boolean;
}

const LoginBox = () => {
  const [modalState, setModalState] = useState<boolean>(false);
  const [clicked, setClicked] = useState<ButtonClickedProps>({
    provider: null,
    state: false,
  });
  const toast = useToast();
  const { status } = useSession();

  function successToast() {
    //succesfully signed in toast
    toast({
      title: "Successfully Signed In",
      description: "You are now signed in",
      status: "success",
      duration: 5000,
      isClosable: true,
      position: "top",
    });
  }
  useEffect(() => {
    if (status === "unauthenticated" && clicked.state) {
      setModalState(true);
    } else {
      setModalState(false);
    }
  }, [status, clicked.state]);

  return (
    <Box mt={10}>
      <AuthModal open={modalState} />

      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={SignInSchema}
        onSubmit={(values) => {
          setClicked({ provider: "credential", state: true });
          alert(JSON.stringify(values, null, 2));
        }}
      >
        {({ handleSubmit, errors, touched }) => (
          <form onSubmit={handleSubmit}>
            <Stack gap={3}>
              <FormControl isInvalid={!!errors.email && touched.email}>
                <FormLabel htmlFor="email" fontWeight={"semibold"}>
                  Email / Username
                </FormLabel>
                <Field
                  id="email"
                  name="email"
                  as={Input}
                  type={"text"}
                  bg={"gray.300"}
                  border={0}
                  mt={2}
                  mb={2}
                  color={"black"}
                />
                <FormErrorMessage>{errors.email}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={!!errors.password && touched.password}>
                <FormLabel htmlFor="password" fontWeight={"semibold"}>
                  Password
                </FormLabel>
                <Field
                  id="password"
                  name="password"
                  as={Input}
                  type={"password"}
                  bg={"gray.300"}
                  border={0}
                  mt={2}
                  mb={2}
                  color={"black"}
                />
                <FormErrorMessage>{errors.password}</FormErrorMessage>
              </FormControl>
            </Stack>

            <Button
              type="submit"
              fontFamily={"heading"}
              mt={8}
              w={"full"}
              bgGradient="linear(to-r, blue.400,purple.400)"
              color={"white"}
              _hover={{
                bgGradient: "linear(to-r, blue.400,purple.400)",
                boxShadow: "xl",
              }}
            >
              Continue
            </Button>
            <Button
              variant={"solid"}
              onClick={() => {
                signOut();
              }}
            >
              Sign out
            </Button>

            <Stack gap={4} mb="10">
              <Center height={"20px"}>
                <Divider orientation="horizontal" />
              </Center>
              <Center>
                <Text fontWeight={"medium"} fontSize={"xl"}>
                  or signup with
                </Text>
              </Center>
            </Stack>
            <HStack>
              <Button
                leftIcon={<BsFacebook color="white" size={"20px"} />}
                w={"full"}
                maxW={"md"}
                colorScheme={"facebook"}
                onClick={() => {
                  setClicked({ provider: "facebook", state: true });
                  signIn("facebook");
                }}
              />
              <Button
                leftIcon={<FaGithub color="white" size={"20px"} />}
                w={"full"}
                maxW={"md"}
                variant={"solid"}
                bg={"black"}
                onClick={() => {
                  setClicked({ provider: "github", state: true });
                  signIn("github");
                }}
                _hover={{
                  bg: "blackAlpha.800",
                  boxShadow: "xl",
                }}
              />
            </HStack>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default LoginBox;
