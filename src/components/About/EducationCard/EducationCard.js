import { Card, HStack, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";

const EducationCard = (props) => {
  const { year, branchName, collegeName, image, color } = props;
  return (
    <Card bg={color} borderRadius="10px" p={1} w={"full"}>
      <HStack justifyContent={"space-between"} ml={5} mr={5}>
        <VStack alignItems="left" gap={1}>
          <Text fontFamily="google-sans-medium" fontSize={20}>
            {year}
          </Text>
          <Text fontFamily="google-sans-black" fontSize={23}>
            {branchName}
          </Text>
          <Text fontFamily="google-sans-medium" fontSize={20}>
            {collegeName}
          </Text>
        </VStack>
        <VStack>
          <Image src={image} width={90} height={90} borderRadius="50%" />
        </VStack>
      </HStack>
    </Card>
  );
};

export default EducationCard;
