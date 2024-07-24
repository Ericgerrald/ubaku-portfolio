import { useRef, useState } from "react";
import { links } from "../data";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);

  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  const toggleLinks = () => {
    setShowLinks((showLinks) => !showLinks);
  };

  const onClickLinks = () => {
    setShowLinks((showLinks) => !showLinks);
  };

  const linkStyles = {
    height: showLinks
      ? `${linksRef.current.getBoundingClientRect().height}px`
      : "0px",
  };

  return (
    <nav className="bg-slate-100 shadow-md fixed w-full top-0 left-0">
      <div className="md:max-w-2xl p-2 md:p-0 md:flex md:items-center md:justify-between lg:max-w-4xl xl:max-w-6xl md:my-0 md:mx-auto">
        <div className="flex items-center justify-between p-4 ">
          <h2 className="capitalize font-bold">ifeanyi ubaku</h2>
          <button
            className="text-2xl  bg-transparent border-transparent md:hidden "
            onClick={toggleLinks}
          >
            <FaBars />
          </button>
        </div>
        <div
          className="overflow-hidden transition-all links-container"
          ref={linksContainerRef}
          style={linkStyles}
        >
          <ul ref={linksRef} className="md:flex md:gap-5">
            {links.map((link) => {
              const { id, href, text } = link;
              return (
                <li onClick={onClickLinks} key={id}>
                  <a
                    className=" font-josefin   capitalize tracking-wider block px-4 py-2 transition-all hover:bg-sky-900 hover:text-sky-100 hover:pl-6 md:px-0 md:hover:pl-0 md:hover:bg-transparent md:hover:text-sky-900  md:hover:border-sky-900 
                    md:hover:border-b-2
                     md:hover:border-solid md:p-0"
                    href={href}
                  >
                    {text}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
