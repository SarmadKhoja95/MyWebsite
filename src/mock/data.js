import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Sarmad',
  subtitle: 'Full Stack Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'Highly dedicated and creative full stack web and mobile developer with one plus year of strong experience in latest technologies like React.js, React Native. Interested in continuation of learning & cooperation with excellent people. ',
  paragraphTwo: 'I’ve always sought out opportunities and challenges that are meaningful to me. Although my professional path has taken many twists and turns. I have never stopped engaging my passion to help others and solve problems. As a web & mobile developer, I enjoy using my obsessive attention to detail, my unequivocal love for making things, and my mission-driven work ethic to literally change the world.',
  paragraphThree: 'That’s why I’m excited to make a big impact at a high growth company.',
  resume: 'https://drive.google.com/drive/folders/1Hr20UWkKXq5Hx2ew5wl-zOILZYlBwPEP?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'ufessor.jpg',
    title: 'UFESSOR',
    info: 'A Web-based freelance platform for tutors which aims to help the students and teachers connect with each other online. Student can choose a class, contact the teacher, join the class, and pay payments in escrow.',
    info2: 'Technologies: React.js, Redux, Node.js, Express, Firebase ',
    url: 'https://drive.google.com/drive/folders/1MyfoFz4Nh3OSaQ_T5ekhbLZt3hdmfhKb?usp=sharing',
   // repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'oilex.png',
    title: 'OILEX',
    info: 'Cross-platform Mobile app for car services like oil change, car wash using which user select his/her car, choose relevant service, and made booking request. Service provider manages user requests and generate invoice.',
    info2: 'Technologies: React Native (Expo), Redux, Node.js, Express, MongoDB ',
    url: 'https://drive.google.com/drive/folders/1TCO--GPF76x87ahnkCu0pIKs-irfycg_?usp=sharing',
    //repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'splash.png',
    title: 'JEEH',
    info:'Android & iOS application based on products location for buying & selling. ',
    info2: 'Technologies: React Native (Expo), Redux, Node.js, Express, MongoDB ',
    url: 'https://drive.google.com/drive/folders/1w1pH7deH9AahZfb7P7qKXhI8wQyaABL3?usp=sharing',
    //repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'rick.png',
    title: 'Hybrid ESL Calculator',
    info:'Desktop application to automate the proficiency calculations and the growth calculations contained within evaluating proficiency and growth through language skills testing',
    info2: 'Technologies: Electron.js, React, Redux, Google charts, Nedb',
    url: 'https://drive.google.com/drive/folders/1yiYlVrYc8aVlGXtSYyLhOMbviy7szZMi?usp=sharing',
    //repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'sarmadkhoja.sk@gmail.com.',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/sarmad_khoja',
    },
    // {
    //   id: nanoid(),
    //   name: 'codepen',
    //   url: '',
    // },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/sarmad-khoja-89b203116/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/SarmadKhoja95',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
