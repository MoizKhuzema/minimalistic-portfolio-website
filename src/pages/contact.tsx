import Head from "next/head";
import AnimatedText from "../components/AnimatedText";
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  MailIcon,
  TwitterIcon,
} from "../components/Icons";
import AnimatedPage from "../components/PageWrapper";
import { GITHUB, INSTAGRAM, LINKEDIN, TWITTER } from "../utils/constants";

const SOCIAL_ITEMS = [
  {
    platform: "twitter",
    icon: <TwitterIcon width={30} height={30} />,
    link: TWITTER,
    handle: "@mk",
  },
  {
    platform: "github",
    icon: <GitHubIcon width={30} height={30} className="fill-primary-300" />,
    link: GITHUB,
    handle: "@MoizKhuzema",
  },
  {
    platform: "linkedin",
    icon: <LinkedInIcon width={30} height={30} />,
    link: LINKEDIN,
    handle: "@moiz-khuzema",
  },
  {
    platform: "instagram",
    icon: <InstagramIcon width={30} height={30} />,
    link: INSTAGRAM,
    handle: "@moizkhuzema",
  },
  {
    platform: "email",
    icon: <MailIcon width={30} height={30} />,
    link: "mailto:moizkhuzema@gmail.com",
    handle: "moizkhuzema@gmail.com",
  },
];

export default function Contact() {
  return (
    <AnimatedPage>
      <Head>
        <title>moiz — contact</title>
        <meta
          name="description"
          content="contact me through any of my socials"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="title__wrapper">
        <AnimatedText element="h1" text="Contact" />
      </div>

      <ul className="flex flex-col gap-6 list-none">
        {SOCIAL_ITEMS.map((item) => (
          <li key={item.platform} className="flex gap-4 items-center">
            {item.icon}
            <a
              href={item.link}
              className="text-xl"
              target="_blank"
              rel="noreferrer"
            >
              {item.handle}
            </a>
          </li>
        ))}
      </ul>
    </AnimatedPage>
  );
}
