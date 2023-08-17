import { VStack } from "@chakra-ui/react";
import React from "react";

const Sidebar = () => {
  return (
    <VStack
      alignItems="center"
      spacing={{ base: 6, sm: 8 }}
      p={4}
      h={"full"}
      justifyContent="center"
      fontFamily="google-sans-bold"
      color="#1f1f1f"
      fontSize="23px"
    >
      <h1>About</h1>
      <h1>Projects</h1>
      <h1>Blogs</h1>
      <h1>Skills</h1>
      <h1>Certificates</h1>
      <h1>Timeline</h1>
      <h1>Contacts</h1>
    </VStack>
  );
};

export default Sidebar;
