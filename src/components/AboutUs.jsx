import React from "react";

const AboutUs = () => {
  return (
    <div className="faq-con">
      <div className=" text-center">
        <h1 className="text-9xl text-[#F1F660] monigue-font">ABOUT US</h1>
      </div>
      <div className="ques-con flex flex-col p-10 gap-5 mt-4 lg:flex-row">
        <div className="w-full lg:w-3/4 flex flex-col gap-5">
          <div className="aboutus-why-us bg-[white] h-[400px] w-full rounded-2xl box-1 flex flex-col md:flex-row justify-center items-center">
            <h1 className="text-[#FaF4da] anton-sc-regular text-6xl font-bold text-center px-3 z-10 lg:text-9xl ">
              WHY US?
            </h1>
            <p className="text-md p-4 text-center text-[#FaF4da] md:text-xl md:w-[60%] anton-sc-regular">
              We have been building websites for more than 1 years. We always
              thought that focusing on just one area was not much fun, so we
              learned the whole process: planning, building and launching
              websites. This allowed us to specialize in storytelling, using
              skills like branding, design and motion, to drive the user’s
              attention to the right places and create more engaging and
              memorable experiences.
            </p>
          </div>

          <div className="flex flex-col gap-5 md:flex-row">
            <div className="aboutus-video w-full md:w-1/2 border-2 h-[400px] rounded-2xl box-2">
              <video
                src="/assets/aboutusVid.mp4"
                muted
                autoPlay
                loop
                playsInline
              ></video>
            </div>
            <div className="aboutus-our-team border-2 border-white w-full md:w-1/2  h-[400px] rounded-2xl box-3  flex relative">
              {/* <h1 className="text-black text-3xl md:text-4xl lg:text-5xl rotate-[11deg] mr-2 anton-sc-regular text-center w-[60%] mt-36 lg:mt-28 lg:mr-10">I CAN'T <br /> BUT WE CAN .</h1>
                <div className="w-[40%] hidden lg:block mr-5">
                <h1 className="text-7xl text-center text-[#FaF4da] anton-sc-regular py-6 px-10">Our team</h1>
                <p className=" text-sm text-right px-5  font-semibold text-[#F1F4da]">Top Talent with 1+ years of experience in building products. Give us a try and you won't regret.</p>
                </div> */}
              <img
                src="/assets/ourteam.png"
                className="w-full rounded-2xl p-2"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/4 flex flex-col gap-5">
          <div className="h-[300px] w-full bg-[#F1F660] rounded-2xl rightbox-1 flex flex-col justify-center items-center">
            <h1 className="text-black font-bold text-3xl text-center py-2 px-3 md:text-4xl anton-sc-regular">
              We don't just deliver, we elevate.
            </h1>
            <button className="bg-black px-5 py-4 text-white rounded-2xl mt-2 monigue-font text-2xl">
              🟢 BACK TO TOP
            </button>
          </div>
          <div className="aboutus-extra-info h-[500px] w-full border-2 bg-white border-white rounded-2xl rightbox-2 relative flex flex-col gap-4 items-center lg:items-start">
            <img
              src="https://i.pinimg.com/736x/42/bf/e5/42bfe5d7e452fa010bdda1d25c526704.jpg"
              alt=""
              className="rounded-2xl"
            />
            <h1 className="text-black text-5xl  px-5  monigue-font">
              Wanna Talk? <br />
              Send us a message{" "}
            </h1>
            <h2 className=" px-5 text-2xl tracking-wider monigue-font text-black">
              nexacrft@gmail.com
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
