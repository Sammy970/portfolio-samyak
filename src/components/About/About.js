import { Box, Text, VStack } from "@chakra-ui/react";
import React from "react";
import EducationCard from "./EducationCard/EducationCard";

const EducationData = [
  {
    id: "e1",
    year: "2021 - 2024",
    branchName: "BTech in Instrumentation and Control Engineering",
    collegeName: "Vishwakarma Institute of Technology, Pune",
    image:
      "https://www.collegebatch.com/static/clg-gallery/vishwakarma-institute-of-technology-pune-224988.jpg",
    color: "#DDEFE0",
  },
  {
    id: "e2",
    year: "2018 - 2021",
    branchName: "Diploma in Instrumentation Engineering",
    collegeName: "Vidyaprasarak Mandal Polytechnic College, Thane",
    image:
      "https://content3.jdmagicbox.com/comp/thane/42/022p8400842/catalogue/vidya-prasarak-mandals-polytechnic-thane-west-thane-engineering-institutes-njvsjog41i.jpg",
    color: "#F4ECDD",
  },
];

const About = () => {
  return (
    <>
      <Box boxShadow="md" borderRadius="13px" color="#f5f5f5">
        <Text ml={3} mb={3} fontSize="23px">
          Education
        </Text>
        <VStack gap={4}>
          {EducationData.map((data) => (
            <EducationCard
              key={data.id}
              year={data.year}
              branchName={data.branchName}
              collegeName={data.collegeName}
              image={data.image}
              color={data.color}
            />
          ))}
        </VStack>
      </Box>
    </>
  );
};

export default About;
