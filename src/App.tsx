import { Hero } from "./components/Hero";
import { FeaturedProjects } from "./components/FeaturedProjects";
import { AboutSkills } from "./components/AboutSkills";
import { Community } from "./components/Community";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="h-screen overflow-y-scroll scroll-smooth">
      <Hero />
      <FeaturedProjects />
      <AboutSkills />
      <Community />
      <Footer />
    </div>
  );
}