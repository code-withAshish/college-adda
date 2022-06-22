import {
  ButtonSpinner,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Spinner,
  HStack,
  Text,
  Center,
} from "@chakra-ui/react";

const AuthModal = ({ open }: { open: boolean }) => {
  return (
    <Modal isOpen={open} onClose={() => {}} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalBody>
          <Center>
            <HStack>
              <Spinner
                thickness="4px"
                speed="0.65s"
                emptyColor="gray.200"
                color="blue.500"
                size="xl"
              />
              <ModalHeader>Authenticating</ModalHeader>
            </HStack>
          </Center>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default AuthModal;
