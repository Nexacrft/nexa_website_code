  import Integrations from "../utils/Integrations/Inetgrations";
  import { AdvancedImage, AdvancedVideo } from "@cloudinary/react";
  import { Cloudinary } from "@cloudinary/url-gen/index";

  const Project = () => {
    const cld = new Cloudinary({
      cloud: {
        cloudName: "dmo8bqzrx",
      },
    });
  }

  const tools = [
    {
      name: "Figma",
      icon: "https://res.cloudinary.com/dmo8bqzrx/image/upload/v1738084384/project1_seaukl.jpg",
      description: "Figma is a collaborative interface design tool.",
    },
    {
      name: "Notion",
      icon: "https://res.cloudinary.com/dmo8bqzrx/image/upload/v1738084383/project2_cal8sc.jpg",
      description: "Notion is an all-in-one workspace for notes and tasks.",
    },
    {
      name: "Slack",
      icon: "https://res.cloudinary.com/dmo8bqzrx/image/upload/v1738084382/project3_wqxkey.jpg",
      description: "Slack is a powerful team communication platform.",
    },
    {
      name: "Relume",
      icon: "https://res.cloudinary.com/dmo8bqzrx/image/upload/v1738084383/project4_fbhw8g.jpg",
      description: "Relume is a no-code website builder and design tool.",
    },
    {
      name: "Framer",
      icon: "https://res.cloudinary.com/dmo8bqzrx/image/upload/v1738084382/project5_qgzjil.jpg",
      description: "Framer is a professional website prototyping tool.",
    },
    {
      name: "Sketch",
      icon: "https://res.cloudinary.com/dmo8bqzrx/image/upload/v1738084382/project6_zn1hsj.jpg",
      description: "Sketch is a vector graphics editor for macOS.",
    },
    {
      name: "Canva",
      icon: "https://res.cloudinary.com/dmo8bqzrx/image/upload/v1738084382/project7_gm0oec.png",
      description: "Canva is an online design and publishing tool.",
    },
    {
      name: "Webflow",
      icon: "https://res.cloudinary.com/dmo8bqzrx/image/upload/v1738084384/project8_tbjald.png",
      description: "Webflow is a no-code website design platform.",
    },
    {
      name: "Adobe XD",
      icon: "https://res.cloudinary.com/dmo8bqzrx/image/upload/v1738084379/project9_xvfn6i.jpg",
      description: "Adobe XD is a vector-based user experience design tool.",
    },
    {
      name: "InVision",
      icon: "https://res.cloudinary.com/dmo8bqzrx/image/upload/v1738084384/project10_ekvnrl.jpg",
      description: "InVision is a prototyping and collaboration platform.",
    },
    {
      name: "Zeplin",
      icon: "https://res.cloudinary.com/dmo8bqzrx/image/upload/v1738084383/project11_txye6y.jpg",
      description: "Zeplin is a collaboration app for designers and developers.",
    },
    {
      name: "Rohit",
      icon: "https://res.cloudinary.com/dmo8bqzrx/image/upload/v1738084382/project5_qgzjil.jpg",
      description: "Overflow is a design presentation and storytelling tool.",
    },
  ];

  const Projects = () => {
    return (
      <div className="integrations-con  py-24 overflow-hidden">
        <div className="flex flex-col gap-10">
          <div className=" text-center flex flex-col lg:flex-row justify-between px-20 items-center">
            <div>
              <h1 className="monigue-font text-6xl">OUR</h1>
              <h1 className="text-6xl md:text-9xl monigue-font text-[#F1F660]">
                {" "}
                PROJECTS
              </h1>
            </div>
            <div>
              <h1 className="text-3xl anton-sc-regular text-[#f4fada]">
                &quot; Cool way to show projects &quot; <br /> ~ Sun Tzu
              </h1>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div
              className="h-[400px]  w-full mt-8 overflow-hidden grid md:grid-cols-3 gap-2 lg:h-[500px] rounded-3xl"
              // style={{
              //   maskImage:
              //     "linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)",
              //   WebkitMaskImage:
              //     "linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)",
              // }}
            >
              <Integrations data={tools.slice(0, 4)} className="hidden md:flex" />
              <Integrations data={tools.slice(4, 8)} reverse />
              <Integrations
                data={tools.slice(8, 12)}
                className="hidden md:flex"
              />
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default Projects;
