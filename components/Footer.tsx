"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "../Data";
import MagicButton from "./ui/MagicButton";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50"
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading text-3xl md:text-4xl lg:text-5xl font-bold text-center max-w-[85vw] md:max-w-[60vw] lg:max-w-[45vw] leading-tight">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h1>
        <p className="text-white-200 text-base md:text-lg lg:text-xl mt-8 mb-6 text-center max-w-[75vw] md:max-w-[50vw] leading-relaxed">
          Reach out to me today and let’s discuss how I can help you achieve
          your goals.
        </p>
        <a href="mailto:saimmukhtar2009@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>

      <div className="flex mt-16 md:flex-row flex-col justify-between items-center gap-6 md:gap-0">
        <p className="md:text-base text-sm md:font-normal font-light text-white-200">
          Copyright © 2025 Saim Misbahu
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <a
              key={info.id}
              href={info.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300 transition-all duration-300 ease-in-out hover:scale-110 hover:bg-purple/10 hover:border-purple hover:shadow-[0_0_10px_rgba(147,51,234,0.5)]"
            >
              <img
                src={info.img}
                alt={`${info.url.split(".")[1]} icon`}
                width={20}
                height={20}
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
