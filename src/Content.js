// import images
import Hero_person from "./assets/images/Hero/person.png";

import sketch from "./assets/images/Skills/sketch.png";
import ps from "./assets/images/Skills/html.png";
import reactjs from "./assets/images/Skills/react.png";
import nodejs from "./assets/images/Skills/node.png";
import python from "./assets/images/Skills/python.png";

import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo3 from "./assets/images/Services/logo3.png";

import project1 from "./assets/images/projects/port.jpg";
import project2 from "./assets/images/projects/utility.png";
import project3 from "./assets/images/projects/word.png";
import person_project from "./assets/images/projects/profile.png";

import avatar1 from "./assets/images/Testimonials/avatar1.png";
import avatar2 from "./assets/images/Testimonials/avatar2.png";
import avatar3 from "./assets/images/Testimonials/avatar3.png";
import avatar4 from "./assets/images/Testimonials/avatar4.png";

import Hireme_person from "./assets/images/Hireme/image.png";
import Hireme_person2 from "./assets/images/Hireme/person2.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "Web Developer",
    firstName: "MD",
    LastName: "FAIZ",
    btnText: "Hire Me",
    image: Hero_person,
    hero_content: [
      {
        count: "2+",
        text: "Years of Experinse in Web development",
      },
      {
        count: "  10+",
        text: "Projects Worked in my career",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    skills_content: [
     
      {
        name: "Node js",
        para: "Learned node js",
        logo: nodejs,
      },
      {
        name: "HTML",
        para: "Learned HTML for the structure of the webpages and have a experiance of 2+ years",
        logo: ps,
      },
      {
        name: "React js",
        para: "Learned Reacjs for the complete frontend development ",
        logo: reactjs,
      },
      {
        name: "java",
        para: "learned a high level programing language, also learned opps concept",
        logo: sketch,
      },
      {
        name: "Python",
        para: "Python simple and easy to learn language",
        logo: python,
      },
      
     
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "",
    subtitle: "WHAT ALL I LEARNED",
    service_content: [
      {
        title: "Web Development",
        para: "I am a professional Web Development has an experiance of more than 2+years, i am comfortable in front end development, and worked over 7+ projects.",
        logo: services_logo1,
      },
      {
        title: "React",
        para: "I am a professional Front-end developer and has a good command on the react worked over 10+ projects including React once also",
        logo: services_logo2,
      },
      {
        title: "Java",
        para: "I am a professional Java Programmer, have a good grip on the OOP'S concept",
        logo: services_logo3,
      },
    ],
  },
  Projects: {
    title: "Projects",
    subtitle: "MY CREATION",
    image: person_project,
    project_content: [
      {
        title: "My Portfolio",
        image: project1,
      },
      {
        title: "WebSite Utilityhub clone",
        image: project2,
      },
      {
        title: "Word Guessing Game",
        image: project3,
      },
    ],
  },
 
  
  Hireme: {
    title: "Hire Me",
    subtitle: "FOR YOUR PROJECTS",
    image1: Hireme_person,
    image2: Hireme_person2,
    para: "Hire for the Full time or FreeLancer for your Web Development Projects.",
    btnText: "Hire Me",
  },
  Contact: {
    title: "Contect Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "mdfaiz589@gmail.com.com",
        icon: GrMail,
        link: "mailto:mdfaiz589@gmail.com",
      },
      {
        text: "+91 7677588275",
        icon: MdCall,
        link: "https://wa.me/7677588275",
      },
      {
        text: "mdfaiz589",
        icon: BsInstagram,
        link: "https://www.instagram.com/mdfaiz589/",
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2023",
  },
};
