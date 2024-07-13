import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://brokenricefilms.vercel.app/", // replace this with your deployed domain
  author: "Thuan Pham",
  desc: "Thuan Pham, a video editor based in Ho Chi Minh City, who goes by Broken Rice Films.",
  title: "Broken Rice Films",
  ogImage: "brokenricefilms-og.webp",
  lightAndDarkMode: true,
  postPerPage: 9999,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
};

export const LOCALE = {
  lang: "en", // html lang code. Set this empty and default will be "en"
  langTag: ["en-EN"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

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
    href: "https://x.com/brokenricefilms",
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
    href: "mailto:brokenricefilms@proton.me",
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
