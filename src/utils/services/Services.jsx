import React, { useEffect } from "react";
import { gsap } from "gsap";
import './Service.css';

const Services = () => {
  useEffect(() => {
    const rightElems = document.querySelectorAll(".right-elem");

    rightElems.forEach((elem) => {
      const image = elem.querySelectorAll(".img-services"); // Select the image directly

      elem.addEventListener("mouseenter", () => {
        gsap.to(image, {
          opacity: 1,
          scale: 1,
          duration: 0.5, // Smooth animation
        });
      });

      elem.addEventListener("mouseleave", () => {
        gsap.to(image, {
          opacity: 0,
          scale: 0,
          duration: 0.5,
        });
      });
    });
  }, []); 

  return (
    <div className="mt-32 text-[#faf4da]" id="page2">
      <div id="page2-left">
        <h1 className="text-6xl md:text-8xl lg:text-9xl monigue-font">
         AREAS OF <span style={{color: "rgb(241, 246, 96)"}}>EXPERTISE</span>
        </h1>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGPTV4QkwFl9JK78d_4jES2jAHxOjGYIKY4A&s" alt="" className="rounded-2xl bg-cover w-72 h-40" />
        <h5 className="mt-20">
          Being a design studio at the forefront of digital transformation and
          product design, we take it upon ourselves to drop some knowledge,
          share insights, let out insider tips, and put our work on full display
        </h5>
      </div>
      <div id="page2-right">
        <div className="right-elem anton-sc-regular" id="right-elem1">
          <h2>
            UI / UX DEVELOPMENT
          </h2>
          <p className="text-gray-400">Crafting intuitive and visually engaging designs that enhance user experience and elevate your digital presence.</p>
          <img
            src="https://www.ekeria.com/hubfs/l-importanza-di-ux-e-ui-design-nella-creazione-di-siti-web.jpg"
            alt=""
            className="img-services  top-[10%] left-[-20%]"

          />
          <div className="md:flex gap-5 hidden md:justify-center lg:justify-start">
          <button className="mt-3 border-2 px-4 py-2 rounded-2xl">FIGMA</button>
          <button className="mt-3 border-2 px-4 py-2 rounded-2xl">CANVA</button>
          <button className="mt-3 border-2 px-4 py-2 rounded-2xl">ADOBE</button>
          </div>
        </div>
        <div className="right-elem anton-sc-regular">
          <h2>
            FULL STACK DEVELOPMENT
          </h2>
          <p className="text-gray-400">Crafting intuitive and visually engaging designs that enhance user experience and elevate your digital presence.</p>
          <img
            src="https://d1ub0o53i85pdh.cloudfront.net/uploads/2021/09/Facebook-Linkedin-image-template-10.jpg"
            alt=""
            className="img-services  top-[10%] left-[-20%]"

          />
        </div>
        <div className="right-elem anton-sc-regular">
          <h2>
            BRAND REDESIGN
          </h2>
          <p className="text-gray-400">Crafting intuitive and visually engaging designs that enhance user experience and elevate your digital presence.</p>
          <img
            src="https://www.onlinelogomaker.com/blog/wp-content/uploads/2024/04/63ee5691aed927ed11062b34110a8667.jpg"
            alt=""
            className="img-services  top-[10%] left-[-20%]"
          />
        </div>
        <div className="right-elem anton-sc-regular">
          <h2>
            SHOPIFY / NO-CODE WEBSITE
          </h2>
          <p className="text-gray-400">Crafting intuitive and visually engaging designs that enhance user experience and elevate your digital presence.</p>
          <img
          src="https://orgzit.com/blog/wp-content/uploads/2020/06/What-is-No-code-Developmet.png"
            alt=""
            className="img-services top-[10%] left-[-20%]"

          />
          <div className="md:flex hidden gap-5 md:justify-center lg:justify-start">
          <button className="mt-3 border-2 px-4 py-2 rounded-2xl">WORDPRESS</button>
          <button className="mt-3 border-2 px-4 py-2 rounded-2xl">LARAVEL</button>
          <button className="mt-3 border-2 px-4 py-2 rounded-2xl">SHOPIFY</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
