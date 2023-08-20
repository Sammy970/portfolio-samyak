import React from "react";

import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
  timelineOppositeContentClasses,
} from "@mui/lab";
import TimelineCard from "../components/TimelineCard/TimelineCard";
import { Text } from "@chakra-ui/react";

const TimelinePage = () => {
  return (
    <Timeline
      position="right"
      sx={{
        [`& .${timelineOppositeContentClasses.root}`]: {
          flex: 0.25,
        },
      }}
    >
      <TimelineItem>
        <TimelineOppositeContent
          fontFamily={"google-sans-medium"}
          color={"#FFFFFF"}
          alignSelf={"center"}
          fontSize={18}
        >
          <Text textAlign={"center"}>2019</Text>
        </TimelineOppositeContent>

        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>

        <TimelineContent>
          <TimelineCard />
          <TimelineCard />
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent
          fontFamily={"google-sans-medium"}
          color={"#FFFFFF"}
          alignSelf={"center"}
          fontSize={18}
        >
          <Text textAlign={"center"}>2020</Text>
        </TimelineOppositeContent>

        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>

        <TimelineContent>
          <TimelineCard />
          <TimelineCard />
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent
          fontFamily={"google-sans-medium"}
          color={"#FFFFFF"}
          alignSelf={"center"}
          fontSize={18}
        >
          <Text textAlign={"center"}>2021</Text>
        </TimelineOppositeContent>

        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>

        <TimelineContent>
          <TimelineCard />
          <TimelineCard />
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent
          fontFamily={"google-sans-medium"}
          color={"#FFFFFF"}
          alignSelf={"center"}
          fontSize={18}
        >
          <Text textAlign={"center"}>2022</Text>
        </TimelineOppositeContent>

        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>

        <TimelineContent>
          <TimelineCard />
          <TimelineCard />
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
};

export default TimelinePage;
