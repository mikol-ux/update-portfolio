import { motion } from "framer-motion";
import { FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiRedux,
  SiTailwindcss,
  SiMongodb,
  SiNextdotjs,
  SiJavascript,
} from "react-icons/si";

const tools = [
  {
    name: "React",
    icon: <FaReact size={50} />,
    description: "A JavaScript library for building UI",
  },
  {
    name: "Redux Toolkit",
    icon: <SiRedux size={50} />,
    description: "State management for React apps",
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs size={50} />,
    description: "React framework with server-side rendering",
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss size={50} />,
    description: "A utility-first CSS framework",
  },
  {
    name: "Node.js",
    icon: <FaNodeJs size={50} />,
    description: "JavaScript runtime for server-side applications",
  },
  {
    name: "MongoDB",
    icon: <SiMongodb size={50} />,
    description: "NoSQL database for modern applications",
  },
  {
    name: "JavaScript",
    icon: <SiJavascript size={50} />,
    description: "The language of the web",
  },
];

const ToolsGrid = () => {
  return (
    <section className="bg-black text-white contained">
      <div className="mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center">
          My Frontend Toolkit
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-8">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl flex flex-col items-start gap-4"
            >
              <div className="p-0 rounded-xl">{tool.icon}</div>
              <h3 className="con-text-2xl font-semibold">{tool.name}</h3>
              <p className="text-gray-400 con-text-lg">{tool.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsGrid;
