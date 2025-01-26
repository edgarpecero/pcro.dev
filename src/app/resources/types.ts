export type ImageContent = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

type Achievement = JSX.Element;
type Description = JSX.Element;
type TableOfContent = {
  display: boolean;
  subItems: boolean;
};

export type AvatarSkills = {
  [key: string]: string[];
}

type Avatar = {
  display: boolean;
  sectionHeadline?: string;
  skills?: AvatarSkills[];
};

type Calendar = {
  display: boolean;
  link: string;
};

type Intro = {
  display: boolean;
  title: string;
  description: Description;
};

type Experience = {
  company: string;
  timeframe: string;
  role: string;
  achievements: Achievement[];
  images: ImageContent[];
};

type Work = {
  display: boolean;
  title: string;
  experiences: Experience[];
};

type Institution = {
  name: string;
  description: Description;
};

type Studies = {
  display: boolean;
  title: string;
  timeframe: string;
  institutions: Institution[];
};

type Skill = {
  title: string;
  description: Description;
  images: ImageContent[];
};

export type Technical = {
  display: boolean;
  title: string;
  description: Description;
  skills: Skill[];
};

export type About = {
  label: string;
  title: string;
  description: string;
  tableOfContent: TableOfContent;
  avatar: Avatar;
  calendar: Calendar;
  intro: Intro;
  work: Work;
  studies: Studies;
  technical: Technical;
};