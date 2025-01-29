import { Cloudinary } from "@cloudinary/url-gen/index";
import { AdvancedImage } from "@cloudinary/react";

const OurWork = () => {
  const cld = new Cloudinary({
    cloud: {
      cloudName: "dmo8bqzrx",
    },
  });

  const image1 = cld.image("1_i6owfk").format("auto").quality("auto");
  const image2 = cld.image("2_qfslsh").format("auto").quality("auto");
  const image3 = cld.image("3_otm65z").format("auto").quality("auto");
  const image4 = cld.image("4_onyigx").format("auto").quality("auto");
  const image5 = cld.image("5_rdzodd").format("auto").quality("auto");
  const image6 = cld.image("6_szkpvd").format("auto").quality("auto");

  return (
    <div className="work-con mt-20">
      <div className="flex justify-center items-start h-[200vh] text-white relative">
        <div className="sticky top-[30%] md:top-[40%] z-10 text-center">
          <h1 className=" text-4xl md:text-9xl font-bold text-center anton-sc-regular tracking-wider text-[#faf4da]">
            Made with <br></br> NEXACRFT
          </h1>
          <button className=" text-3xl bg-[gray] rounded-2xl p-3 mt-4 bebas-neue-regular text-[#faf4da] ">
            Our Arsenal
          </button>
        </div>
        <div className="h-[40vw] w-[30vw]  absolute z-20 top-[8%] left-[5%] md:top-[15%] md:left-[10%] md:w-[20vw] md:h-[25vw] rounded-2xl bg-cover">
          <AdvancedImage
            cldImg={image1}
            className="rounded-2xl border-4 border-[wheat]"
            alt=""
          />
        </div>
        <div className="h-[40vw] w-[30vw]  absolute top-[10%] left-[60%] md:top-[17%] md:left-[70%] md:w-[20vw] md:h-[25vw]  rounded-2xl ">
          <AdvancedImage
            cldImg={image2}
            className="rounded-2xl bg-cover border-4 border-[wheat]"
            alt=""
          />
        </div>
        <div className="h-[40vw] w-[30vw] absolute top-[13%] left-[10%] md:top-[40%] md:left-[25%] md:w-[20vw] md:h-[25vw]  rounded-2xl ">
          <AdvancedImage
            cldImg={image3}
            className="rounded-2xl bg-cover border-4 border-[wheat] opacity-65"
            alt=""
          />
        </div>
        <div className="h-[40vw] w-[30vw]  absolute top-[25%] left-[65%] z-20 md:top-[50%] md:left-[75%] md:w-[20vw] md:h-[25vw]  rounded-2xl ">
          <AdvancedImage
            cldImg={image4}
            className="rounded-2xl bg-cover border-4 border-[wheat] opacity-65"
            alt=""
          />
        </div>
        <div className="h-[40vw] w-[30vw]  z-20 top-[30%] left-[12%] absolute md:top-[65%] md:left-[13%] md:w-[20vw] md:h-[25vw]rounded-2xl ">
          <AdvancedImage
            cldImg={image5}
            className="rounded-2xl bg-cover border-4 border-[wheat]"
            alt=""
          />
        </div>
        <div className="h-[40vw] w-[30vw] z-20 top-[35%] left-[55%] absolute md:top-[75%] md:left-[65%] md:w-[20vw] md:h-[25vw]  rounded-2xl ">
          <AdvancedImage
            cldImg={image6}
            className="rounded-2xl bg-cover border-4 border-[wheat]"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default OurWork;
