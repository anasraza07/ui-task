const HeroSection = () => {
  return (
    <div className="h-screen overflow-hidden">
      <div className="container max-w-6xl mx-auto flex items-start relative">
        <div className="content pt-28 space-y-4">
          <div className="sub-heading text-[#F16126] letter-spacing-[1px] uppercase font-semibold tracking-widest text-lg ">Online education</div>
          <h1 className="text-6xl font-bold">
            <span className="block leading-16">Learn The <span className="block leading-16">Skills You Need</span> To Succeed
            </span>
          </h1>
          <p className="text-[#555555] text-lg max-w-lg">Free online courses from the world's Leading experts. join 18+ million Learners today.</p>
        </div>
        <div className="image flex-1 h-full">
          <img src="/images/banner/01.png" alt="banner img" className="w-[90%] relative z-9" />
        </div>

        <div className="image rounded-full w-175 h-175 border border-dashed border-[#ff70d2] absolute top-[15%] -right-20 p-14">
          <div className="image rounded-full w-full h-full border border-dashed border-[#8b74ff] p-14">
            <div className="image rounded-full w-full h-full border border-dashed border-[#fdca92]"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection