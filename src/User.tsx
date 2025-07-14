import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandTwitter,
} from "@tabler/icons-react";
import { title } from "process";
const Info = {
  name: "Md Razib Sarker",
  stack: ["Full Stack Developer", "Competitive Programmer"],
  bio: "I'm a passionate Full Stack Web Developer specialized in building efficient, scalable, and high-quality web applications. I focus on delivering seamless end-to-end solutions and always aim to create impactful, user-friendly digital experiences. Let's connect and build something amazing together!",
};

const ProjectInfo = [
  {
    title: "Vdemy",
    desc: `Vdemy is a modern, fully responsive online course-selling platform built     using the latest web technologies. Designed for both instructors and students,   Vdemy offers a seamless learning and teaching experience across all devices.
       The platform features secure user authentication with login, registration, and logout functionalities. Anyone can register as an instructor and create courses consisting of multiple modules, with each module containing multiple lessons. Once a course is published, it becomes available for students to browse and purchase. Students can register, buy courses, and access structured lessons within modules. The platform ensures smooth course progression and provides certificates of completion upon successfully finishing a course, signed by the respective instructor.
       Vdemy combines powerful functionality with a sleek, intuitive interface, making it easy to teach, learn, and grow—anytime, anywhere.
`,
    image: "https://i.ibb.co/5ggbFPjc/Screenshot-2025-07-14-at-16-55-11.png",
    live: true,
    technologies: [
      "Next Js",
      "Next Auth",
      "Next Cloudinary",
      "Strip",
      "Mongodb",
      "Tailwind",
      "Nodemailer",
      "Schadcn",
    ],
    link: "https://educonnect-five-delta.vercel.app",
    github: "https://github.com/Razib1998/educonnect",
  },
  {
    title: "StayVista",
    desc: `StayVista is a modern, fully responsive accommodation booking platform inspired by Airbnb, designed with a robust three-layer architecture for guests, hosts, and admins. Built for seamless usability across all devices, StayVista delivers a smooth and secure experience for both travelers and property owners.

Users can register as guests, and upon admin approval, they may upgrade to hosts and list their rooms for reservation. Guests can browse available rooms, view host details, check availability, and book accommodations through secure card payments. Bookings can be managed easily, with options to edit or cancel reservations as needed.

Admins have full control over the platform. They can manage user approvals, block users if necessary, and access comprehensive booking statistics for monitoring platform activity and performance.

StayVista combines powerful features with a sleek, intuitive interface—making it easy to list, discover, and reserve stays with confidence.`,
    image: "https://i.ibb.co/fzX1jp39/Screenshot-2025-07-14-at-16-55-38.png",
    live: false,
    technologies: [
      "React",
      "MongoDB",
      "Stripe",
      "Tailwind",
      "Headless Ui",
      "Firebase",
    ],
    link: "https://stayvista-flax.vercel.app",
    github: "https://github.com/Razib1998/STAY-VISTA",
  },
  {
    title: "Careear Hub",
    desc: `CareerHub is a modern, fully responsive job portal application designed to streamline the job search and application process. Built for flexibility and ease of use, CareerHub empowers users to discover job opportunities and manage their applications efficiently across all devices.

Users can browse detailed job listings and apply directly through the platform. After submitting an application, they can view the job details, edit their application if needed, or cancel it at any time—giving them full control over their job search journey.

With its intuitive interface and user-friendly features, CareerHub makes it easier than ever for job seekers to find and apply for positions that match their skills and interests.`,
    image: "https://i.ibb.co/Y40hZpJD/Screenshot-2025-07-14-at-17-55-33.png",
    live: false,
    technologies: ["React", "Firebase", "Tailwind", "MongoDB"],
    link: "https://github.com/Code-Mars/Spotify-Clone",
    github: "https://github.com/Code-Mars/Spotify-Clone",
  },
];

