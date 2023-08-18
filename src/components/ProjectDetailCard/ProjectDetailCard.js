import { Text } from "@chakra-ui/react";
import React from "react";

const ProjectDetailCard = (props) => {
  const { title, techUsed } = props;

  return (
    <>
      <Text fontFamily="google-sans-black" color={"#FFFFFF"} fontSize={30}>
        {title}
      </Text>
      <Text fontFamily="google-sans-regular" color={"#FFFFFF"} fontSize={20}>
        {techUsed}
      </Text>
    </>
  );
};

export default ProjectDetailCard;
