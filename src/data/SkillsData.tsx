import { FaReact, FaNodeJs, FaHtml5, FaSass } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import {
  SiRedux,
  SiCss3,
  SiNextdotjs,
  SiBootstrap,
  SiPython,
  SiDjango,
  SiFigma,
} from "react-icons/si";
import { AiFillAndroid } from "react-icons/ai";
import { ImGit } from "react-icons/im";

interface SkillsType {
  name: string;
  icon: any;
  link: string;
}

export const SkillsData: SkillsType[] = [
  {
    name: "JavaScript",
    icon: <IoLogoJavascript color='#000000dc' />,
    link: "https://www.javascript.com/",
  },

  {
    name: "React",
    icon: <FaReact color='#000000dc' />,
    link: "https://reactjs.org/",
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs color='#000000dc' />,
    link: "https://nextjs.org/",
  },

  {
    name: "Node.js",
    icon: <FaNodeJs color='#000000dc' />,
    link: "https://nodejs.org/",
  },

  {
    name: "HTML",
    icon: <FaHtml5 color='#000000dc' />,
    link: "https://www.w3schools.com/html/",
  },
  {
    name: "CSS",
    icon: <SiCss3 color='#000000dc' />,
    link: "https://www.w3schools.com/css/",
  },

  {
    name: "Bootstrap",
    icon: <SiBootstrap color='#000000dc' />,
    link: "https://getbootstrap.com/",
  },  
  {
    name: "Figma",
    icon: <SiFigma color='#000000dc' />,
    link: "https://getbootstrap.com/",
  },
  // {
  //   name: "Material-Ui",
  //   icon: <SiMaterialui color='#000000dc' />,
  //   link: "https://mui.com/",
  // },
  {
    name: "Python",
    icon: <SiPython color='#000000dc' />,
    link: "https://www.w3schools.com/python/",
  },
  {
    name: "Django",
    icon: <SiDjango color="#000000dc" />,
    link: "https://www.w3schools.com/django/",
  },
  {
    name: "Git",
    icon: <ImGit color='#000000dc' />,
    link: "https://git-scm.com/",
  },

];
