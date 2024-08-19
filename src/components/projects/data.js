import bookLibraryImage from "@/assets/projects/book_library.png";
import countdownImage from "@/assets/projects/countdown.png";
import formValidationImage from "@/assets/projects/form_validation.png";
import investmentCalculatorImage from "@/assets/projects/investment_calculator.png";
import movieBookerImage from "@/assets/projects/movie_booker.png";
import projectManagerImage from "@/assets/projects/project_manager.png";
import quoteGeneratorImage from "@/assets/projects/quote_generator.png";
import taskManagerImage from "@/assets/projects/task_manager.png";
import ticTacToeImage from "@/assets/projects/tic_tac_toe.png";

const data = [
  {
    id: 1,
    title: "Drag and Drop (Workflow Creator)",
    link: "https://drag-n-drop-gayatri.vercel.app",
    description: `A canvas created using React Flow library where user can drag and drop cards and link those with each other.`,
    img: "",
    tags: ["JavaScript", "React.js", "React Flow", "React Hook Form", "Zod", "Shadcn", "Tailwind CSS"],
  },
   {
    id: 2,
    title: "Dummy Dashboard",
    link: "https://dummy-dashboard-gayatri.vercel.app",
    description: `A dummy dashboard where user can create multiple categories in which there can be multiple widgets with title and description. User can also manage visibility of widgets on the dashboard.`,
    img: "",
    tags: ["JavaScript", "React.js", "React Hook Form", "Zod", "Shadcn", "Tailwind CSS"],
  },
  {
    id: 3,
    title: "Project Manager",
    link: "https://project-manager-neon.vercel.app",
    description: `Developed a Project Manager app using React.js. Users can create, manage, and delete projects with titles, descriptions, and due dates. Projects support task creation and deletion. Showcases skills in React.js and state management.`,
    img: projectManagerImage,
    tags: ["JavaScript", "React.js", "Shadcn", "Tailwind CSS"],
  },
  {
    id: 4,
    title: "Book Library",
    link: "https://book-library-green.vercel.app",
    description: `Integrated an open-source API for book data, used React Router for navigation, and designed a responsive interface. Added detailed book info and incorporated error handling and loading states for a better user experience.`,
    img: bookLibraryImage,
    tags: ["JavaScript", "React.js", "Shadcn", "Tailwind CSS", "React Router"],
  },
  {
    id: 5,
    title: "Investment Calculator",
    link: "https://investment-calculator-gav.netlify.app",
    description: `A React.js app for calculating investment returns. Users input Initial Investment, Annual Investment, Expected Return, and Duration. The app calculates and displays yearly Investment Value, Interest, Total Interest, and Invested Capital.`,
    img: investmentCalculatorImage,
    tags: ["JavaScript", "React.js", "CSS"],
  },
  {
    id: 6,
    title: "Task Manager",
    link: "https://task-manager-gayatri.netlify.app",
    description: `Used RESTful APIs for seamless CRUD operations and data management. Integrated Shadcn for stunning, responsive UI components. Employed React Router for smooth navigation and dynamic routing. Incorporated form validation and user input handling for robust, error-free task management.`,
    img: taskManagerImage,
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
    id: 7,
    title: "Form Validation",
    link: "https://form-validation-two-woad.vercel.app",
    description: `A web app showcasing a multi-step form built with React Hook Form. It includes comprehensive form validation and robust error handling to ensure a smooth user experience.`,
    img: formValidationImage,
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
    id: 8,
    title: "Movie Booking",
    link: "https://movie-seat-booker.netlify.app",
    description: `Allows users to select and book seats for a movie screening. Utilizes HTML, CSS, and JavaScript for an interactive, user-friendly interface. Users can pick a movie from a predefined list.`,
    img: movieBookerImage,
    tags: ["JavaScript", "CSS"],
  },
  {
    id: 9,
    title: "Countdown Game",
    link: "https://countdown-game-sigma.vercel.app",
    description: `A countdown game app built with React.js. Users can enter their name and choose from cards with 1, 5, 10, or 15-second timers. The challenge is to stop the timer as close to the selected duration as possible. Scores between 1 and 100 are awarded based on the accuracy of the timing.`,
    img: countdownImage,
    tags: ["JavaScript", "React.js", "CSS"],
  },
  {
    id: 10,
    title: "Tic Tac Toe",
    link: "https://tic-tac-toe-gav.vercel.app/",
    description: `A Tic Tac Toe game built with React.js that allows two users to enter their names and start a game. The app supports gameplay between the two users and includes a rematch feature for continued play.`,
    img: ticTacToeImage,
    tags: ["JavaScript", "React.js", "CSS"],
  },
  {
    id: 11,
    title: "Quote Generator",
    link: "https://quote-share.netlify.app",
    description: `Displays random quotes to users on each visit or button click, providing inspiration, motivation, or entertainment. Generates a new quote with each interaction. Allows users to share favorite quotes on social media.`,
    img: quoteGeneratorImage,
    tags: ["JavaScript", "CSS"],
  },
];

export default data;
