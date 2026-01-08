import Container from '../common/Container';
import { FaFacebookMessenger, FaMapMarkerAlt, FaPhoneAlt, FaSkype, FaTwitter, FaVimeoV } from 'react-icons/fa';
import { MdOutlineRssFeed } from 'react-icons/md';

const HeaderTop = ({ isInfoOpen }: {
  isInfoOpen: boolean
}) => {
  return (
    <div className='bg-[#F26930] lg:bg-transparent'>
      <Container>
        <div className={`${isInfoOpen ? "flex" : "hidden"} info-cta bg-[#F26931] lg:bg-transparent flex-wrap lg:flex-nowrap justify-between items-center`}>
          <div className="contact w-full flex flex-wrap lg:flex-nowrap justify-between lg:justify-start border border-[#F47845] lg:border-none divide-y 
          divide-[#F47845] lg:divide-y-0 lg:divide-x
              lg:divide-[#E3E2DC]">
            <div className="phone flex-1 lg:flex-initial lg:w-fit text-center flex items-center gap-3
                text-white lg:text-[#555] py-2.25 px-3.75">
              <FaPhoneAlt size={14} />
              <span className='text-sm'>+800-123-4567 6587</span>
            </div>
            <div className="address text-center flex items-center gap-3
                text-white lg:text-[#555] py-2.25 px-3.75">
              <FaMapMarkerAlt size={14} />
              <span className='text-sm'>Beverley, New York 224 USA</span>
            </div>
          </div>
          <div className="social-media flex flex-wrap justify-between items-center w-[90%] mx-auto">
            <ul className="social-icons flex flex-1 justify-between flex-wrap items-center divide-x divide-[#F47845] lg:divide-[#E3E2DC]">
              <span className="text-white lg:text-[#555] text-lg mr-2 border-none p-2">Find us on :</span>
              <div className="p-1.25 cursor-pointer flex-1 place-items-center transition-all hover:-translate-y-1 text-white lg:text-[#f16126]">
                <FaFacebookMessenger />
              </div>
              <div className="p-1.25 cursor-pointer flex-1 place-items-center transition-all hover:-translate-y-1 text-white lg:text-[#f16126]">
                <FaTwitter />
              </div>
              <div className="p-1.25 cursor-pointer flex-1 place-items-center transition-all hover:-translate-y-1 text-white lg:text-[#f16126]">
                <FaVimeoV />
              </div>
              <div className="p-1.25 cursor-pointer flex-1 place-items-center transition-all hover:-translate-y-1 text-white lg:text-[#f16126]">
                <FaSkype />
              </div>
              <div className="p-1.25 cursor-pointer flex-1 place-items-center transition-all hover:-translate-y-1 text-white lg:text-[#f16126]">
                <MdOutlineRssFeed size={20} />
              </div>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default HeaderTop