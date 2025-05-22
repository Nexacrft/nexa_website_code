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
      name: "project1",
      icon: "/assets/projects/project1.png",
      description: "Figma is a collaborative interface design tool.",
    },
    {
      name: "project2",
      icon: "/assets/projects/project2.png",
      description: "Notion is an all-in-one workspace for notes and tasks.",
    },
    {
      name: "project3",
      icon: "/assets/projects/project3.png",
      description: "Slack is a powerful team communication platform.",
    },
    {
      name: "project4",
      icon: "/assets/projects/project4.png",
      description: "Relume is a no-code website builder and design tool.",
    },
    {
      name: "project5",
      icon: "/assets/projects/project5.jpeg",
      description: "Framer is a professional website prototyping tool.",
    },
    {
      name: "project6",
      icon: "/assets/projects/project6.jpeg",
      description: "Sketch is a vector graphics editor for macOS.",
    },
    {
      name: "project7",
      icon: "/assets/projects/project7.png",
      description: "Canva is an online design and publishing tool.",
    },
    {
      name: "project8",
      icon: "/assets/projects/project8.png",
      description: "Webflow is a no-code website design platform.",
    },
    {
      name: "project9",
      icon: "/assets/projects/project9.jpeg",
      description: "Adobe XD is a vector-based user experience design tool.",
    },
    {
      name: "project10",
      icon: "/assets/projects/project10.jpeg",
      description: "InVision is a prototyping and collaboration platform.",
    },
    {
      name: "project11",
      icon: "/assets/projects/project11.jpeg",
      description: "Zeplin is a collaboration app for designers and developers.",
    },
    {
      name: "project12",
      icon: "/assets/projects/project12.png",
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
