import React from "react";
import SectionTitle from "./SectionTitle";
import { proficiency, skills } from "../data";

const Skills = () => {
  return (
    <section className="bg-slate-200 py-20" id="skills">
      <div className="mx-auto px-4 md:max-w-2xl lg:max-w-4xl xl:max-w-6xl">
        <SectionTitle text={"Skills"} />
        <article className="mt-10 grid place-items-center gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => {
            const { id, img, text } = skill;
            return (
              <div className="grid place-items-center" key={id}>
                <div className="h-24 w-24 rounded-full p-3 bg-white shadow-lg mb-2">
                  <img className="h-full" src={img} alt={text} />
                </div>
                <p className="text-lg font-bold tracking-wider">{text}</p>
              </div>
            );
          })}
        </article>
      </div>
      <article className="pt-8 grid md:grid-cols-2 lg:grid-cols-3 ">
        {proficiency.map((item) => {
          const { id, text } = item;
          return (
            <div key={id} className="text-center ">
              <h3 className="bg-slate-700 text-white border-b border-slate-200 text-1xl p-4 tracking-wider font-medium  ">
                {text}
              </h3>
            </div>
          );
        })}
      </article>
    </section>
  );
};

export default Skills;
