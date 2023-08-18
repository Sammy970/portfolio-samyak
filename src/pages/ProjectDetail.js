import React from "react";
import { json, useLoaderData } from "react-router-dom";
import ProjectDetailCard from "../components/ProjectDetailCard/ProjectDetailCard";

const ProjectDetail = () => {
  const data = useLoaderData();

  const { title, techUsed } = data;

  return <ProjectDetailCard title={title} techUsed={techUsed} />;
};

export default ProjectDetail;

export function loader({ params }) {
  const projectId = params.projectId;

  const ProjectDetailsData = [
    {
      id: "p1",
      title: "LinkedIn Post Maker",
      techUsed: "ReactJS| Tailwind CSS | Express JS | OpenAI API",
    },
    {
      id: "p2",
      title: "Link - Kar",
      techUsed: "ReactJS| Chakra UI | Express JS | MongoDB | NodeJS | API",
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

  const { title, techUsed } = SelectedProjectDetailData;

  return {
    title,
    techUsed,
  };
}
