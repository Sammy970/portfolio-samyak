import React from "react";

import { Card, CardBody, Text } from "@chakra-ui/react";

const TimelineCard = () => {
  return (
    <Card w={"full"} bg={"#FFFFFF"} p={3} borderRadius={7}>
      <CardBody
        color={"#1F1F1F"}
        fontFamily={"google-sans-black"}
        fontSize={19}
      >
        <Text>Hello this is test</Text>
      </CardBody>
    </Card>
  );
};

export default TimelineCard;
