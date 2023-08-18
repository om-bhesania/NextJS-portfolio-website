import { ImGithub, ImLinkedin } from "react-icons/im";
import { FaTwitter } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";

interface LinksType {
  title: string;
  icon: any;
  link: string;
}

export const LinksData: LinksType[] = [
  {
    title: "GitHub",
    icon: <ImGithub color='#000000dc' />,
    link: "https://github.com/om-bhesania",
  },
  {
    title: "LinkedIn",
    icon: <ImLinkedin color='#000000dc' />,
    link: "https://www.linkedin.com/in/om-bhesania",
  },
  {
    title: "Twitter",
    icon: <FaTwitter color='#000000dc' />,
    link: "https://twitter.com/om_bhesania",
  },
  {
    title: "Instagram",
    icon: <SiInstagram color='#000000dc' />,
    link: "https://www.instagram.com/om_bhesania",
  },
];
