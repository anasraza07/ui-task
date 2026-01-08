import Container from "./common/Container";
import Subtitle from "./common/Subtitle";
import SectionTitle from "./common/SectionTitle";
import { FaUser } from "react-icons/fa";
import { FaArrowUpRightFromSquare, FaRegCalendarDays } from "react-icons/fa6";
import { MdMessage, MdOutlineMessage } from "react-icons/md";

const Blogs = () => {
  return (
    <div className="py-17.5 lg:py-28 bg-[#FFF9F1]">
      <Container>
        <div className="header mb-12.5">
          <Subtitle text="FORM OUR BLOG POSTS" />
          <SectionTitle text="More Articles From Resource Library" />
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="card shadow-md rounded-md grid-item bg-white p-3.75">
            <div className="image h-62.5">
              <img src="https://profound-smakager-0e05e9.netlify.app/assets/images/blog/01.jpg" alt="" className="w-full h-full object-cover" />
            </div>
            <div className="content pt-5 px-3.75 pb-3.75">
              <h3 className="text-2xl text-[#101115] font-semibold mb-2">Scottish Creatives To Receive Funded Business.</h3>
              <ul className="text-[#555] flex items-center gap-3.75 mb-3.75">
                <li className="flex items-center gap-1.25">
                  <FaUser color="#F16126" />
                  <span>Begrass Tyson</span>
                </li>
                <li className="flex items-center gap-1.25">
                  <FaRegCalendarDays color="#F16126" />
                  <span>April 23,2024</span>
                </li>
              </ul>
              <p className="text-lg text-[#555] mb-1.25 leading-6">Pluoresnts customize prancing apcentered customer service anding ands asing straelg Interacvely cordinate performe</p>
            </div>
            <div className="cta pt-3.75 mx-3.75 border-t border-[#ECF0F3] flex justify-between items-center">
              <div className="read-more flex items-center gap-1.25 font-medium text-[#555] capitalize ">
                <span className="text-lg">Read more</span>
                <FaArrowUpRightFromSquare color="#F16126" />
              </div>
              <MdMessage size={24} color="#555" />
            </div>
          </div>
          <div className="card shadow-md rounded-md grid-item bg-white p-3.75">
            <div className="image h-62.5">
              <img src="https://profound-smakager-0e05e9.netlify.app/assets/images/blog/01.jpg" alt="" className="w-full h-full object-cover" />
            </div>
            <div className="content pt-5 px-3.75 pb-3.75">
              <h3 className="text-2xl text-[#101115] font-semibold mb-2">Scottish Creatives To Receive Funded Business.</h3>
              <ul className="text-[#555] flex items-center gap-3.75 mb-3.75">
                <li className="flex items-center gap-1.25">
                  <FaUser color="#F16126" />
                  <span>Begrass Tyson</span>
                </li>
                <li className="flex items-center gap-1.25">
                  <FaRegCalendarDays color="#F16126" />
                  <span>April 23,2024</span>
                </li>
              </ul>
              <p className="text-lg text-[#555] mb-1.25 leading-6">Pluoresnts customize prancing apcentered customer service anding ands asing straelg Interacvely cordinate performe</p>
            </div>
            <div className="cta pt-3.75 mx-3.75 border-t border-[#ECF0F3] flex justify-between items-center">
              <div className="read-more flex items-center gap-1.25 font-medium text-[#555] capitalize ">
                <span className="text-lg">Read more</span>
                <FaArrowUpRightFromSquare color="#F16126" />
              </div>
              <MdMessage size={24} color="#555" />
            </div>
          </div>
          <div className="card shadow-md rounded-md grid-item bg-white p-3.75">
            <div className="image h-62.5">
              <img src="https://profound-smakager-0e05e9.netlify.app/assets/images/blog/01.jpg" alt="" className="w-full h-full object-cover" />
            </div>
            <div className="content pt-5 px-3.75 pb-3.75">
              <h3 className="text-2xl text-[#101115] font-semibold mb-2">Scottish Creatives To Receive Funded Business.</h3>
              <ul className="text-[#555] flex items-center gap-3.75 mb-3.75">
                <li className="flex items-center gap-1.25">
                  <FaUser color="#F16126" />
                  <span>Begrass Tyson</span>
                </li>
                <li className="flex items-center gap-1.25">
                  <FaRegCalendarDays color="#F16126" />
                  <span>April 23,2024</span>
                </li>
              </ul>
              <p className="text-lg text-[#555] mb-1.25 leading-6">Pluoresnts customize prancing apcentered customer service anding ands asing straelg Interacvely cordinate performe</p>
            </div>
            <div className="cta pt-3.75 mx-3.75 border-t border-[#ECF0F3] flex justify-between items-center">
              <div className="read-more flex items-center gap-1.25 font-medium text-[#555] capitalize ">
                <span className="text-lg">Read more</span>
                <FaArrowUpRightFromSquare color="#F16126" />
              </div>
              <MdMessage size={24} color="#555" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Blogs