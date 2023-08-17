import {
  Button,
  Card,
  CardFooter,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";

const BlogCard = (props) => {
  const { date, title, from, color } = props;

  return (
    <Card
      bg={color}
      h={"full"}
      justifyContent={"space-evenly"}
      borderRadius="10px"
      p={2}
      w={"full"}
    >
      <VStack alignItems="left" gap={1} ml={5} mr={5}>
        <Text fontFamily="google-sans-medium" fontSize={18}>
          {date}
        </Text>
        <Text noOfLines={2} fontFamily="google-sans-black" fontSize={20}>
          {title}
        </Text>
        <CardFooter
          p={1}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Text fontFamily="google-sans-medium" fontSize={18}>
            {from}
          </Text>
          <Button
            backgroundColor={"#1f1f1f"}
            color={"#FFFFFF"}
            fontFamily="google-sans-regular"
            letterSpacing={1}
          >
            Read More
          </Button>
        </CardFooter>
      </VStack>
    </Card>
  );
};

export default BlogCard;
