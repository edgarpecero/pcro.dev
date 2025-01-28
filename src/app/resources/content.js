import { CustomeTechnicalDescription } from "@/components/CustomeTechnicalDescription";
import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Edgar",
  lastName: "Pecero",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Full Stack Developer",
  avatar: "/images/avatarOriginalSize.jpg",
  // location: "Puebla, Mexico", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Spanish",],
};

const newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about code, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/edgarpecero",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/edgarpecero",
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:edgarpecero7@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${'pcro.dev' || person.name}`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Full Stack Developer</>,
  subline: (
    <>
      I'm Edgar, a Software Developer at <InlineCode>EVIDEN</InlineCode> specializing in building robust and scalable web apps with expertise in React, Next.js, Java and Node.js.
    </>
  ),
};

const technicalSkills = {
  Technologies: ["JS", "TS", "React", "Next.js", "Node.js", "Springboot", "Java"],
  Cloud: ["AWS", "K8", "CI/CD", "GenAI", "IoT"],
};

const yearsOfExperience = () => {
  const start = 2021;
  const current = new Date().getFullYear();
  return current - start;
}

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
    sectionHeadline: "Skills",
    skills: technicalSkills
  },
  calendar: {
    display: true,
    link: "https://cal.com/edgar-pecero-xmt26h",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Edgar is a Full Stack Developer with {yearsOfExperience()}+ years of experience building scalable, high-performance web applications. His work spans React, Next.js, Java, and Node.js, delivering impactful solutions for companies like The Home Depot, DP World Tour, and Options Clearing Corporation (OCC).
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "EVIDEN",
        timeframe: "2023 - Present",

        role: "Fullstack Developer | React & Java | The Home Depot (Dic 2024 - Present)",
        achievements: [
          <>
            Led frontend development using React and proposed a refactor within one week of joining, reducing codebase size by 45% and improving app performance by 30%, resulting in a faster and more fluid user experience.
          </>,
          <>
            Automated GCP deployments using GitHub Actions, minimizing downtime and streamlining updates.
          </>,
        ],
        images: [],
      },
      {
        company: "",
        timeframe: "",
        role: "ServiceNow System Administrator | ServiceNow (Mar - Oct 2024)",
        achievements: [
          <>
            Managed Disney’s employee hardware upgrade platform, improving user satisfaction by 20% through an intuitive service catalog.
          </>,
          <>
            Automated workflows using JavaScript, boosting efficiency by 30% and reducing manual errors.
          </>,
        ],
        images: [],
      },
      {
        company: "",
        timeframe: "",
        role: "React Developer | Options Clearing Corporation (OCC) (Jul 2023 - March 2024)",
        achievements: [
          <>
            Built a React component library using TypeScript and Tailwind CSS, enabling cross-team collaboration and accelerating UI development.
          </>,
          <>
            Developed scalable interfaces for margin calculation tools, improving usability for end-users.
          </>,
          <>
            Optimized Java Spring Boot endpoints, enabling faster UI integration and supporting backend development.
          </>,
        ],
        images: [],
      },
      {
        company: "ATOS",
        timeframe: "2021 - 2023",
        role: "Fullstack Developer | JavaScript & Node.js | DP World Tour (Jun 2022 - Jul 2023)",
        achievements: [
          <>
            Developed the DP World Tour platform from scratch using Vanilla JavaScript, implementing core features like player registration, leaderboards, and a multi-channel notification system.
          </>,
          <>
            Built a RESTful API using Node.js and MySQL, improving internal testing efficiency by 30% and ensuring scalable architecture.
          </>,
        ],
        images: [],
      },
      {
        company: "",
        timeframe: "",
        role: "Fullstack Developer | JavaScript, Angular & Node.js | Going4Zero by EcoAct (Dec 2021 - Jun 2022)",
        achievements: [
          <>
            Developed and maintained an Angular-based web application, improving user experience with 5+ new features, reducing page load times by 25%, and resolving critical UI/UX issues to achieve a 98% bug-free experience.
          </>,
          <>
            Optimized Node.js backend endpoints, reducing API response times by 30% and improving overall platform performance.
          </>,
        ],
        images: [],
      },
      {
        company: "",
        timeframe: "",
        role: "React Developer | Options Clearing Corporation (OCC) (Jul 2023 - March 2024)",
        achievements: [
          <>
            Built a React component library using TypeScript and Tailwind CSS, enabling cross-team collaboration and accelerating UI development.
          </>,
          <>
            Developed scalable interfaces for margin calculation tools, improving usability for end-users.
          </>,
          <>
            Optimized Java Spring Boot endpoints, enabling faster UI integration and supporting backend development.
          </>,
        ],
        images: [],
      },
      {
        company: "LUMINA LEDS",
        timeframe: "2020 - 2021",
        role: "IoT & Web Developer, Founder",
        achievements: [
          <>
            Developed an intuitive UI interface using React.js, featuring a color wheel for controlling RGB/Pixel LED lighting systems, allowing users to easily interact and customize LED colors.
          </>,
          <>
            Engineered an IoT system with React.js and Arduino/Raspberry Pi/ESPx microcontrollers in C++ to enable remote control and customization of RGB/Pixel LED lighting via Wi-Fi, providing dynamic lighting solutions and smart automation
          </>,
          <>
            Managed product sales and installations for custom LED systems, providing tailored solutions and exceptional customer service, resulting in a 95% client satisfaction rate and 20% repeat business.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Education",
    timeframe: "2013 - 2019",
    institutions: [
      {
        name: "Benemérita Universidad Autónoma de Puebla",
        description: <>Bachelor of Science in Mechatronic Engineering </>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    description: <CustomeTechnicalDescription />,
    skills: [
      {
        title: "Order Management and Notification System",
        description: <>A scalable microservices-based e-commerce solution for order processing and notifications hosted on AWS.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/OMNsystems_home_dashboard.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Sharing Knowledge: Development and Technology",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

const structure = [
  {
    title: about.intro.title,
    display: about.intro.display,
    items: [],
  },
  {
    title: about.work.title,
    display: about.work.display,
    items: about.work.experiences.map((experience) => experience.company),
  },
  {
    title: about.studies.title,
    display: about.studies.display,
    items: about.studies.institutions.map((institution) => institution.name),
  },
  {
    title: about.technical.title,
    display: about.technical.display,
    items: about.technical.skills.map((skill) => skill.title),
  },
];

export { person, social, newsletter, home, about, blog, work, gallery, technicalSkills, structure };
