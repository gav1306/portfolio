import { SectionHeading } from "../ui/heading";
import Section from "../ui/section";
import ProjectCard from "../ui/project-card";

import PROJECTS from "@/data/projects";
import { LinkSecondary } from "../ui/link";

const Projects = () => {
  return (
    <Section ariaLabel="Projects" id="projects">
      <SectionHeading>Projects</SectionHeading>
      <div>
        <ul className="group/list">
          {PROJECTS.slice(0, 4).map((item) => {
            return (
              <li key={item.id} className="mb-12">
                <ProjectCard {...item} />
              </li>
            );
          })}
        </ul>
        <div className="mt-12">
          <LinkSecondary ariaLabel="View Full Project Archive" href="/archive">
            View Full Project Archive
          </LinkSecondary>
        </div>
      </div>
    </Section>
  );
};

export default Projects;
