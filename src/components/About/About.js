import { Box, Text, VStack } from "@chakra-ui/react";
import React from "react";
import DataCard from "./DataCard/DataCard";

const EducationData = [
  {
    id: "edu1",
    year: "2021 - 2024",
    branchName: "BTech in Instrumentation and Control Engineering",
    collegeName: "Vishwakarma Institute of Technology, Pune",
    image:
      "https://www.collegebatch.com/static/clg-gallery/vishwakarma-institute-of-technology-pune-224988.jpg",
    color: "#DDEFE0",
  },
  {
    id: "edu2",
    year: "2018 - 2021",
    branchName: "Diploma in Instrumentation Engineering",
    collegeName: "Vidyaprasarak Mandal Polytechnic College, Thane",
    image:
      "https://content3.jdmagicbox.com/comp/thane/42/022p8400842/catalogue/vidya-prasarak-mandals-polytechnic-thane-west-thane-engineering-institutes-njvsjog41i.jpg",
    color: "#F4ECDD",
  },
  {
    id: "edu3",
    year: "2018",
    branchName: "SSC - 10th Standard",
    collegeName: "ST. John the Baptist High School and Junior College, Thane",
    image:
      "https://content3.jdmagicbox.com/comp/thane/42/022p8400842/catalogue/vidya-prasarak-mandals-polytechnic-thane-west-thane-engineering-institutes-njvsjog41i.jpg",
    color: "#EFDADA",
  },
];

const ExperienceData = [
  {
    id: "exp1",
    year: "Aug 2023 - Present",
    post: "Head of Web Developement",
    where: "International Society of Automation (ISA)",
    image:
      "https://images.crunchbase.com/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/v1436854777/xc3cjzrnfciekp6ewd31.png",
    color: "#DEE0EF",
  },
];

const About = () => {
  return (
    <>
      <Box boxShadow="md" borderRadius="13px" color="#f5f5f5" mb={10}>
        <Text ml={3} mb={3} fontSize="25px" fontFamily="google-sans-bold">
          Experience
        </Text>
        <VStack gap={4}>
          {ExperienceData.map((data) => (
            <DataCard
              key={data.id}
              year={data.year}
              firstText={data.post}
              secondText={data.where}
              image={data.image}
              color={data.color}
            />
          ))}
        </VStack>
      </Box>
      <Box boxShadow="md" borderRadius="13px" color="#f5f5f5" mb={10}>
        <Text ml={3} mb={3} fontSize="25px" fontFamily="google-sans-bold">
          Education
        </Text>
        <VStack gap={4}>
          {EducationData.map((data) => (
            <DataCard
              key={data.id}
              year={data.year}
              firstText={data.branchName}
              secondText={data.collegeName}
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
