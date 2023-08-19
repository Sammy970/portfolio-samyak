import { Box, Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import BlogCard from "../components/BlogCard/BlogCard";

const colorPalette = [
  "#DDEFE0",
  "#F4ECDD",
  "#EFDADA",
  "#DEE0EF",
  // Add more colors if needed
];

const BlogData = [
  {
    id: "b1",
    date: "January 26, 2023",
    title:
      "Designing and implementing a voice-controlled roller blind [Part-2]",
    from: "Medium",
  },
  {
    id: "b2",
    date: "January 26, 2023",
    title:
      "Designing and implementing a voice-controlled roller blind [Part-1]",
    from: "Medium",
  },
  {
    id: "b3",
    date: "January 23, 2023",
    title: "YOLOv8 training on Custom Data! [PCB-Defect-Detection]",
    from: "Medium",
    color: "#EFDADA",
  },
  {
    id: "b4",
    date: "January 17, 2023",
    title: "YOLOv8 The new State Of The Art Detector?",
    from: "Medium",
  },
  {
    id: "b5",
    date: "January 12, 2023",
    title: "Training a YOLOv7 Model using Custom Dataset",
    from: "Medium",
  },
  {
    id: "b6",
    date: "June 10, 2022",
    title: "IoT Protocols",
    from: "Medium",
  },
];

const Blogs = () => {
  return (
    <Box
      boxShadow="md"
      maxW={"full"}
      borderRadius="13px"
      color="#f5f5f5"
      mb={10}
    >
      <Grid
        templateColumns={{
          base: "auto",
          sm: "auto",
          md: " auto",
          lg: "auto auto",
        }}
        gap={5}
      >
        {BlogData.map((blog, index) => (
          <GridItem key={blog.id}>
            <BlogCard
              date={blog.date}
              title={blog.title}
              from={blog.from}
              color={colorPalette[index % colorPalette.length]}
            />
          </GridItem>
        ))}
      </Grid>

      {/* <VStack maxW={"full"}>
        <BlogCard />
        <BlogCard />
      </VStack> */}
    </Box>
  );
};

export default Blogs;
