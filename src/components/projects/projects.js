import { LinkSecondary } from "../ui/link";
import { SectionHeading } from "../ui/heading";
import Section from "../ui/section";
import ProjectCard from "../ui/project-card";

import data from "./data";

const Projects = () => {
  return (
    <Section ariaLabel="Projects" id="projects">
      <SectionHeading>Projects</SectionHeading>
      <div>
        <ul className="group/list">
          {data.map((item) => {
            return (
              <li key={item.id} className="mb-12">
                <ProjectCard {...item} />
              </li>
            );
          })}
        </ul>
      </div>
    </Section>
  );
};

export default Projects;
