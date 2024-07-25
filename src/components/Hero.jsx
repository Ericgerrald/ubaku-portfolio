import React from "react";

const Hero = () => {
  return (
    <div
      className="hero py-24 min-h-screen flex items-center justify-center"
      id="home"
    >
      <div className="mx-auto px-8  ">
        <article className=" text-sky-50 text-center">
          <h1 className="font-bold text-3xl tracking-wider pt-10 pb-1 ">
            Hello!!
          </h1>
          <h2 className="font-bold text-2xl tracking-wider pb-2 ">
            I'm Ifeanyi Ubaku
          </h2>
          <p className=" leading-8 tracking-wide text-sm max-w-4xl ">
            A visionary architect dedicated to transforming spaces and crafting
            remarkable designs.{" "}
            <span className="hidden md:inline-block">
              With an exceptional eye for details and a passion for innovative
              solutions, I bring creativity and functionality together to create
              stunning architectural masterpieces.
            </span>
          </p>

          <div className="pt-8">
            <a
              className=" 
          bg-sky-700 text-sky-200 p-2 pl-4 pr-4 text-lg font-bold rounded-3xl tracking-wider lg:first-letter:hover:bg-sky-300 hover:text-sky-900 cursor-pointer hover:bg-sky-50 "
              href="mailto:ubakuic@gmail.com"
            >
              Get In Touch
            </a>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Hero;
