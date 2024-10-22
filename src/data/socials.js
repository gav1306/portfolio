import { v4 as uuidv4 } from "uuid";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faMobile } from "@fortawesome/free-solid-svg-icons";

const SOCIALS = [
  {
    id: uuidv4(),
    name: "GitHub",
    link: "https://github.com/gav1306?tab=repositories",
    icon: faGithub,
  },
  {
    id: uuidv4(),
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/gayatri-patil-7b2a671b9/",
    icon: faLinkedin,
  },
  {
    id: uuidv4(),
    name: "Twitter",
    link: "https://x.com/dev_gav05",
    icon: faTwitter,
  },
  {
    id: uuidv4(),
    name: "Medium",
    link: "https://medium.com/@gavk30",
    icon: faMedium,
  },
  {
    id: uuidv4(),
    name: "E-Mail",
    link: "mailto:gavk30@gmail.com",
    icon: faEnvelope,
  },
  {
    id: uuidv4(),
    name: "Phone",
    link: "tel:+918879490339",
    icon: faMobile,
  },
];

export default SOCIALS;
