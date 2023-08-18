import React from "react";
import { json, useLoaderData } from "react-router-dom";
import ProjectDetailCard from "../components/ProjectDetailCard/ProjectDetailCard";

const ProjectDetail = () => {
  const data = useLoaderData();

  const { title } = data;

  return <ProjectDetailCard title={title} />;
};

export default ProjectDetail;

export function loader({ params }) {
  const projectId = params.projectId;

  const ProjectDetailsData = [
    {
      id: "p1",
      title: "LinkedIn Post Maker",
    },
    {
      id: "p2",
      title: "Link - Kar",
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

  const { title } = SelectedProjectDetailData;

  return {
    title,
  };
}
