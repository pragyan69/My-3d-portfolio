import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    avax,
    pay,
    marketplace
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Blockchain Developer",
      icon: web,
    },
    {
      title: "Gym Enthusiastic",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Metaverse Ventures Limited",
      company_name: "",
      icon: starbucks,
      iconBg: "#383E56",
      date: "June 2023 - July 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",

      ],
    },
    {
      title: "Solana Collective",
      company_name: "Solana",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Aug 2023",
      points: [
        "Serving as a collective member at Solana Collective, a group of Discord-based enthusiasts committed to community growth.",
"Actively participating in community discussions to identify opportunities for Solana's expansion and improvement.",
"Crafting and publishing insightful content on social media platforms to educate and engage the Solana community.",
"Collaborating with members to curate high-quality resources, tutorials, and articles about Solana and blockchain technology.",
"Providing timely updates and insights into Solana developments, fostering greater community engagement and understanding."
      ],
    },
    
  
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "BlockPlay",
      description:
        "It is NFT based token game , here users can buy the cards that are NFTs from before and can play based on the amount of tokens they have in stake. The person at the highest no. of tokens at the end will be decleared as winner.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: avax,
      source_code_link: "https://github.com/pragyan69/blockplay",
    },
    {
      name: "PAY",
      description:
        "This is a decentralised payment system in the polygon test network , here people can pay from one account to another. This platform also accepts token swap over a variety of lot of tokens.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: pay,
      source_code_link: "https://github.com/pragyan69/Decentralised-Pay",
    },
    {
      name: "MARKETPLACE",
      description:
        "A well versed marketplace where people can BUY, SELL and CREATE NFTs.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "solidity",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: marketplace,
      source_code_link: "https://github.com/pragyan69/MARKETPLACE",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };