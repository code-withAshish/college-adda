import {
  useDisclosure,
  Button,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogCloseButton,
  AlertDialogBody,
  AlertDialogFooter,
} from "@chakra-ui/react";
import { signOut, useSession } from "next-auth/react";
import { useRef } from "react";

export default function SignoutModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef();
  const session = useSession();

  function handleSignOut() {
    onClose();
    signOut({ callbackUrl: "/Login" });
  }
  return (
    <>
      <Button
        mr={4}
        display={session.status === "authenticated" ? "inline-block" : "none"}
        onClick={onOpen}
      >
        Sign Out
      </Button>
      <AlertDialog
        motionPreset="slideInBottom"
        //@ts-ignore
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isOpen={isOpen}
        isCentered
      >
        <AlertDialogOverlay />

        <AlertDialogContent>
          <AlertDialogHeader>Sign Out</AlertDialogHeader>
          <AlertDialogCloseButton />
          <AlertDialogBody>Are you sure you want to Sign Out?</AlertDialogBody>
          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onClose}>
              No
            </Button>
            <Button colorScheme="red" ml={3} onClick={handleSignOut}>
              Yes
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
