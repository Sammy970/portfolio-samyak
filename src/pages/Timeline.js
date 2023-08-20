import React from "react";

import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from "@mui/lab";
import TimelineCard from "../components/TimelineCard/TimelineCard";

const TimelinePage = () => {
  return (
    <Timeline position="alternate">
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <TimelineCard title={"hel"} />
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
};

export default TimelinePage;
