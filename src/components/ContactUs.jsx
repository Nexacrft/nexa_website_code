import React from "react";

const ContactUs = () => {
  return (
    <div className=" text-white h-screen flex flex-col">
      <div className="flex-1 p-4 md:p-8">
        <div className="max-w-6xl mx-auto h-full">
          <div className="text-center py-4">
            <div className="text-9xl monigue-font text-[#F1F660]">
              Contact Us •
            </div>
          </div>

          <hr className="border-gray-800 my-6" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <div>
              <h1 className="text-3xl lg:text-6xl md:text-4xl font-bold leading-tight anton-sc-regular">
                This is the part where you get in touch and we make <span style={{color: "rgb(241, 246, 96)"}}>amazing </span>
                things happen!
              </h1>
              {/* <div className="mt-6 text-gray-400 space-y-1">
                <a href="mailto:hello@studio-mindset.co.uk" className="block hover:text-white">nexacrft@gmail.com</a>
                <a href="tel:02890291846" className="block hover:text-white">+91 8237006990</a>
              </div> */}
            </div>

            <div className="space-y-6 md:space-y-8 md:text-right">
              <hr className="border-gray-800 md:hidden" />

              <div>
                <h2 className="font-bold mb-2">
                  <div className="mt-6 space-y-1">
                    <a
                      href="mailto:nexaacrft@gmail.com"
                      className="block hover:text-white"
                    >
                      nexacrft@gmail.com
                    </a>
                    <a
                      href="tel:08237006990"
                      className="block hover:text-white"
                    >
                      +91 8237006990
                    </a>
                  </div>
                </h2>
              </div>

              <hr className="border-gray-800" />

              <div>
                <h2 className="text-10xl font-bold text-[#f1f660] mb-2">Mumbai</h2>
                <p className="text-[gray-400]">
                  SJCEM
                  <br />
                  Vevoor
                  <br />
                  Manor Road
                  <br />
                  Palghar (E)
                  <br />
                  Dist. Palghar - 401404
                </p>
              </div>

              <hr className="border-gray-800" />

              <div>
                <h2 className="font-bold text-[#f1f660]  mb-2">Stalk Us</h2>
                <div className="space-y-1 text-gray-400">
                  <a href="https://x.com/NexaCrft" target="_blank" className="block hover:text-white">
                    Twitter
                  </a>
                  <a href="https://www.instagram.com/nexacrft/" target="_blank" className="block hover:text-white">
                    Instagram
                  </a>
                  <a href="https://www.linkedin.com/in/nexa-crft-54a767346" target="_blank" className="block hover:text-white">
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="w-full px-4 md:px-8 py-6">
        <div className="max-w-6xl mx-auto">
          <hr className="border-gray-800 mb-6" />
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>© Copyright 2025 Nexacrft</p>
            <div className="flex space-x-8">
              <a href="#" className="hover:text-white">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactUs;
