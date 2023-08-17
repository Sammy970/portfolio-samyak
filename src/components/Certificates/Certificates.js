import { Box, Grid, GridItem, Text } from "@chakra-ui/react";
import React from "react";
import CertificateCard from "./CertificateCard/CertificateCard";

const colorPalette = [
  "#DDEFE0",
  "#F4ECDD",
  "#EFDADA",
  "#DEE0EF",
  // Add more colors if needed
];

const CertificateData = [
  {
    id: "c1",
    from: "Coursera",
    title: "Meta Front-End Developer Specialization",
  },
  {
    id: "c2",
    from: "Coursera",
    title: "React Native",
  },
  {
    id: "c3",
    from: "Coursera",
    title: "Principles of UX/UI Design",
  },
  {
    id: "c4",
    from: "Coursera",
    title: "Programming with JavaScript",
  },
  {
    id: "c5",
    from: "Coursera",
    title: "HTML and CSS in depth",
  },
  {
    id: "c6",
    from: "Coursera",
    title: "Advanced React",
  },
  {
    id: "c7",
    from: "Coursera",
    title: "Introduction to HTML/CSS",
  },
];

const Certificates = () => {
  return (
    <Box boxShadow="md" borderRadius="13px" color="#f5f5f5" mb={10}>
      <Text ml={3} mb={3} fontSize="25px" fontFamily="google-sans-bold">
        Certificates
      </Text>
      <Grid templateColumns={"auto auto auto"} gap={10}>
        {CertificateData.map((certi, index) => (
          <GridItem key={certi.id}>
            <CertificateCard
              from={certi.from}
              title={certi.title}
              color={colorPalette[index % colorPalette.length]}
            />
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};

export default Certificates;
