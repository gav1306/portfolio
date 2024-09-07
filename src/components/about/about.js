import { LinkPrimary, LinkSecondary } from "../ui/link";
import { SectionHeading } from "../ui/heading";
import Section from "../ui/section";

const About = () => {
  return (
    <Section ariaLabel="About" id="about">
      <SectionHeading>About</SectionHeading>
      <div>
        <p className="mb-4">
          I began my journey into web development at the end of 2023, diving
          into the world of frontend technologies with a focus on mastering the
          fundamentals before moving on to the backend. My adventure started
          with JavaScript, and from there, I quickly picked up React.js,
          building a solid foundation in creating dynamic and interactive web
          applications.
        </p>
        <p className="mb-4">
          To sharpen my skills, I developed numerous small logical applications
          using vanilla JavaScript. These projects allowed me to understand the
          core principles and intricacies of the language. As I progressed, I
          took on more complex challenges with React.js, crafting sophisticated
          applications that showcased my growing expertise.
        </p>
        <p className="mb-4">
          Beyond coding, I find immense joy in reading books and listening
          music, these side activities keep me balanced and motivated.
        </p>
      </div>
      <div className="mt-12">
        <LinkSecondary
          ariaLabel="View Full Résumé"
          target="_blank"
          href="https://bit.ly/resume_v6"
        >
          View Full Résumé
        </LinkSecondary>
      </div>
    </Section>
  );
};

export default About;
