import React from "react";
import SectionTitle from "./SectionTitle";
import { pictures, projects } from "../data";

const Projects = () => {
  return (
    <section className="bg-slate-50 py-20" id="projects">
      <div className="mx-auto px-4 md:max-w-2xl lg:max-w-4xl xl:max-w-6xl">
        <SectionTitle text={"Projects"} />
        <article className=" mt-10 grid gap-8 lg:grid-cols-3 ">
          {projects.map((project) => {
            const { id, title, location, img, src } = project;
            return (
              <div
                className=" bg-slate-300 rounded-xl shadow-sm hover:shadow-md "
                key={id}
              >
                <div>
                  <img
                    className=" rounded-t-xl w-full object-cover"
                    src={img}
                    alt={title}
                  />
                </div>
                <div className="text-center py-6">
                  <h2 className="tracking-wide pb-2 font-bold text-lg ">
                    {title}
                  </h2>
                  <p className="pb-4 tracking-wider">{location}</p>
                  <a
                    className="bg-sky-950 text-sky-50 p-2 pl-4 pr-4 text-sm font-bold rounded-3xl tracking-wider lg:hover:bg-slate-300 hover:text-sky-950 hover:bg-sky-300 cursor-pointer "
                    href={src}
                    download={`ubaku_${title}`}
                  >
                    Get Project
                  </a>
                </div>
              </div>
            );
          })}
        </article>
      </div>
      <article className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {pictures.map((picture) => {
          const { id, img } = picture;
          return (
            <div key={id}>
              <img className="w-full object-cover" src={img} alt="image" />
            </div>
          );
        })}
      </article>
    </section>
  );
};

export default Projects;
