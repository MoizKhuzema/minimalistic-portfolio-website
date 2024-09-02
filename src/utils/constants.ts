import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.config";

const fullTwConfig = resolveConfig(tailwindConfig);

const EMAIL = "moizkhuzema@gmail.com";
const GITHUB = "https://github.com/MoizKhuzema";
const TWITTER = "https://www.linkedin.com/in/moiz-khuzema/";
const LINKEDIN = "https://www.linkedin.com/in/moiz-khuzema/";
const INSTAGRAM = "https://instagram.com/moizkhuzema";

const DISCORD_ID = "https://www.linkedin.com/in/moiz-khuzema/";

type Work = {
  company: string;
  position: string;
  link?: string;
  description: string;
};

const WORK: Work[] = [
  {
    company: "Afiniti",
    position: "Data Scientist",
    link: "https://www.afiniti.com/",
    description:
      "Developed an AI model to intelligently pair customers with agents in call centers, enhancing interactions and increasing sales. Implemented a product recommendation system at AT&T and TruGreen's sales and retention centers. Python, R, Statistics, Predictive Analysis, Linear Programming, SK-Learn, MySQL, Jira, Greenplum",
  },
  {
    company: "Smallcap.ai",
    position: "ML Engineer",
    link: "https://web3names.ai/",
    description:
      "Developed a Domain Naming System (DNS) tailored for Web3 applications using advanced text generation models. Implemented digital asset generation capabilities and AI agents for high-frequency trading of these assets. Langchain, OpenAI, Cohere, Dalle-3, Databricks, Flask, Nodejs, MongoDB",
  },
  {
    company: "CryptoGPT",
    position: "Freelance & ML Engineer",
    link: "https://github.com/MoizKhuzema/Automated-Crypto-Trading-Signal-Generator",
    description:
      "Developed a novel method to automate the generation of crypto trading signals by utilizing binance api for historical data, autoGPT for market/news sentiment, TALib for technical analysis, and OpenAI for language generation. Python, Langchain, Selenium, RAG, Streamlit",
  },
  {
    company: "Firesmart Community",
    position: "Freelance & Computer Vision Engineer",
    link: "https://github.com/MoizKhuzema/FireSmart-Community",
    description:
      "Wrote a script to combine aerial images of canadian communities into a 3d orthomosiac mesh, and trained a yolov5 model to detect potential fire hazards. The model then suggests how to make community firesmart. Agisoft, Yolov5, PyTorch",
  },
  {
    company: "SkyClean Watch",
    position: "Freelance & Computer Vision Engineer",
    link: "https://github.com/MoizKhuzema/Litter-Detection",
    description:
      "Developed a model to track litter falling from high-rise buildings. The model is capable of detecting litter in all weather conditions, and uses kalman filtering to map which window the littering was done from. OpenCV, Python",
  },
  {
    company: "BlueprintGAN",
    position: "Freelance & Generative AI",
    link: "https://github.com/MoizKhuzema/Automated-FloorPlan-Generator",
    description:
      "Developed a GAN model that takes room dimensions as input and generates various blueprints/floorplans. Generated floorplans adhere to China's residential construction regulations. Python, PyTorch",
  },
  {
    company: "AesthetiScore",
    position: "Freelance & Computer Vision Engineer",
    link: "https://github.com/MoizKhuzema/WebsiteScorer",
    description:
      "Developed a CNN model that takes screenshots of website using selenium and scores the website's aesthetics on a scale of 10. The model is capable of recognizing the genre of website (news, sports, entertainment, etc) and scoring respectively. Tensorflow, SK-Learn, Selenium",
  },
  {
    company: "GridironStream",
    position: "Freelance & Web Dev",
    link: "https://github.com/MoizKhuzema/NFL-Streamer",
    description:
      "Created a website that scrapes nfl match schedules and live streaming links from https://reddit1.nflbite.com/ and allows user to view matches live for free. Mern Stack",
  },
];

export {
  EMAIL,
  TWITTER,
  GITHUB,
  LINKEDIN,
  INSTAGRAM,
  DISCORD_ID,
  WORK,
  fullTwConfig,
};
