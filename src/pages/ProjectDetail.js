import React from "react";
import { json, useLoaderData } from "react-router-dom";
import ProjectDetailCard from "../components/ProjectDetailCard/ProjectDetailCard";

const ProjectDetail = () => {
  const data = useLoaderData();

  const { title, techUsed, desc, image, style } = data;

  return (
    <ProjectDetailCard
      title={title}
      techUsed={techUsed}
      desc={desc}
      image={image}
      style={style}
    />
  );
};

export default ProjectDetail;

export function loader({ params }) {
  const projectId = params.projectId;

  const ProjectDetailsData = [
    {
      id: "p1",
      title: "LinkedIn Post Maker",
      techUsed: ["ReactJS", "Tailwind CSS", "Express JS", "OpenAI API"],
      desc: `Elevate your LinkedIn presence with the LinkedIn Post Maker - a dynamic tool leveraging OpenAI's gpt-3.5-turbo-16k model. Simplify post creation through predefined categories like Certifications, Publications, and Internships, or seamlessly craft posts on unique subjects. The user-friendly interface ensures ease of use, while a "Copy" button expedites content transfer. Hosted securely, this tool redefines LinkedIn engagement.`,
      image: [
        "/project-image-assets/project1/linkedinPostMaker_1.jpeg",
        "/project-image-assets/project1/linkedinPostMaker_2.jpeg",
        "/project-image-assets/project1/linkedinPostMaker_3.jpeg",
        "/project-image-assets/project1/linkedinPostMaker_4.jpeg",
      ],
      style: "columns",
    },
    {
      id: "p2",
      title: "Link - Kar",
      techUsed: [
        "ReactJS",
        "Chakra UI",
        "Express JS",
        "MongoDB",
        "NodeJS",
        "API",
      ],
      desc: `Introducing Link-kar, a project designed to simplify link sharing. Experience the innovation of Smart Links, which effortlessly direct users to apps instead of browsers. Enhance user engagement with insightful analytics, ensure security through Google signup, and enjoy the benefits of compact, personalized links. Powered by cloud-based MongoDB, Link-kar offers a streamlined approach to link sharing and interaction.`,
      image: [
        "/project-image-assets/project2/linkkar_1.png",
        "/project-image-assets/project2/linkkar_2.png",
        "/project-image-assets/project2/linkkar_3.png",
        "/project-image-assets/project2/linkkar_4.png",
        "/project-image-assets/project2/linkkar_5.png",
        "/project-image-assets/project2/linkkar_6.png",
        "/project-image-assets/project2/linkkar_7.png",
        "/project-image-assets/project2/linkkar_8.png",
      ],
      style: "columns",
    },
    {
      id: "p3",
      title: "StudyMate",
      techUsed: ["NodeJS", "EJS", "Express JS", "MongoDB"],
      desc: `StudyMate, is an E-Library Project designed to empower students with a seamless e-learning experience. Offering a rich collection of Question Papers, Syllabus, and Notes spanning various college branches, StudyMate simplifies resource discovery. With intuitive filters, students can effortlessly navigate content by semester, year, and branch. The platform's secure foundation, powered by MongoDB ATLAS on the cloud, ensures data safety while enabling direct PDF interaction - whether for downloads or on-site viewing. For administrators, an easy-to-use interface facilitates efficient PDF management, ensuring the library remains updated. StudyMate is the embodiment of efficient e-learning, delivering knowledge at your fingertips.`,
      image: [
        "/project-image-assets/project3/studymate_1.png",
        "/project-image-assets/project3/studymate_2.png",
        "/project-image-assets/project3/studymate_3.png",
        "/project-image-assets/project3/studymate_4.png",
      ],
      style: "rows",
    },
  ];

  const SelectedProjectDetailData = ProjectDetailsData.find(
    (projData) => projData.id === projectId
  );

  if (!SelectedProjectDetailData) {
    throw json(
      { message: "Could not fetch project details for selected project!" },
      {
        status: 404,
      }
    );
  }

  const { title, techUsed, desc, image, style } = SelectedProjectDetailData;

  return {
    title,
    techUsed,
    desc,
    image,
    style,
  };
}
