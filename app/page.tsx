import Image from "next/image";
import Hero from "./sections/Hero";
import Services from "./sections/Myservices";
import TechStack from "./sections/skills";
import AboutMe from "./sections/AboutMe";
import Myapproach from "./sections/MyApproach";
import Footer from "./sections/footer";

export default function Home() {
  return (
    <div>
      <Hero />
      <AboutMe />
      <Services />
      <TechStack />
      <Myapproach />
      <Footer />
    </div>
  );
}
