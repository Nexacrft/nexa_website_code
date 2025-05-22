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
    <div className="min-h-screen flex justify-center items-center p-2 sm:p-4">
      <div className="md:border-2 border-white w-full max-w-7xl rounded-2xl min-h-[95vh] sm:h-[90vh]">
        <AdvancedImage
          cldImg={nexalogomain}
          className="mt-3 sm:mt-4 h-16 w-16 sm:h-20 sm:w-20 m-auto"
          alt="LOGO"
        />
        <div className="border-2 border-white w-[90%] sm:w-[90%] m-auto h-[calc(100%-6rem)] sm:h-[75%] flex flex-col rounded-2xl overflow-hidden">
          {/* Top section */}
          <div className="flex-1 sm:h-[60%] border-b-2 flex flex-col lg:flex-row">
            {/* Rotated text section */}
            <div className="w-full lg:w-[5%] h-12 sm:h-16 lg:h-full border-b-2 lg:border-b-0 lg:border-r-2 flex justify-center items-center relative overflow-hidden">
              <h2 className="lg:-rotate-90 w-max whitespace-nowrap text-center text-xs sm:text-sm font-medium tracking-wider">
                . FOR BRANDS . FOR ENTERPRISE
              </h2>
            </div>
            {/* Image section */}
            <div className="flex-1 md:w-[95%] h-48 sm:h-64 md:h-full">
              <img
                src="https://usfolk.co.uk/wp-content/uploads/2016/05/TV-near-final-twitter-1024x737.png"
                alt="Creative workspace"
                className="h-full w-full object-cover object-top rounded-sm"
              />
            </div>
          </div>
          
          {/* Bottom section */}
          <div className="flex-1 sm:h-[40%] flex flex-col lg:flex-row">
            {/* Info section */}
            <div className="w-full lg:w-1/2 flex-1 border-b-2 lg:border-b-0 lg:border-r-2 flex justify-center items-center py-4 sm:py-6 px-3 sm:px-6">
              <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl anton-sc-regular text-center text-[#faf4da] leading-tight">
                NEXACRFT IS A{" "}
                <span style={{ color: "rgb(241, 246, 96)" }}>CREATIVE</span>{" "}
                SERVICE AND WEBSITE AGENCY PROVIDING
                <span style={{ color: "rgb(241, 246, 96)" }}> EXCEPTIONAL</span>{" "}
                WEBSITE EXPERIENCES.
              </h1>
            </div>
            
            {/* Button section */}
            <div className="w-full lg:w-1/2 flex-1 flex justify-center items-center flex-col md:flex-row lg:flex-col gap-3 sm:gap-4 p-4 sm:p-6">
              <h2 className="font-medium text-xs sm:text-sm md:text-base text-center leading-relaxed text-gray-200 max-w-md">
                We bring the elements you need together to create a perfectly
                balanced creative team. This tailor-made blend allows us to take
                your ideas and forge them into gold.
              </h2>
              <div className="flex gap-3 sm:gap-5 mt-2 md:-mt-2 lg:mt-2">
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