
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
      users. </br>
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
    page. </br>
    ● Add items to the Add item page with your name which is stored
    in MongoDB.</br>
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
      '● Full(almost) Functional Netflix replica where one can login with his/her login info to enjoy.</br> ●  User can like a video,comment on a video & Much More. </br>●  Admin would monetize new user, make admin, add series, etc on the admin dashboard.',
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
  { 
    id:1,
    title:"What are semantic tags in html?",
    description:"Semantic tags are meaningful tags in html, each of which carries a meaning. Which are introduced in html5. It helps a developer to write code easily and better understand the code later. And semantic tags play a very effective role in SEO of an application or web page. There are some HTML5 tags like header, footer, nav, main, etc. why we uses this tag for exaple By header tag we can easily understand that it means the header part of the application.",
    image_path: "https://media.istockphoto.com/photos/five-wooden-cubes-with-word-html5-on-white-stone-like-board-view-from-picture-id1271755936?b=1&k=20&m=1271755936&s=170667a&w=0&h=mz52UKh6ITHL_gQpiOU94ImcCvfyinTjxibC-JOAwtA=",

  },
  { 
    id:2,
    title:"What is the purpose of Article, div, section, nav, aside?",
    description:`<strong>Article: </strong> We use article tage to wrap our main content like a news article, blog post, forum post, or comment on article or sidebar widgets having a heading. It’s easy to read and uderstant for developer friendly and also give us awesome seo experience.

    <strong>Div:</strong>  Div tag is primarily use to group similar content together. It’s define a division or a section in html document. So we can easily style it by using the class or id attribute. 
    We also can put together the header, nav, sections, and footer of page in an individual div tag. 
    
    <strong>Section:</strong> Section tag is a html5 semantic tag. It’s defines the section of documents such as chapters, headers, or any other sections. The section tag divides the content into section and subsections As mentioned above, <section> is a generic sectioning element, and should only be used if there isn't a more specific element to represent it. As an example, a navigation menu should be wrapped in a <nav> element.but a list of search results or a map display and its controls don't have specific elements, and could be put inside a <section>.
    
    <strong> Nav:</strong> A  nav tag should be used for major navigational blocks (menus). We should use more than one nav blocks in an HTML5 page but it is better to use it for the primary menu.
    
    <strong>Aside:</strong> An aside tag is used for additional content. For example, an aside can be used for sidebar, comments section, pull-quotes, glossary, advertisements, footnote etc.`,
    image_path: "https://media.istockphoto.com/photos/word-cloud-tag-cloud-vector-graphic-picture-id547245690?b=1&k=20&m=547245690&s=170667a&w=0&h=xSQrh0kqnNGMN7PwVCiqKiaRVAeVKm7YZFesFD0jtEo=",

  },
  { 
    id:3,
    title:"Why will you use Meta tag?",
    description:`The <meta> tag defines metadata about an HTML document. And It’s always go inside the <head> element. This tag is used to provide such additional information specify character set, page description, keywords, author of the document, and viewport settings.
    And It will not be displayed on the page, but is machine parsable.
    In general It is used by browsers (how to display content or reload page), search engines (keywords), and other web services.
    There is a method to let web designers take control over the viewport (the user's visible area of a web page).
    `,
    image_path: "https://media.istockphoto.com/photos/closeup-of-decryption-of-html-source-code-picture-id134141640?k=20&m=134141640&s=612x612&w=0&h=z5Vz_2JwKeAP4r7kbX_lvsfZVrNSrHcUnoJIGhhTdys=",

  },
  { 
    id:4,
    title:"What is the difference between inline, inline-block, and block?",
    description:`Inline: Inline elements don’t start on a new line, they appear on the same line as the content and tags beside them. the major difference is that display: inline Don’t allows to set a width and height and you cad add margin or padding only left and right side on the element. Some examples of inline tags are <span> , <a>, <strong>, and <img> tags.
    Inline-block:  Inline elements don’t start on a new line, they appear on the same line as the content and tags beside them. the core difference is that display: inline-block allows to set a width and height and you can add margin or padding all four  of side on the element. It’s commonly use for using inline-block is for creating navigation links horizontally, 
    Block: A block element always starts on a new line, and allow to  the horizontal space left and right on the web page. You can add margins and padding on all four sides of any block element — top, right, left, and bottom. Some example of block elements are <p>, all of head tage, <div> and <section>, etc.
    `,
    image_path: "https://images.unsplash.com/photo-1529101091764-c3526daf38fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW5saW5lJTIwaHRtbCUyMGlubGluZWJsb2NrfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",

  },
 
]