const SkillInfo = [
  {
    title: "Frontend",
    skills: [
      {
        title: "HTML",
        icon: "https://i.ibb.co/bMLWj8jm/HTML.png",
      },
      { title: "CSS", icon: "https://i.ibb.co/hvwhQQn/CSS.png" },
      {
        title: "JavaScript",
        icon: "https://i.ibb.co/cStPX9K7/Java-Script.png",
      },
      { title: "React JS", icon: "https://i.ibb.co/HDSpzwX1/React-JS.png" },
      { title: "Next JS", icon: "https://i.ibb.co/qY3Jt7qG/next-js.png" },
      { title: "Redux", icon: "https://i.ibb.co/M5BVK4cN/Redux.png" },
      { title: "Tailwind CSS", icon: "https://i.ibb.co/KpmTM8wN/tailwind.png" },
      {
        title: "Material UI",
        icon: "https://i.ibb.co/MkhY55Vc/Material-UI.png",
      },
      { title: "GraphQL", icon: "https://i.ibb.co/d0z3T5Yx/graphnql.png" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { title: "Node JS", icon: "https://i.ibb.co/WTbhG1B/Node-JS.png" },
      { title: "Express JS", icon: "https://i.ibb.co/CpDHGFvx/Express-JS.png" },
      { title: "Prisma ORM", icon: "https://i.ibb.co/Jw1304Dr/prisma.jpg" },
      { title: "MySQL", icon: "https://i.ibb.co/Ndj64Dhd/MySQL.png" },
      { title: "MongoDB", icon: "https://i.ibb.co/Ldw2sD1Z/MongoDB.png" },
      { title: "Firebase", icon: "https://i.ibb.co/B2Ng4JC7/Firebase.png" },
      {
        title: "PostgresSQL",
        icon: "https://i.ibb.co/twdHhpsv/Postgres-SQL.png",
      },
    ],
  },
  {
    title: "Languages",
    skills: [
      { title: "C++", icon: "https://i.ibb.co/HDJyZXjB/C.png" },
      { title: "Python", icon: "https://i.ibb.co/dJxKFJmS/python.png" },
      {
        title: "JavaScript",
        icon: "https://i.ibb.co/cStPX9K7/Java-Script.png",
      },
      { title: "TypeScript", icon: "https://i.ibb.co/vn1GQ7N/Type-Script.png" },
    ],
  },
  {
    title: "Tools",
    skills: [
      { title: "Git", icon: "https://i.ibb.co/DDpSH3wk/Git.png" },
      { title: "Github", icon: "https://i.ibb.co/HD6FFYrW/Github.png" },
      { title: "VS Code", icon: "https://i.ibb.co/gZHY6BnN/VS-Code.png" },
      { title: "Postman", icon: "https://i.ibb.co/hFLwL9Cs/Postman.png" },
      {
        title: "MongoDB Compass",
        icon: "https://i.ibb.co/wFRjv6V5/Mongo-DB-Compass.png",
      },
    ],
  },
];
const socialLinks = [
  { link: "https://github.com/Razib1998", icon: IconBrandGithub },
  {
    link: "https://www.linkedin.com/in/md-razib-sarker-5550a2300",
    icon: IconBrandLinkedin,
  },
  { link: "https://x.com/mdsarker143?s=21", icon: IconBrandTwitter },
];

const ExperienceInfo = [
  {
    role: "Web Instructor",
    company: "Programming Hero",
    date: "Oct 2023 - March 2025",
    desc: "As a web instructor at Programming Hero, my key responsibilities include guiding students through web development concepts, helping them debug code, and reviewing their assignments. I support students by answering questions, encouraging best practices, and providing clear, constructive feedback. I also stay engaged through mentorship, live sessions, and timely communication to ensure a smooth and effective learning experience.",
    skills: ["React JS", "Next JS", "Node JS", "MySQL", "MongoDB", "Redux"],
  },
];
const Slugs = [
  "typescript",
  "javascript",
  "react",
  "html5",
  "css3",
  "mongodb",
  "express",
  "prisma",
  "mysql",
  "amazonaws",
  "socket.io",
  "postgresql",
  "firebase",
  "vercel",
  "docker",
  "git",
  "github",
  "visualstudiocode",
  "figma",
];
export { Info, ProjectInfo, socialLinks, SkillInfo, ExperienceInfo, Slugs };
