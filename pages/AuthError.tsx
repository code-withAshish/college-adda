import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  Center,
  VStack,
  ModalHeader,
  Text,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const AuthError = () => {
  const router = useRouter();
  //countdown timer to redirect to home page
  const [countdown, setCountdown] = useState(5);
  const interval = setInterval(() => {
    setCountdown(countdown - 1);
  }, 1000);
  useEffect(() => {
    if (countdown === 0) {
      router.push("/Login");
    }
  }, [countdown, router]);

  return (
    <Modal isOpen={true} onClose={() => {}} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalBody>
          <Center>
            <VStack>
              <ModalHeader>You are Already Signed in</ModalHeader>
              <Text transition={"all"}>
                You will be redirected to home page in {countdown} seconds
              </Text>
              <Text textColor={"red.500"}>{router.query.error}</Text>
            </VStack>
          </Center>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default AuthError;
