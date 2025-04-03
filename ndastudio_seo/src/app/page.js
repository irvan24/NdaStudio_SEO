import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./Components/Navbar/Navbar";
import HeroSection from "./Section/HeroSection/HeroSection";
import ProjectsSection from "./Section/ProjectsSection/ProjectsSection";
import WhySection from "./Section/WhySection/WhySection";
import ServiceSection from "./Section/ServiceSection/ServiceSection";
import Footer from "./Section/Footer/Footer";

export default function Home() {
  return (
    <div className={styles.page}>
      <Navbar/>
      <HeroSection/>
      <ServiceSection/>
      <WhySection/>
     
      <Footer/>
    </div>
  );
}
