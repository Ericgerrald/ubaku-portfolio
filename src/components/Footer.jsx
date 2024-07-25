import { FaLinkedin } from "react-icons/fa";
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-slate-950 h-16  py-2 shadow-2xl">
      <div className="flex items-center justify-center gap-6 mt-4 text-white">
        <p className=" tracking-wider font-bold ">
          &copy; {year} Ubaku Ifeanyi
        </p>
        <a
          className="flex gap-1"
          href="https://www.linkedin.com/in/ifeanyi-ubaku-301838292"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin className="h-6 w-6 " />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
