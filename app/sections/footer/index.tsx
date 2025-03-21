import { FaTwitter, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        {/* Left Section - Logo & Copyright */}
        <div className="mb-6 md:mb-0 con-text-xl">
          <h2 className=" font-bold">Nandana</h2>
          <p className="text-gray-400 text-sm mt-2">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        {/* Center - Navigation Links */}
        <ul className="flex flex-wrap justify-center gap-6 con-text-xl text-gray-300">
          {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
            <li key={item} className="hover:text-white transition">
              <a href={`#${item.toLowerCase()}`}>{item}</a>
            </li>
          ))}
        </ul>

        {/* Right Section - Social Icons */}
        <div className="flex gap-4 mt-6 md:mt-0">
          {[
            { icon: <FaTwitter size={50} />, link: "https://twitter.com" },
            { icon: <FaLinkedin size={50} />, link: "https://linkedin.com" },
            { icon: <FaGithub size={50} />, link: "https://github.com" },
            {
              icon: <FaEnvelope size={50} />,
              link: "mailto:hello@example.com",
            },
          ].map(({ icon, link }, index) => (
            <a
              key={index}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white text-xl transition"
            >
              {icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
