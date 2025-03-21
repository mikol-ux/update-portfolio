import ServiceCard from "@/app/components/Servicecard/Card";
import Image from "next/image";

const services = [
  {
    title: "User Interface",
    description: "Creating visually appealing and user-friendly interfaces.",
    icon: "/service/user-interface-svgrepo-com.svg",
    hex: "#FF1053",
  },
  {
    title: "User Experience",
    description: "Enhancing user satisfaction through improved usability.",
    icon: "/service/user-experience-design-svgrepo-com.svg",
    hex: "#3454D1",
  },
  {
    title: "Web Design",
    description: "Crafting modern and responsive website designs.",
    icon: "/service/web-design-svgrepo-com.svg",
    hex: "#FF570A",
  },
  {
    title: "Web Development",
    description: "Building efficient and scalable web applications.",
    icon: "/service/web-development-svgrepo-com.svg",
    hex: "#3ABEFF",
  },
];

export default function Services() {
  return (
    <section className="contained">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-semibold text-black dark:text-white">
          My Services
        </h2>
        <p className="text-2xl text-gray-600 dark:text-gray-400 mt-2 max-w-2xl mx-auto">
          I specialize in creating intuitive designs, modern websites, and
          engaging digital experiences.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </div>
    </section>
  );
}
