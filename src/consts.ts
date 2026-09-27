import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Yunhyung Chang",
  EMAIL: "yh_21@naver.com",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Astro Nano is a minimal and lightweight blog and portfolio.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of articles on topics I am passionate about.",
};

export const WORK: Metadata = {
  TITLE: "Career",
  DESCRIPTION: "Where I've learned, built, and grown.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION: "A collection of my projects, with links to repositories and demos.",
};

export const SOCIALS: Socials = [
//  { 
//    NAME: "twitter-x",
//    HREF: "https://twitter.com/markhorn_dev",
//  },
  { 
    NAME: "github",
    HREF: "https://github.com/yh21"
  },
  { 
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/yunhyung-chang-0273ab38b/",
  }
];
