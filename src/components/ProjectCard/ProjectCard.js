import React from "react";
import { Box, Image } from "@chakra-ui/react";

const ProjectCard = (props) => {
  const { image } = props;
  return (
    <Box
      maxW="full"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
    >
      <Image
        src={image}
        alt="Card Image"
        w="100%"
      />
    </Box>
  );
};

export default ProjectCard;
