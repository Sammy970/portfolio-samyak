import React from "react";
import { json, useLoaderData } from "react-router-dom";
import ProjectDetailCard from "../components/ProjectDetailCard/ProjectDetailCard";

const ProjectDetail = () => {
  const data = useLoaderData();

  const { title, techUsed, desc, image } = data;

  return (
    <ProjectDetailCard
      title={title}
      techUsed={techUsed}
      desc={desc}
      image={image}
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
      desc: `Hello`,
      image: [
        "/project-image-assets/project1/linkedinPostMaker_1.jpeg",
        "/project-image-assets/project1/linkedinPostMaker_2.jpeg",
        "/project-image-assets/project1/linkedinPostMaker_3.jpeg",
        "/project-image-assets/project1/linkedinPostMaker_4.jpeg",
      ],
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

  const { title, techUsed, desc, image } = SelectedProjectDetailData;

  return {
    title,
    techUsed,
    desc,
    image,
  };
}
