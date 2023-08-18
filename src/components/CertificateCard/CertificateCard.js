import {
  Button,
  Card,
  CardBody,
  CardHeader,
  HStack,
  Text,
} from "@chakra-ui/react";
import React from "react";

const CertificateCard = (props) => {
  const { from, title, color } = props;
  return (
    <>
      <Card height="200px" background={color}>
        <CardHeader>
          <Text
            position="absolute"
            right="3"
            fontSize={{ base: "22.9px", sm: "26px" }}
            color={"#1f1f1f"}
            textAlign={"right"}
            whiteSpace="pre-line"
            fontFamily="google-sans-medium"
          >
            {title}
          </Text>
        </CardHeader>
        <CardBody padding={"15px"}>
          <HStack>
            <Text
              position="absolute"
              bottom="4"
              left="3"
              right="3"
              fontSize={{ base: "22.9px", sm: "26px" }}
              color={"#1f1f1f"}
              whiteSpace="pre-line"
              fontFamily="google-sans-regular"
            >
              {from}
            </Text>
            <Button
              position="absolute"
              bottom="4"
              width={"50px"}
              right="3"
              fontSize={{ base: "22.9px", sm: "26px" }}
              color={"#FFFFFF"}
              backgroundColor={"#1F1F1F"}
              whiteSpace="pre-line"
              fontFamily="google-sans-regular"
            >
              Go
            </Button>
          </HStack>
        </CardBody>
      </Card>
    </>
  );
};

export default CertificateCard;
