import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
interface ProjectCardProps {
  id: string;
  title: string;
  category: string;
  image: string;
  href: string;
  description?: string;
}
const ProjectCard = ({
  id,
  title,
  category,
  image,
  href,
  description,
}: ProjectCardProps) => {
  return;
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="block no-underline hover:no-underline"
  >
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <div className="aspect-[16/9] relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="p-6">
        <span className="text-sm text-[#FF6900] font-medium mb-2 block">
          {category}
        </span>
        <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
        {description && (
          <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>
        )}
        <Button
          as={Link}
          to={`/portfolio/${id}`}
          variant="outline"
          size="small"
        >
          View Project
        </Button>
      </div>
    </div>
  </a>;
};
export default ProjectCard;
