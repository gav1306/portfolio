import { v4 as uuidv4 } from "uuid";
import bookLibraryImage from "@/assets/projects/book_library.webp";
import countdownImage from "@/assets/projects/countdown.webp";
import formValidationImage from "@/assets/projects/form_validation.webp";
import investmentCalculatorImage from "@/assets/projects/investment_calculator.webp";
import movieBookerImage from "@/assets/projects/movie_booker.webp";
import projectManagerImage from "@/assets/projects/project_manager.webp";
import quoteGeneratorImage from "@/assets/projects/quote_generator.webp";
import taskManagerImage from "@/assets/projects/task_manager.webp";
import ticTacToeImage from "@/assets/projects/tic_tac_toe.webp";
import dummyDashboardImage from "@/assets/projects/dummy_dashboard.webp";
import dragNDropImage from "@/assets/projects/drag_n_drop.webp";
import flightSearchImage from "@/assets/projects/flight_search.webp";
import codeCompareImage from "@/assets/projects/code_compare.webp";

const PROJECTS = [
  {
    id: uuidv4(),
    title: "Flight Search",
    description: `A simple flight search application where users can put origin and destination to search flights.`,
    links: ["https://flight-search-gayatri.vercel.app"],
    img: flightSearchImage,
    year: 2024,
    company: "Side Project",
    tags: [
      "JavaScript",
      "TypeScript",
      "React.js",
      "Next.js",
      "React Hook Form",
      "Zod",
      "Shadcn",
      "Tailwind CSS",
    ],
  },
  {
    id: uuidv4(),
    title: "Drag and Drop (Workflow Creator)",
    description: `A canvas created using React Flow library where user can drag and drop cards and link those with each other.`,
    links: ["https://drag-n-drop-gayatri.vercel.app"],
    img: dragNDropImage,
    year: 2024,
    company: "Side Project",
    tags: [
      "JavaScript",
      "React.js",
      "React Flow",
      "React Hook Form",
      "Zod",
      "Shadcn",
      "Tailwind CSS",
    ],
  },
  {
    id: uuidv4(),
    title: "Project Manager",
    description: `Developed a Project Manager app using React.js. Users can create, manage, and delete projects with titles, descriptions, and due dates. Projects support task creation and deletion. Showcases skills in React.js and state management.`,
    links: ["https://project-manager-neon.vercel.app"],
    img: projectManagerImage,
    year: 2024,
    company: "Side Project",
    tags: ["JavaScript", "React.js", "Shadcn", "Tailwind CSS"],
  },
  {
    id: uuidv4(),
    title: "Dummy Dashboard",
    description: `A dummy dashboard where user can create multiple categories in which there can be multiple widgets with title and description. User can also manage visibility of widgets on the dashboard.`,
    links: ["https://dummy-dashboard-gayatri.vercel.app"],
    img: dummyDashboardImage,
    year: 2024,
    company: "Side Project",
    tags: [
      "JavaScript",
      "React.js",
      "React Hook Form",
      "Zod",
      "Shadcn",
      "Tailwind CSS",
    ],
  },
  {
    id: uuidv4(),
    title: "Code Compare",
    description: `A simple code or text compare tool where user can highlight text from output box and check if it is present in input box.`,
    links: ["https://code-compare-gayatri.vercel.app/"],
    img: codeCompareImage,
    year: 2024,
    company: "Side Project",
    tags: ["JavaScript", "React.js", "Shadcn", "Tailwind CSS"],
  },
  {
    id: uuidv4(),
    title: "Book Library",
    description: `Integrated an open-source API for book data, used React Router for navigation, and designed a responsive interface. Added detailed book info and incorporated error handling and loading states for a better user experience.`,
    links: ["https://book-library-green.vercel.app"],
    img: bookLibraryImage,
    year: 2024,
    company: "Side Project",
    tags: ["JavaScript", "React.js", "Shadcn", "Tailwind CSS", "React Router"],
  },
  {
    id: uuidv4(),
    title: "Investment Calculator",
    description: `A React.js app for calculating investment returns. Users input Initial Investment, Annual Investment, Expected Return, and Duration. The app calculates and displays yearly Investment Value, Interest, Total Interest, and Invested Capital.`,
    links: ["https://investment-calculator-gav.netlify.app"],
    img: investmentCalculatorImage,
    year: 2024,
    company: "Side Project",
    tags: ["JavaScript", "React.js", "CSS"],
  },
  {
    id: uuidv4(),
    title: "Task Manager",
    description: `Used RESTful APIs for seamless CRUD operations and data management. Integrated Shadcn for stunning, responsive UI components. Employed React Router for smooth navigation and dynamic routing. Incorporated form validation and user input handling for robust, error-free task management.`,
    links: ["https://task-manager-gayatri.netlify.app"],
    img: taskManagerImage,
    year: 2024,
    company: "Side Project",
    tags: [
      "JavaScript",
      "React.js",
      "Shadcn",
      "Tailwind CSS",
      "React Hook Form",
      "Zod",
    ],
  },
  {
    id: uuidv4(),
    title: "Form Validation",
    description: `A web app showcasing a multi-step form built with React Hook Form. It includes comprehensive form validation and robust error handling to ensure a smooth user experience.`,
    links: ["https://form-validation-two-woad.vercel.app"],
    img: formValidationImage,
    year: 2024,
    company: "Side Project",
    tags: [
      "JavaScript",
      "React.js",
      "Shadcn",
      "Tailwind CSS",
      "React Hook Form",
      "Zod",
    ],
  },
  {
    id: uuidv4(),
    title: "Movie Booking",
    description: `Allows users to select and book seats for a movie screening. Utilizes HTML, CSS, and JavaScript for an interactive, user-friendly interface. Users can pick a movie from a predefined list.`,
    links: ["https://movie-seat-booker.netlify.app"],
    img: movieBookerImage,
    year: 2024,
    company: "Side Project",
    tags: ["JavaScript", "CSS"],
  },
  {
    id: uuidv4(),
    title: "Countdown Game",
    description: `A countdown game app built with React.js. Users can enter their name and choose from cards with 1, 5, 10, or 15-second timers. The challenge is to stop the timer as close to the selected duration as possible. Scores between 1 and 100 are awarded based on the accuracy of the timing.`,
    links: ["https://countdown-game-sigma.vercel.app"],
    img: countdownImage,
    year: 2024,
    company: "Side Project",
    tags: ["JavaScript", "React.js", "CSS"],
  },
  {
    id: uuidv4(),
    title: "Tic Tac Toe",
    description: `A Tic Tac Toe game built with React.js that allows two users to enter their names and start a game. The app supports gameplay between the two users and includes a rematch feature for continued play.`,
    links: ["https://tic-tac-toe-gav.vercel.app/"],
    img: ticTacToeImage,
    year: 2024,
    company: "Side Project",
    tags: ["JavaScript", "React.js", "CSS"],
  },
  {
    id: uuidv4(),
    title: "Quote Generator",
    description: `Displays random quotes to users on each visit or button click, providing inspiration, motivation, or entertainment. Generates a new quote with each interaction. Allows users to share favorite quotes on social media.`,
    links: ["https://quote-share.netlify.app"],
    img: quoteGeneratorImage,
    year: 2024,
    company: "Side Project",
    tags: ["JavaScript", "CSS"],
  },
];

export default PROJECTS;
