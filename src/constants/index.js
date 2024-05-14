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
    spring,
    java,
    aws,
    amazon,
    googlemeet,
    hftbot,
    selfieextractor,
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
      title: "Software Development Engineer",
      icon: web,
    },
    {
      title: "Java Developer",
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
      name: "Java",
      icon: java,
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
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Spring Boot",
      icon: spring,
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
      name: "AWS",
      icon: aws,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Software Development Engineer ",
      company_name: "Amazon",
      icon: amazon,
      iconBg: "#383E56",
      date: "Sept 2022 - May 2024",
      points: [
          "Led the development of highly scalable, highly available services, reducing system downtime by 40% and increasing customer satisfaction by 25%.",
          "Utilized Java, AWS, TypeScript, Docker, MongoDB, and Spring Boot to automate tax filing systems, benefiting 254 k European taxpayers.",
          "Designed low-level architectures for over five microservices following the ACBDA Design pattern, resulting in a 50% enhancement in code readability.",
          "Implemented Test-Driven Development (TDD) achieving 100% line coverage ensuring robust functionality and reliability of services through rigorous component testing.",
          "Tools: Java, Spring Boot, AWS, MongoDB, DynamoDB, Python, Typescript.",
      ],
    },

  ];
  
  const testimonials = [
    {
      testimonial:
        "Working alongside Himanshu has been truly inspiring. Their strong work ethic, attention to detail, and ability to collaborate seamlessly make them an invaluable asset to any team.",
      name: "Ayush Khatarkar",
      designation: "Product Engineer",
      company: "Sprinklr",
      image: "https://shorturl.at/ezGL9",
    },
    {
      testimonial:
        "I have had the pleasure of witnessing Himanshu's dedication and expertise firsthand. Their innovative approach to problem-solving and commitment to achieving excellence have consistently impressed me.",
      name: "Rohit Kumar Gupta",
      designation: "SDE",
      company: "Amazon",
      image: "https://drive.google.com/file/d/1DUzzhiyeLxDs4dIpWvwSwvhyqKo1Isnj/view?usp=sharing",
    },
    {
      testimonial:
      "I have seen firsthand the impressive leadership skills of Himanshu. His ability to motivate and inspire team members, coupled with their strategic vision and strong decision-making abilities, have been instrumental in driving our projects forward.",
      name: "Avinash Uchadiya",
      designation: "Web Development Engineer",
      company: "Hotbit Infosoft",
      image: "https://drive.google.com/file/d/1-V6rnQwWrjUQjDbhq5pyoz5yL_X-i1pA/view?usp=sharing",
    },
  ];
  
  const projects = [
    {
      name: "Selfie Extractor",
      description:
        "This AI model is trained to scan images and filter out those containing your face, providing efficient facial recognition capabilities.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "Keras",
          color: "green-text-gradient",
        },
        {
          name: "Neural Networks",
          color: "pink-text-gradient",
        },
        {
          name: "Tensorflow",
          color: "orange-text-gradient",
        },
      ],
      image: selfieextractor,
      source_code_link: "https://github.com/HimanshuKhatarkar/Selfie_Extractor",
    },
    {
      name: "Google Meet",
      description:
        "A Google Meet Clone project aims to replicate the functionality of Google Meet, offering users a platform for video conferencing and collaboration.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "JavaScript",
          color: "pink-text-gradient",
        },
        {
          name: "WebRTC",
          color: "orange-text-gradient",
        },
        {
          name: "socket.io",
          color: "green-text-gradient",
        },
      ],
      image: googlemeet,
      source_code_link: "https://github.com/HimanshuKhatarkar/google_meet",
    },
    {
      name: "High Frequency Trading Bot",
      description:
        "A High Frequency Trading Bot is designed for automated trading in financial markets, executing rapid buy and sell orders based on predefined algorithms.",
      tags: [
        {
          name: "Java",
          color: "blue-text-gradient",
        },
        {
          name: "HTML",
          color: "green-text-gradient",
        },
        {
          name: "Spring Boot",
          color: "pink-text-gradient",
        },
        {
          name: "Boot-Strap",
          color: "orange-text-gradient",
        },
        // {
        //   name: "JavaScript",
        //   color: "green-text-gradient",
        // },
      ],
      image: hftbot,
      source_code_link: "https://github.com/HimanshuKhatarkar/HFTBot",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
