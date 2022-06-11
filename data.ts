
import { Blogs, IProject, Service, Skill } from "./type";

import { RiComputerLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import { AiOutlineAntDesign, AiOutlineApi } from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/md";
import { BsCircleFill } from "react-icons/bs";


export const services:Service[] = [
    {
        Icon: RiComputerLine,
        title: "Frontend Development",
        about:
          "I can build a beautiful and scalable SPA using <b> HTML</b>,<b>CSS</b>, <b>React.js</b>, <b>Next.js</b> and <b>Jquery</b> ",
      },
      {
        Icon: FaServer,
        title: "Backend  Development",
        about:
          "handle database, server, api using <b>Express </b> & other popular frameworks",
      },
      {
        Icon: AiOutlineApi,
        title: "API Development",
        about:
          "I can develop robust  REST API using <b>Node API</b> ",
      },
      // {
      //   Icon: MdDeveloperMode,
      //   title: "Competitive Coder",
      //   about: "a daily problem solver in <b>HackerRank</b>  and <b>Leet Code</b> ",
      // },
      
      {
        Icon: RiComputerLine,
        title: "Figma & PSD to HTML ",
        about:
          "Convert Figma & PSD to html template using <b> HTML</b>,<b>CSS</b>, <b>SASS</b>, <b>Bootstrap</b>,<b>Jquery</b> & other popular frameworks",
      },
      {
        Icon: RiComputerLine,
        title: "Wordpress Customization",
        about:
          "Create lucrative & high performance wordpress website using any kind of  <b> Theme & Page Builder</b>",
      },
      {
        Icon: AiOutlineAntDesign,
        title: "Electrical Circuit Design",
        about:
          "High performance Circuit Design using <b>Autocade</b>  and  <b>Scratch Up</b> ",
      },
    ];
    
  
export const languages: Skill[] = [
  // {
  //   Icon: BsCircleFill,
  //   name: "Python",
  //   level: "45",
  // },
  {
    Icon: BsCircleFill,
    name: "Java Script",
    level: "90",
  },
  {
    Icon: BsCircleFill,
    name: "TypeScript",
    level: "70",
  },
  {
    Icon: BsCircleFill,
    name: "React ",
    level: "90",
  },
  {
    Icon: BsCircleFill,
    name: "React Query ",
    level: "70",
  },
  {
    Icon: BsCircleFill,
    name: "Next ",
    level: "60",
  },
  // {
  //   Icon: BsCircleFill,
  //   name: "React Native",
  //   level: "40",
  // },
  {
    Icon: BsCircleFill,
    name: "Jquery",
    level: "70",
  },
  {
    Icon: BsCircleFill,
    name: "Node",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "Express",
    level: "90",
  },
  {
    Icon: BsCircleFill,
    name: "MongoDB",
    level: "90",
  },
];

export const tools: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "git",
    level: "85",
  },
  {
    Icon: BsCircleFill,
    name: "Firebase",
    level: "65",
  },
  {
    Icon: BsCircleFill,
    name: "Netlify",
    level: "85",
  },
  {
    Icon: BsCircleFill,
    name: "Figma",
    level: "85",
  },
  {
    Icon: BsCircleFill,
    name: "Photoshop",
    level: "45",
  },
  {
    Icon: BsCircleFill,
    name: "Illustrator",
    level: "60",
  },
  {
    Icon: BsCircleFill,
    name: "Framer",
    level: "45",
  },
];

export const projects: IProject[] = [
  
  {
    id:1,
    name: "Manufacture App",
    image_path: "/images/new_img/manufacture_app.png",
    deployed_url: "https://assignment-12-ab83a.web.app/",
    github_client_side: "https://github.com/iqbalhossan99/Manufacturer-Website-Client-Side",
    github_server_side: "https://github.com/iqbalhossan99/Manufacturer_Website_Server_Side",
    category: ["react", "mongo", "node"],
    description:
    ` ● Visit beautiful Global Manufacturer and without
      login/register not possible to make order it, review it as
      users. 
      ● Dashboard orders are stored in the database, make
      payment and you may delete it as users.  </br>
      ● Admin handles all users’ orders, he/she updates status and
      deletes it, adds parts/products, and also admin makes
      another admin. `,
    key_techs: ["React", "React Query", "Firebase Auth", "Stripe Payment Method","JWT", "Node API", "Express", "MongoDB",],
  }, 
  {
    id:2,
    name: "WareHouse App",
    image_path: "/images/new_img/warehouse.jpg",
    deployed_url: "https://warehouse-management-f437e.web.app/",
    github_client_side: "https://github.com/iqbalhossan99/Eletronics_WareHouse_Client_Side",
    github_server_side: "https://github.com/iqbalhossan99/Eletronics_WareHouse_Server_Side",
    category: ["react", "mongo", "node"],
    description:
    `● Beautiful Electronics warehouse visit and after login/register
    you can stock items quantity and also deliver on the inventory
    page. \n
    ● Add items to the Add item page with your name which is stored
    in MongoDB.\n
    ● Manage your items on my item page and you can delete them
    with confirmation.`,
    key_techs: ["React", "React Query", "Firebase Auth", "Stripe Payment Method","JWT", "Node API", "Express", "MongoDB",],
  },
  {
    id:3,
    name: "Netflix Clone",
    image_path: "/images/new_img/netflix.jpg",
    deployed_url: "",
    github_client_side: "https://github.com/Next-Hero/Mern-Netflix",
    github_server_side: "https://github.com/Next-Hero/Mern-Netflix/tree/main/api",    
    category: ["react", "mongo", "node"],
    description:
      'Full(almost) Functional Netflix replica where one can login with his/her login info to enjoy. User can like a video,comment on a video & Much More. </br> Admin would monetize new user, make admin, add series, etc on the admin dashboard.',
    key_techs: ["React", "React Query", "Firebase Auth","JWT", "Node API", "Express", "MongoDB",],
  },
  {
    id:4,
    name: "Developer Portfolio",
    image_path: "/images/new_img/portfolio_iqbal99.png",
    deployed_url: "",
    github_client_side: "https://github.com/iqbalhossan99/Portfolio_Of_Iqbal_Hossan",
    github_server_side: "",    
    category: ["react", "next"],
    description:
      '',
    key_techs: ["React", "Next", "TypeScript"],
  },
  
];


export const blogs: Blogs[]=[
  {id:1,
    title:"fdsf",
    description:"",
    image_path: "/images/algoVisual.png",

  }
]