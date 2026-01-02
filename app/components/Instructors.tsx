import { ImBook } from 'react-icons/im';
import Container from './Container'
import Subtitle from './Subtitle'
import { FaUsers } from 'react-icons/fa';
import SectionTitle from './SectionTitle';

const instructors = [{
  img: "01",
  name: "Emilee Logan"
}, {
  img: "02",
  name: "Donald Logan"
}, {
  img: "03",
  name: "Oliver Porter"
}, {
  img: "04",
  name: "Nahla Jones"
},]

const Instructors = () => {
  return (
    <div className='py-17.5 lg:py-28 bg-[#FFF9F1]'>
      <Container>
        <div className="header-content mb-7.5">
          <Subtitle text='World-class Instructors' />
          <SectionTitle text='Classes Taught By Real Creators' />
        </div>
        <div className="instructors grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {instructors.map(({ img, name }, index) => (
            <div key={index} className="card group transition-all duration-300 hover:-translate-y-2 w-full bg-white rounded-sm divide-y divide-[#ECF0F3] shadow-[0_0_10px_#8787871a]">
              <div className="personal-details pt-7.5 px-3.75 pb-5 text-center place-items-center">
                <div className="image mb-5">
                  <img src={`/images/instructor/${img}.jpg`} alt="" />
                </div>
                <h3 className='text-xl sm:text-2xl mb-1 font-semibold transition-all duration-300 group-hover:text-[#f36126]'>{name}</h3>
                <p className='text-lg mb-1 text-[#555]'>Master of Education Degree</p>
              </div>
              <div className="instructor-details p-3.75 flex justify-between text-[#555]">
                <div className="courses flex items-center gap-2">
                  <ImBook />
                  <span>08 courses</span>
                </div>
                <div className="students flex items-center gap-2">
                  <FaUsers />
                  <span>30 students</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className='text-[#555] text-center text-lg mt-7.5'>Want to help people learn, grow and achieve more in life?
          <a href="#" className='text-[#f16126] ml-1.5 font-medium cursor-pointer'>Become an instructor</a>
        </p>
      </Container>
    </div>
  )
}

export default Instructors;