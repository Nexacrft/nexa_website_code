import Button from "../utils/buttons/Button";
import { Cloudinary } from "@cloudinary/url-gen/index";
import { AdvancedImage } from "@cloudinary/react";

const Landing = () => {
  const cld = new Cloudinary({
    cloud: {
      cloudName: "dmo8bqzrx",
    },
  });

  const nexalogomain = cld.image("nexalogomain").format("auto").quality("auto");
  const image = cld.image("image_rgnjpl").format("auto").quality("auto");

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="border-2  border-white w-[90%] rounded-2xl h-[90%]">
        <AdvancedImage
          cldImg={nexalogomain}
          className="mt-2 h-[80px] w-[80px] m-auto"
          alt="LOGO"
        />
        <div className="border-2 border-white w-[90%] m-auto h-[75%] flex flex-col rounded-2xl">
          <div className=" h-[60%] border-b-2 flex flex-col md:flex-row">
            <div className="w-full md:w-[5%] h-[30%] md:h-full border-b-2 md:border-r-2 flex justify-center items-center relative">
              <h2 className="md:-rotate-90 w-max whitespace-nowrap text-center">
                . FOR BRANDS . FOR ENTERPRISE
              </h2>
            </div>
            <div className="w-full h-full flex ">
              <img src="https://usfolk.co.uk/wp-content/uploads/2016/05/TV-near-final-twitter-1024x737.png" alt="" className="h-[full] w-full object-cover object-top "/>
            
            </div>
          </div>
          <div className="h-[40%] flex">
            <div className="w-1/2 h-full border-r-2 flex justify-center items-center">
              <h1 className="text-md md:text-2xl lg:text-4xl anton-sc-regular text-center px-3 text-[#faf4da]">
                NEXACRFT IS A{" "}
                <span style={{ color: "rgb(241, 246, 96)" }}>CREATIVE</span>{" "}
                SERVICE AND WEBSITE AGENCY PROVIDING
                <span style={{ color: "rgb(241, 246, 96)" }}>
                  {" "}
                  EXCEPTIONAL
                </span>{" "}
                WEBSITE EXPERIENCES.
              </h1>
            </div>
            <div className="w-1/2 h-full flex justify-center items-center flex-col">
              <h2 className="font-semibold px-3 md:px-6 text-[10px] md:text-[14px] lg:text-[16px]">
                {" "}
                we bring the elements you need together to create a perfectly
                balanced creative team. This tailor-made blend allows us to take
                your ideas and forge them into gold.{" "}
              </h2>
              <div className="flex gap-5 mt-4 justify-start text-left">
                <Button />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
