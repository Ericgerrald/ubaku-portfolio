import React from "react";
import SectionTitle from "./SectionTitle";
import ubaku from "../assets/web.png";
import Cv from "../assets/Ifeanyi Ubkau - Curriculum vitae.pdf";

const About = () => {
  return (
    <section className="bg-slate-50 py-20" id="about">
      <div className="mx-auto px-4 md:max-w-2xl lg:max-w-4xl xl:max-w-6xl">
        <SectionTitle text={"About Me"} />
        <div className="lg:flex lg:gap-16 grid place-items-center justify-center items-center">
          <article className="mt-16 lg:mt-0">
            <div className="about-img ">
              <img
                className=" about-photo object-cover h-80 w-60"
                src={ubaku}
                alt="ubaku"
              />
            </div>
          </article>
          <article className="lg:flex lg:flex-col items-center justify-center">
            <div className="max-w-2xl">
              <p className="mt-10 tracking-wide text-justify">
                My name is Ifeanyi Ubaku, a motivated and versatile professional
                with a robust background in architectural planning, project
                management, and team leadership. I am currently pursuing a
                Master of Engineering (MEng) in Technology Innovation Management
                at Carleton University in Ottawa, Ontario. With a strong
                academic foundation and hands-on experience, I am passionate
                about leveraging my skills in architectural design and
                construction management to drive organizational success and
                innovation.
              </p>
              <p className="mt-4 tracking-wide hidden md:inline-block text-justify">
                I have extensive experience in architectural and construction
                designs, particularly proficient in using Revit and AutoCAD.
                Over the past several years, I have honed my skills in project
                management, team collaboration, and leadership. My ability to
                manage facilities, conduct site measurements, and lead project
                developments has been demonstrated in various roles, from Senior
                Architect at Network Projects Nigeria to Architect/Designer at
                the Ministry of Housing & Urban Planning in Abia State, Nigeria.
              </p>
            </div>
            <div className="mt-8 text-center">
              <a
                className="bg-sky-950 text-sky-50 p-2 pl-4 pr-4 text-lg font-bold rounded-3xl tracking-wider lg:hover:bg-slate-300 hover:text-sky-950 hover:bg-sky-300 cursor-pointer "
                href={Cv}
                download={"ubaku_ifeanyi_cv.pdf"}
              >
                Download Cv
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default About;
