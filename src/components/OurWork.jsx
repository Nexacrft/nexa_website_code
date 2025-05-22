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
    <div className="work-con md:mt-20">
      {/* Mobile Layout */}
      <div className="block lg:hidden">
        <div className="text-center mb-8 px-4">
          <h1 className="text-5xl sm:text-4xl font-bold anton-sc-regular tracking-wider text-[#faf4da] mb-6">
            Made with <br />
            NEXACRFT
          </h1>
          <button className="text-lg sm:text-xl bg-gray-600 rounded-2xl px-6 py-3 bebas-neue-regular text-[#faf4da] hover:bg-gray-500 transition-colors">
            Our Arsenal
          </button>
        </div>
        
        {/* Mobile Grid Layout */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 px-4 max-w-md mx-auto">
          <div className="aspect-square">
            <AdvancedImage
              cldImg={image1}
              className="w-full h-full object-cover rounded-xl border-2 border-[wheat]"
              alt="Project 1"
            />
          </div>
          <div className="aspect-square">
            <AdvancedImage
              cldImg={image2}
              className="w-full h-full object-cover rounded-xl border-2 border-[wheat]"
              alt="Project 2"
            />
          </div>
          <div className="aspect-square opacity-75">
            <AdvancedImage
              cldImg={image3}
              className="w-full h-full object-cover rounded-xl border-2 border-[wheat]"
              alt="Project 3"
            />
          </div>
          <div className="aspect-square opacity-75">
            <AdvancedImage
              cldImg={image4}
              className="w-full h-full object-cover rounded-xl border-2 border-[wheat]"
              alt="Project 4"
            />
          </div>
          <div className="aspect-square">
            <AdvancedImage
              cldImg={image5}
              className="w-full h-full object-cover rounded-xl border-2 border-[wheat]"
              alt="Project 5"
            />
          </div>
          <div className="aspect-square">
            <AdvancedImage
              cldImg={image6}
              className="w-full h-full object-cover rounded-xl border-2 border-[wheat]"
              alt="Project 6"
            />
          </div>
        </div>
      </div>

      {/* Desktop Layout (Original with improvements) */}
      <div className="hidden lg:flex justify-center items-start h-[200vh] text-white relative">
        <div className="sticky top-[40%] z-10 text-center">
          <h1 className="text-6xl xl:text-9xl font-bold text-center anton-sc-regular tracking-wider text-[#faf4da]">
            Made with <br />
            NEXACRFT
          </h1>
          <button className="text-2xl xl:text-3xl bg-gray-600 rounded-2xl px-6 py-3 xl:p-3 mt-4 bebas-neue-regular text-[#faf4da] hover:bg-gray-500 transition-colors">
            Our Arsenal
          </button>
        </div>
        
        {/* Desktop positioned images */}
        <div className="h-[20vw] w-[15vw] xl:h-[25vw] xl:w-[20vw] absolute z-20 top-[15%] left-[10%] rounded-2xl">
          <AdvancedImage
            cldImg={image1}
            className="w-full h-full object-cover rounded-2xl border-4 border-[wheat]"
            alt="Project 1"
          />
        </div>
        <div className="h-[20vw] w-[15vw] xl:h-[25vw] xl:w-[20vw] absolute top-[17%] left-[70%] rounded-2xl">
          <AdvancedImage
            cldImg={image2}
            className="w-full h-full object-cover rounded-2xl border-4 border-[wheat]"
            alt="Project 2"
          />
        </div>
        <div className="h-[20vw] w-[15vw] xl:h-[25vw] xl:w-[20vw] absolute top-[40%] left-[25%] rounded-2xl">
          <AdvancedImage
            cldImg={image3}
            className="w-full h-full object-cover rounded-2xl border-4 border-[wheat] opacity-65"
            alt="Project 3"
          />
        </div>
        <div className="h-[20vw] w-[15vw] xl:h-[25vw] xl:w-[20vw] absolute top-[50%] left-[75%] z-20 rounded-2xl">
          <AdvancedImage
            cldImg={image4}
            className="w-full h-full object-cover rounded-2xl border-4 border-[wheat] opacity-65"
            alt="Project 4"
          />
        </div>
        <div className="h-[20vw] w-[15vw] xl:h-[25vw] xl:w-[20vw] z-20 top-[65%] left-[13%] absolute rounded-2xl">
          <AdvancedImage
            cldImg={image5}
            className="w-full h-full object-cover rounded-2xl border-4 border-[wheat]"
            alt="Project 5"
          />
        </div>
        <div className="h-[20vw] w-[15vw] xl:h-[25vw] xl:w-[20vw] z-20 top-[75%] left-[65%] absolute rounded-2xl">
          <AdvancedImage
            cldImg={image6}
            className="w-full h-full object-cover rounded-2xl border-4 border-[wheat]"
            alt="Project 6"
          />
        </div>
      </div>
    </div>
  );
};

export default OurWork;