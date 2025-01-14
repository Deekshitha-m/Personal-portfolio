import { FaLocationArrow } from "react-icons/fa6";
import { TypeAnimation } from 'react-type-animation';
import { LuFileSpreadsheet } from "react-icons/lu";



import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
  const onButtonClick = () => {
    const pdfUrl = "https://drive.google.com/file/d/1aq_b_n7ovhm1Y-yEcavhcXg_M7O6d30s/view?usp=drivesdk";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "DeekshithaM.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};
  return (
    <div className=" pb-8 lg:pb-20 pt-36">
      {/**
       *  UI: Spotlights
       *  Link: https://ui.aceternity.com/components/spotlight
       */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/**
       *  UI: grid
       *  change bg color to bg-black and reduce grid color from
       *  0.2 to 0.03
       */}
      <div
        className="h-screen w-full dark:bg-black bg-white dark:bg-grid-white/[0.03] bg-grid-black/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        {/* Radial gradient for the container to give a faded look */}
        <div
          // chnage the bg to bg-black, so it matches the bg color and will blend in
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black
         bg-black "
        />
      </div>

      <div className="flex justify-center relative my-10 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center ">
         

          {/**
           *  Link: https://ui.aceternity.com/components/text-generate-effect
           *
           *  change md:text-6xl, add more responsive code
           */}
          <TextGenerateEffect
            words={`Hi! I'm Deekshitha M, a Web Developer.`}
            className="text-center text-[28px] md:text-[46px] lg:text-[69px] text-white"
          />

          <TypeAnimation
              sequence={['Skilled web developer adept in React, JavaScript, TypeScript, and Java. Proficient in building responsive web applications and passionate about exploring new technologies. Committed to delivering high-quality solutions and continuous learning.']}
              wrapper="p"
              speed={99}
              className="text-xs mb-5  text-center text-white lg:text-base"
              repeat={1}
              cursor={false}
            ></TypeAnimation>
       

          <div onClick={onButtonClick} className="lg:-mt-7">
            <MagicButton
              title="View My Resume"
              icon={<LuFileSpreadsheet />}
              position="right"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
