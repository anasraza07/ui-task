"use client"
import Header from "./components/header/Header";
import HeroSection from "./components/HeroSection";
import SponserSlider from "./components/SponserSlider";
import PopularCategory from "./components/PopularCategory";
import CoursesSection from "./components/CoursesSection.";
import About from "./components/About";
import Instructors from "./components/Instructors";
import Feedback from "./components/Feedback";
import Blogs from "./components/Blogs";
import Achievements from "./components/Achievements";
import Container from "./components/common/Container";
import { BiLogoTelegram } from "react-icons/bi";




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
      <Feedback />
      <Blogs />
      <Achievements />
      <div className="news-letter bg-[#1F1F33] p-12">
        <Container>
          <div className="text-center pb-10 border-b border-[#363648]">
            <h2 className="text-xl sm:text-3xl font-bold leading-[1.2] text-white 
            mb-7.5">Want Us To Email You About Special Offers And Updates?</h2>
            <form action="#" className="relative">
              <input type="text" placeholder="Enter Your Email" className="w-full py-5 pl-12.5 pr-5 sm:pr-48 bg-white border-none outline-none" />
              <button className="text-white p-2.5 bg-[#26C976] font-bold text-base mt-5 sm:mt-0 top-1/2 sm:-translate-y-1/2 w-40 right-1.25 sm:absolute">Subscribe Now</button>
              <BiLogoTelegram color="#26C976" size={20} className="absolute top-8 left-4 -translate-y-1/2" />
            </form>
          </div>
        </Container>
      </div>
      <footer className="">
        <div className="footer-top bg-[#1F1F33] text-white pb-17.5 lg:pb-27.5">
          <Container>
            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-3.75">
              <div className="grid-item px-3 mt-6">
                <div className="relative">
                  <h4 className="text-xl sm:text-2xl mb-7.5 font-semibold">Site Map</h4>
                  <span className="block absolute top-10 w-12.5 border-b-2 border-[#26c976]"></span>
                </div>
                <ul>
                  <li className="py-2"><a href="#">Documentation</a></li>
                  <li className="py-2"><a href="#">Feedback</a></li>
                  <li className="py-2"><a href="#">Plugins</a></li>
                  <li className="py-2"><a href="#">Support Forums</a></li>
                  <li className="py-2"><a href="#">Themes</a></li>
                </ul>
              </div>
              <div className="grid-item px-3 mt-6">
                <div className="relative">
                  <h4 className="text-xl sm:text-2xl mb-7.5 font-semibold">Useful Links</h4>
                  <span className="block absolute top-10 w-12.5 border-b-2 border-[#26c976]"></span>
                </div>
                <ul>
                  <li className="py-2"><a href="#">Documentation</a></li>
                  <li className="py-2"><a href="#">Feedback</a></li>
                  <li className="py-2"><a href="#">Plugins</a></li>
                  <li className="py-2"><a href="#">Support Forums</a></li>
                  <li className="py-2"><a href="#">Themes</a></li>
                </ul>
              </div>
              <div className="grid-item px-3 mt-6">
                <div className="relative">
                  <h4 className="text-xl sm:text-2xl mb-7.5 font-semibold">Social Contact</h4>
                  <span className="block absolute top-10 w-12.5 border-b-2 border-[#26c976]"></span>
                </div>
                <ul>
                  <li className="py-2"><a href="#">Documentation</a></li>
                  <li className="py-2"><a href="#">Feedback</a></li>
                  <li className="py-2"><a href="#">Plugins</a></li>
                  <li className="py-2"><a href="#">Support Forums</a></li>
                  <li className="py-2"><a href="#">Themes</a></li>
                </ul>
              </div>
              <div className="grid-item px-3 mt-6">
                <div className="relative">
                  <h4 className="text-xl sm:text-2xl mb-7.5 font-semibold">Our Support</h4>
                  <span className="block absolute top-10 w-12.5 border-b-2 border-[#26c976]"></span>
                </div>
                <ul>
                  <li className="py-2"><a href="#">Documentation</a></li>
                  <li className="py-2"><a href="#">Feedback</a></li>
                  <li className="py-2"><a href="#">Plugins</a></li>
                  <li className="py-2"><a href="#">Support Forums</a></li>
                  <li className="py-2"><a href="#">Themes</a></li>
                </ul>
              </div>
            </div>
          </Container>
        </div>
        <div className="footer-bottom py-8.75 text-center">
          <Container>
            <p className="text-[#555] text-lg">© 2026 <a href="#" className="text-[#101115] transition-all hover:text-[#f16126] p-1.25 font-semibold">Edukon</a> Designed by <a href="#" className="font-semibold 
            text-[#101115] p-1.25 transition-all hover:text-[#f16126]">Muhammad Anas Raza</a>
            </p>
          </Container>
        </div>
      </footer>
    </>

  )
}