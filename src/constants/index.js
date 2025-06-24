import project1 from "../assets/images/project1.png";
import project3 from "../assets/images/project3.png";

export const HERO_CONTENT = `I am an enthusiastic developer with a solid foundation in full-stack development. My experience ranges from front-end technologies like React.js to back-end technologies such as Spring Boot, MySQL, and MongoDB. I look forward to applying my skills to the development of innovative and user-centric applications while continuously learning and growing in the tech industry.`;

export const ABOUT_TEXT = `I am an explorative person with a passion for creating optimized, user-friendly web applications. As a full-stack developer, I work with technologies like React, Next.js, Node.js, MySQL, PostgreSQL, Spring Boot, and MongoDB. My journey began with a curiosity to understand how things work, and I am constantly learning in this ever-evolving tech landscape. 

I love experimenting with new technologies and taking on challenging projects. When I'm not coding, I enjoy sports activities and staying updated on the latest tech trends to stay ahead in the game. My ultimate goal is to contribute to innovative solutions that make a meaningful impact.`;

const PROJECTS = [
  {
    title: "Vegan Recipe Application",
    image: project1,
    imageWidth: 300,
    imageHeight: 300,
    description:
      "A full-stack web application that helps users calculate their BMI and daily caloric needs, then plan balanced vegan meals to meet those goals. Users can search and add plant-based foods via the Spoonacular API, while an AI-powered vegan chatbot (powered by Google Gemini) assists with personalized meal planning. Built with React and Tailwind CSS on the frontend, and Java + Spring Boot (Dockerized) on the backend, with Firebase integration for data management.",
    technologies: ["React", "Tailwind CSS", "java", "SpringBoot", "Docker", "Firebase", "Spoonacular-API", "Google Gemini"],
    liveUrl: "https://vegan-meal-prep.vercel.app/login",
  },
  {
    title: "Weather Application",
    image: project3,
    imageWidth: 150,
    imageHeight: 150,
    description:
      "A sleek Android weather application built using Java and XML in Android Studio, featuring a clean and intuitive user interface. It fetches real-time weather data using the OpenWeather API, providing users with current conditions, temperature, humidity, and more. Designed with attention to UI/UX for a smooth and modern mobile experience.",
    technologies: ["XML", "Java", "Android Studio"],
  },
];

export default PROJECTS;

export const CONTACT ={
  address: "Sec-111, Mohali, Punjab", 
  email: "dubeyvedant189@gmail.com",
  phone: "+91 8685039694",
  
};