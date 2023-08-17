import { Box, Grid, GridItem, Text } from "@chakra-ui/react";
import React from "react";
import CertificateCard from "./CertificateCard/CertificateCard";

const CertificateData = [
  {
    id: "c1",
    from: "Coursera",
    title: "Meta Front-End Developer Specialization",
    color: "#DDEFE0",
  },
  {
    id: "c2",
    from: "Coursera",
    title: "React Native",
    color: "#F4ECDD",
  },
  {
    id: "c3",
    from: "Coursera",
    title: "Principles of UX/UI Design",
    color: "#EFDADA",
  },
  {
    id: "c4",
    from: "Coursera",
    title: "Programming with JavaScript",
    color: "#DEE0EF",
  },
  {
    id: "c5",
    from: "Coursera",
    title: "HTML and CSS in depth",
    color: "#DDEFE0",
  },
  {
    id: "c6",
    from: "Coursera",
    title: "Advanced React",
    color: "#F4ECDD",
  },
];

const Certificates = () => {
  return (
    <Box boxShadow="md" borderRadius="13px" color="#f5f5f5" mb={10}>
      <Text ml={3} mb={3} fontSize="25px" fontFamily="google-sans-bold">
        Certificates
      </Text>
      <Grid templateColumns={"auto auto auto"} gap={10}>
        {CertificateData.map((certi) => (
          <GridItem key={certi.id}>
            <CertificateCard
              from={certi.from}
              title={certi.title}
              color={certi.color}
            />
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};

export default Certificates;
