import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://brokenricefilms.pages.dev/", // replace this with your deployed domain
  author: "Thuan Pham",
  desc: "Broken Rice Films website, blog, about, Thuan Pham",
  title: "Broken Rice Films",
  ogImage: "brokenricefilms-og.png",
  lightAndDarkMode: true,
  postPerPage: 9999,
};

export const LOCALE = ["en-EN"]; // set to [] to use the environment default

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "YouTube",
    href: "https://youtube.com/@brokenricefilms",
    linkTitle: `${SITE.title} on YouTube`,
    active: true,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/brokenricefilms",
    linkTitle: `${SITE.title} on Twitter`,
    active: true,
  },
  {
    name: "Github",
    href: "https://github.com/brokenricefilms",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "Facebook",
    href: "https://facebook.com/brokenricefilms",
    linkTitle: `${SITE.title} on Facebook`,
    active: false,
  },
  {
    name: "Instagram",
    href: "https://instagram.com/brokenricefilms",
    linkTitle: `${SITE.title} on Instagram`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/brokenricefilms",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: false,
  },
  {
    name: "Mail",
    href: "mailto:brokenricefilms@gmail.com",
    linkTitle: `Send an email to ${SITE.title}`,
    active: true,
  },
  {
    name: "Twitch",
    href: "https://github.com/brokenricefilms",
    linkTitle: `${SITE.title} on Twitch`,
    active: false,
  },
  {
    name: "WhatsApp",
    href: "https://github.com/brokenricefilms",
    linkTitle: `${SITE.title} on WhatsApp`,
    active: false,
  },
  {
    name: "Snapchat",
    href: "https://github.com/brokenricefilms",
    linkTitle: `${SITE.title} on Snapchat`,
    active: false,
  },
  {
    name: "Pinterest",
    href: "https://github.com/brokenricefilms",
    linkTitle: `${SITE.title} on Pinterest`,
    active: false,
  },
  {
    name: "TikTok",
    href: "https://github.com/brokenricefilms",
    linkTitle: `${SITE.title} on TikTok`,
    active: false,
  },
  {
    name: "CodePen",
    href: "https://github.com/brokenricefilms",
    linkTitle: `${SITE.title} on CodePen`,
    active: false,
  },
  {
    name: "Discord",
    href: "https://github.com/brokenricefilms",
    linkTitle: `${SITE.title} on Discord`,
    active: false,
  },
  {
    name: "GitLab",
    href: "https://github.com/brokenricefilms",
    linkTitle: `${SITE.title} on GitLab`,
    active: false,
  },
  {
    name: "Reddit",
    href: "https://github.com/brokenricefilms",
    linkTitle: `${SITE.title} on Reddit`,
    active: false,
  },
  {
    name: "Skype",
    href: "https://github.com/brokenricefilms",
    linkTitle: `${SITE.title} on Skype`,
    active: false,
  },
  {
    name: "Steam",
    href: "https://github.com/brokenricefilms",
    linkTitle: `${SITE.title} on Steam`,
    active: false,
  },
  {
    name: "Telegram",
    href: "https://github.com/brokenricefilms",
    linkTitle: `${SITE.title} on Telegram`,
    active: false,
  },
  {
    name: "Mastodon",
    href: "https://github.com/brokenricefilms",
    linkTitle: `${SITE.title} on Mastodon`,
    active: false,
  },
];
