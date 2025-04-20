import { AdvancedImage, AdvancedVideo } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen/index";
import Button from "../utils/buttons/Button";

const AboutUs = () => {
  const cld = new Cloudinary({
    cloud: {
      cloudName: "dmo8bqzrx",
    },
  });
  const aboutusVid = cld
    .video("aboutusVid_lsais2")
    .format("auto")
    .quality("auto");
  const ourteam = cld.image("ourteam_itzdli").format("auto").quality("auto");

  const scrollToTopSlow = () => {
    const scrollDuration = 1000; // duration in ms
    const scrollStep = -window.scrollY / (scrollDuration / 15);
  
    const scrollInterval = setInterval(() => {
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep);
      } else {
        clearInterval(scrollInterval);
      }
    }, 15);
  };
  

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
              skills like branding, design and motion, to drive the user&apos;s
              attention to the right places and create more engaging and
              memorable experiences.
            </p>
          </div>

          <div className="flex flex-col gap-5 md:flex-row ">
            <div className="aboutus-video w-[full] md:w-1/2 border-2 h-[400px] rounded-2xl box-2">
              <AdvancedVideo
                cldVid={aboutusVid}
                muted
                autoPlay
                loop
                playsInline
              />
            </div>
            <div className="aboutus-our-team bg-[#fcdb67] text-white w-full md:w-1/2 h-auto rounded-2xl relative p-5 object">
              <h1 className="text-black text-center  tracking-tight text-2xl md:text-4xl font-semibold">Step Into Digital Future</h1>
              <p className="text-slate-700 text-center text-sm md:text-md">Contact us and elevate your digital process instantly</p>
              <div className="flex flex-col justify-start">
              <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-[#191c1e] to-[#4b4e50] text-5xl md:text-7xl w-full text-center bebas-neue-regular mt-10">
  Projects <br /> Delivered
</h1>

              <div className="flex justify-center items-end gap-4 md:gap-10 mt-5">
                <div>
                  <h1 className="text-black text-2xl md:text-4xl bebas-neue-regular">Websites</h1>
                  <h1  className="text-black text-2xl">8+</h1>
                </div>
                <div><h1  className="text-black text-2xl md:text-4xl bebas-neue-regular">Designs
                  </h1>
                  <h1  className="text-black text-2xl">5+</h1></div>
                <div><h1  className="text-black text-2xl md:text-4xl bebas-neue-regular">Reels</h1>
                <h1  className="text-black text-2xl">25+</h1></div>
              </div>
              </div>
             
              <img src="https://img.freepik.com/free-vector/hand-drawn-flat-design-metaverse-background_23-2149259640.jpg?t=st=1745120722~exp=1745124322~hmac=b25128f3f0dd09fce43d884acf53da0b9fc4435e0974662ff7160950a7ddabe2&w=1380" alt="" className="w-full mix-blend-overlay absolute top-0 left-0 h-full"/>       
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/4 flex flex-col gap-5">
          <div className="h-[300px] w-full bg-[#F1F660] rounded-2xl rightbox-1 flex flex-col justify-center items-center">
            <h1 className="text-black font-bold text-3xl text-center py-2 px-3 md:text-4xl anton-sc-regular">
              We don&apos;t just deliver, we elevate.
            </h1>
            <button
  onClick= {scrollToTopSlow}
  className="bg-black px-5 py-4 text-white rounded-2xl mt-2 monigue-font text-2xl"
>
  🟢 BACK TO TOP
</button>

          </div>
          <div className="aboutus-extra-info text-black h-[500px] w-full border-2 p-5 bg-[wheat] border-white rounded-2xl">
                <h1 className="font-semibold text-center text-6xl bebas-neue-regular">HAVE ANY QUESTIONS?</h1>
               <div className="flex items-center justify-center mt-5">
               <img src="/assets/golf-cart.png" alt="" height={200} width={200}/>
               </div>
               <h1 className="text-md text-gray-700 text-center font-semibold mt-5">Write us down to -</h1>
               <div className="flex  items-center gap-4">
                <img src="/assets/mail-box.png" alt="" className="h-12 w-12"/>
                <h1 className="text-lg md:text-2xl text-center font-semibold">nexacrft@gmail.com</h1>
                </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
