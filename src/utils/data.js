import {
  IoLogoJavascript,
  IoLogoHtml5,
  IoLogoReact,
  IoLogoNodejs,
} from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";

export const PROFILE_DATA = {
  profilePicture: "https://via.placeholder.com/250",
  name: "DİJİTART DEVELOPERS",
  tagline: `Dijitart Developers delivers high-quality React-based development services, crafting modern and engaging web applications tailored to your needs.
            We provide expert consulting for building robust e-commerce systems and impactful digital content strategies.
            A unique community and academy for developers is coming soon..`,
  jobTitle: "More than just a company",
  location: "30 N Gould St Ste R Sheridan, WY 82801 USA",
  yearsOfExperience: 4,
  skills: [
    "React.js",
    "JavaScript",
    "HTML",
    "CSS",
    "Git",
    "Bootstrap",
    "Redux",
    "Node.js",
    "RESTful APIs",
  ],
  email: "dijitartdevelopers@gmail.com",
  paypal: "Paypal will be available soon"
};

export const SKILLS = [
  {
    id: "01",
    icon: IoLogoJavascript,
    title: "JavaScript",
    comment: `A versatile, open-source programming language that powers interactive and dynamic web experiences.
      Supported by a vast, ever-growing ecosystem of libraries and frameworks, enabling rapid development and innovation.
      Continuously evolving through contributions from a global developer community.`,
  },
  {
    id: "02",
    icon: IoLogoHtml5,
    title: "HTML",
    comment: `HTML is the core of every web project. We build strong, semantic HTML structures that are crucial for both SEO and accessibility. Using the right tags, makes us sure search engines can easily understand the content hierarchy, boosting a site's ranking. This clean code also ensures the site is accessible to everyone, including those who use screen readers.`,
  },
  {
    id: "03",
    icon: IoLogoReact,
    title: "React JS",
    comment: `React Enables the creation of fast, scalable, and interactive web applications with reusable components, real-time updates, and seamless user experiences across devices.`,
  },
  {
    id: "04",
    icon: IoLogoNodejs,
    title: "Node JS",
    comment: `Node.js our communities go-to choice for building scalable and efficient server-side applications. With its event-driven architecture and extensive ecosystem, I've built RESTful APIs, real-time chat applications, and more.`,
  },
  {
    id: "05",
    icon: SiMongodb,
    title: "MongoDB and PostgreSQL",
    comment: `MongoDB's flexible document-based structure and scalability make it an ideal choice for storing and managing data in modern web applications. MongoDB is extensively good in projects, ranging from small-scale applications to large-scale platforms. PostgreSQL, with its powerful querying capabilities and support for complex data types, has been my go-to relational database for projects requiring structured data storage and advanced analytics.
              PostgreSQL's strong community, scalability, and compatibility with modern frameworks make it ideal for both small projects and large, high-traffic applications.`,
  },
  {
    id: "06",
    icon: RiTailwindCssFill,
    title: "Tailwind CSS",
    comment: `Tailwind CSS has revolutionized the way developers approach front-end styling. Its utility-first approach allows for rapid building of responsive and beautifully designed interfaces without writing custom CSS.`,
  },
];

export const WORK_EXPERIENCE = [
  {
    id: "01",
    company: "Growing as a Community",
    position: "Becoming an Academy alltogether..",
    duration: "Community Building",
    description:
      "Community in Discord and other platforms to foster collaboration and knowledge sharing among developers.And Educational content creation together powered.",
  },
  {
    id: "02",
    company: "Dijitart Developers LLC",
    position: "Not just a Web Development",
    duration: "Web Development Through an Artistic Lens",
    description:
      "Developing responsive and interactive user interfaces for client projects using modern web technologies.",
  },
  {
    id: "03",
    company: "Digital Art and Development",
    position: "Content, Logo Design and Web Development",
    duration: "Content Creation",
    description:
      "Designing and developing user interfaces for web applications, focusing on usability and aesthetics. Collaborated closely with clients to understand their requirements and deliver customized solutions.",
  },
];

export const ABOUT_ME_DATA = {
  introduction: "Hi, I'm Tevfik, the founder of Dijitart Developers LLC and a React JS developer passionate about building engaging web applications and solving complex problems with code",
  background: "I successfully completed two long-term full-stack bootcamps in React MERN-PERN development, working on numerous projects. I took part in team collaborations that combined web development with e-commerce and SEO. Later, I founded Dijitart Developers LLC to provide services in this field.Over the past 4 years, I've gained valuable experience in Web Development, working on projects ranging from e-commerce websites to interactive dashboards.",
  skills: "I'm proficient in a variety of technologies including React.js, JavaScript, HTML, CSS, and Node.js. I'm also experienced in using version control systems like Git and working with RESTful APIs.",
  interests: "Outside of coding, I enjoy prepearing an academy and a community.",
  careerGoals: "In the future, Dijitart Developers LLC will be a center for many developers to collaborate and create innovative solutions..An academy will be established to nurture new talent in the field.",
  stats: {
    yearsOfExperience: '5+',
    numberOfProjects: 8,
    communityMembers: 14,
  },
};
