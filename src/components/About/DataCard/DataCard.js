import { Card, HStack, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";

const DataCard = (props) => {
  const { year, firstText, secondText, image, color } = props;
  return (
    <Card bg={color} borderRadius="10px" p={1} w={"full"}>
      <HStack justifyContent={"space-between"} ml={5} mr={5}>
        <VStack alignItems="left" gap={1}>
          <Text fontFamily="google-sans-medium" fontSize={18}>
            {year}
          </Text>
          <Text fontFamily="google-sans-black" fontSize={20}>
            {firstText}
          </Text>
          <Text fontFamily="google-sans-medium" fontSize={18}>
            {secondText}
          </Text>
        </VStack>
        <VStack>
          <Image src={image} width={90} height={90} borderRadius="50%" />
        </VStack>
      </HStack>
    </Card>
  );
};

export default DataCard;
