"use client"
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import SponserSlider from "./components/SponserSlider";
import PopularCategory from "./components/PopularCategory";
import CoursesSection from "./components/CoursesSection.";
import About from "./components/About";
import Instructors from "./components/Instructors";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <SponserSlider />
      <PopularCategory />
      <CoursesSection />
      <About />
      <Instructors />
    </>

  )
}