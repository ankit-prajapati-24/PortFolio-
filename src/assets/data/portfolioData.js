import portfolioImg01 from "../images/lovelyrics.png";
import portfolioImg10 from "../images/ninja-notes.jpeg";
import portfolioImg02 from "../images/portfolio-02.jpg";
import portfolioImg03 from "../images/portfolio-03.jpg";
import portfolioImg04 from "../images/portfolio-04.jpg";
import portfolioImg05 from "../images/weatherapp.png";
import portfolioImg06 from "../images/portfolio-06.jpg";
import portfolioImg07 from "../images/portfolio-07.jpg";
import portfolioImg08 from "../images/portfolio-08.jpg";
import portfolioImg09 from "../images/quizkpay.png";
import portfolio  from '../images/portfolio.png'
import chatapp  from '../images/chatapp.png'
import magicslide  from '../images/magicslide.png'

const portfolios = [
  {
    id: "01",
    imgUrl: portfolioImg01,
    category: "MERN Stack",
    title: "Love Lyrics",
    description:
      "A full-stack music website that allows users to explore, store, and manage their favorite tracks. It integrates user authentication and provides a seamless music experience.",
    technologies: ["React", "Tailwind CSS", "Node.js", "MongoDB"],
    siteUrl: "https://love-lyrics-frontend.vercel.app/",
  },
  {
    id: "02",
    imgUrl: chatapp,
    category: "MERN Stack",
    title: "Chat App",
    description:
      "A real-time chat application enabling users to exchange text and images. Built with Socket.io for seamless communication and MongoDB for data storage.",
    technologies: ["React", "Socket.io", "Node.js", "MongoDB"],
    siteUrl: "https://chatapp-sand.vercel.app/",
  },
//   {
//     id: "03",
//     imgUrl: "https://th.bing.com/th/id/OIP.BEVYrM6YIsIMcFxB15dV-QHaEK?rs=1&pid=ImgDetMain",
//     category: "Web Development",
//     title: "Clinic Appointment Booking App",
//     description:"A full-stack Clinic Appointment Booking App enabling patients to book, reschedule, and manage appointments seamlessly while allowing doctors to manage their schedules efficiently.",
//     technologies: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
//     siteUrl: "https://clinic-app-eight.vercel.app/",
// },
{
  id: "12",
  imgUrl: portfolioImg09, // Replace with the correct image
  category: "Full Stack Development",
  title: "QuickPay - Digital Token System",
  description:
    "QuickPay is a secure and efficient digital token system designed to facilitate seamless transactions. Built using the MERN stack for the frontend and Spring Boot for backend services, it ensures fast and reliable payment processing with a user-friendly interface.",
  technologies: ["React", "Node.js", "MongoDB", "Spring Boot", "Tailwind CSS"],
  siteUrl: "https://quick-pay-pied.vercel.app/",
  githubSite: "https://github.com/your-github-profile/quickpay-token-system"
}
,
  {
    id: "05",
    imgUrl: portfolio,
    category: "Web Development",
    title: "Portfolio Website",
    description:
      "A personal portfolio website showcasing my skills, experience, and projects. Built with a clean UI and optimized for performance.",
    technologies: ["HTML", "CSS", "JavaScript"],
    siteUrl: "https://your-portfolio-url.com",
  },
  {
    id: "07",
    imgUrl: portfolioImg05,
    category: "Web Development",
    title: "Weather App",
    description:
      "A JavaScript-based weather application that fetches real-time weather data using APIs, providing a simple and user-friendly experience.",
    technologies: ["HTML", "CSS", "JavaScript", "APIs"],
    siteUrl: null,
    githubSite: "https://ankit-prajapati-24.github.io/Weather-App/",
  },
  {
    id: "08",
    imgUrl: magicslide,
    category: "Game Development",
    title: "Magic Slide",
    description:
      "Magic Slide is a fun and interactive puzzle game built with React. Players need to slide tiles to arrange them in the correct order. The game challenges logical thinking and problem-solving skills.",
    technologies: ["React", "JavaScript", "CSS"],
    siteUrl: "https://magic-slide.vercel.app/",
    // githubSite: "https://github.com/your-github-profile/magic-slide"
}
];

export default portfolios;
