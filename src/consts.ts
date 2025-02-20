import type { Site, Page, Links, Socials } from "@types"

// Global
export const SITE: Site = {
  TITLE: "Thrive Report",
  DESCRIPTION: "A newsletter about thriving with good health.",
  AUTHOR: "Shubham Gupta",
}

// Work Page
// export const WORK: Page = {
//   TITLE: "Work",
//   DESCRIPTION: "Places I have worked.",
// }

// Blog Page
export const BLOG: Page = {
  TITLE: "Newsletters",
  DESCRIPTION: "Recent thrive report newsletters",
}

// Projects Page 
// export const PROJECTS: Page = {
//   TITLE: "Projects",
//   DESCRIPTION: "Recent projects I have worked on.",
// }

// Search Page
export const SEARCH: Page = {
  TITLE: "Search",
  DESCRIPTION: "Search all posts and projects by keyword.",
}

// Subscribe Page
export const SUBSCRIBE: Page = {
  TITLE: "Subscribe to Thrive Report",
  DESCRIPTION: "Join thrive report on whatsapp or email to get actionable and no-bullshit health and food knowledge.",
}

// Links
export const LINKS: Links = [
  { 
    TEXT: "Home", 
    HREF: "/", 
  },
  // { 
  //   TEXT: "Work",
  //   HREF: "/work", 
  // },
  { 
    TEXT: "Newsletters", 
    HREF: "/blog", 
  },
  // { 
  //   TEXT: "Projects", 
  //   HREF: "/projects", 
  // },
]

// Socials
export const SOCIALS: Socials = [
  { 
    NAME: "Email",
    ICON: "email", 
    TEXT: "siddhaannam@gmail.com",
    HREF: "mailto:siddhaannam@gmail.com",
  },
  { 
    NAME: "Phone",
    ICON: "phone", 
    TEXT: "+91 8905933873",
    HREF: "tel:+918905933873",
  },
]

