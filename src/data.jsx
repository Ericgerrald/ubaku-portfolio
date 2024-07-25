import { nanoid } from "nanoid";
import revit from "./assets/revit.png";
import autoCad from "./assets/AutoCad.png";
import archiCad from "./assets/archicad.png";
import twinmotion from "./assets/twinmotion.png";

import pOne from "./assets/p-1.png";
import ppOne from "./assets/pp-1.pdf";
import pTwo from "./assets/p-2.png";
import ppTwo from "./assets/pp-2.pdf";
import pThree from "./assets/p-3.png";
import ppThree from "./assets/pp-3.pdf";
import pFour from "./assets/p-4.png";
import ppFour from "./assets/pp-4.pdf";

import iOne from "./assets/i-1.png";
import iTwo from "./assets/i-2.png";
import iThree from "./assets/i-3.png";
import iFour from "./assets/i-4.png";

import rOne from "./assets/r-1.jfif";
import rTwo from "./assets/r-2.jfif";
import rThree from "./assets/r-3.jfif";
import rFour from "./assets/r-4.jfif";

export const links = [
  { id: nanoid(), href: "#home", text: "home" },
  { id: nanoid(), href: "#about", text: "about" },
  { id: nanoid(), href: "#skills", text: "skills" },
  { id: nanoid(), href: "#projects", text: "projects" },
  {
    id: nanoid(),
    href: "#reviews",
    text: "reviews",
  },
];

export const skills = [
  { id: nanoid(), img: revit, text: "Revit" },
  { id: nanoid(), img: autoCad, text: "AutoCad" },
  { id: nanoid(), img: archiCad, text: "ArchiCad" },
  { id: nanoid(), img: twinmotion, text: "Twinmotion" },
];

export const proficiency = [
  { id: nanoid(), text: "Skilled in sketching" },
  { id: nanoid(), text: "Strong Communicator" },
  { id: nanoid(), text: "Critical Thinker" },
  { id: nanoid(), text: "Team Player" },
  { id: nanoid(), text: "Creative Problem-solver" },
  { id: nanoid(), text: "Detailed-Oriented" },
];

export const projects = [
  {
    id: nanoid(),
    title: "Commercial Development",
    location: "Rivers State, Nigeria",
    img: pOne,
    src: ppOne,
  },
  {
    id: nanoid(),
    title: "Residential Development",
    location: "Imo State, Nigeria",
    img: pTwo,
    src: ppTwo,
  },
  {
    id: nanoid(),
    title: "Residential Development",
    location: "Rivers State, Nigeria",
    img: pThree,
    src: ppThree,
  },
  {
    id: nanoid(),
    title: "Residential Development",
    location: "Enugu State, Nigeria",
    img: pFour,
    src: ppFour,
  },
];

export const pictures = [
  { id: nanoid(), img: iOne },
  { id: nanoid(), img: iTwo },
  { id: nanoid(), img: iThree },
  { id: nanoid(), img: iFour },
];

export const reviews = [
  {
    id: nanoid(),
    img: rOne,
    name: "Prof. Arc. Johnson I. Onwusonye",
    job: "Principal Architect at Network Projects Nigeria Owerri, Imo State, Nigeria. ",
    quote: `As a Senior Architect at Network Projects Nigeria, Ifeanyi excelled in site measurements and facility management. His leadership in project developments and renovations, combined with his expertise in design and construction drawings, greatly contributed to our success. His dedication and innovative approach made him an invaluable asset to the team.`,
  },
  {
    id: nanoid(),
    img: rTwo,
    name: "Arc. Richard O. Umunna",
    job: "Principal Architect at Goldmark Developments Owerri, Imo State, Nigeria.",
    quote: `As a Senior Architect at Network Projects Nigeria, Ifeanyi excelled in site measurements and facility management. His leadership and expertise in design significantly contributed to project success. His dedication and innovative approach made him an invaluable team member.`,
  },
  {
    id: nanoid(),
    img: rThree,
    name: "Arc. Charlse U. Ibenna",
    job: "Head of Building Department Ministry of Housing Umuahia, Abia State, Nigeria.",
    quote: `Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover.`,
  },
  {
    id: nanoid(),
    img: rFour,
    name: "Mr. Collins Gerald",
    job: "Private Client",
    quote: `Ifeanyi Ubaku did an outstanding job designing and overseeing the construction of our new home. His professionalism, attention to detail, and ability to capture our vision were exceptional. He kept us informed and involved throughout the process, ensuring our satisfaction. We couldn't be happier with the final result.`,
  },
];
