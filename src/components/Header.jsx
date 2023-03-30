import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import logo from "/assets/logo.svg";

const Header = () => {
  const [scrollHeader, setScrollHeader] = useState(false);
  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY > 200) {
        setScrollHeader(true);
      } else {
        setScrollHeader(false);
      }
    };

    window.addEventListener("scroll", changeColor);
  }, []);
  return (
    <>
      <header
        className={`${
          scrollHeader ? "opacity-0" : "opacity-100 z-[9999]"
        } fixed top-0 left-0 right-0 h-16 bg-transparent px-4 duration-200`}
      >
        <div className="h-full max-w-max-container mx-auto flex items-center justify-end">
          <Link className="btn border-border-btn bg-black/70 hover:bg-bg-hover hover:text-black">
            ENTRAR
          </Link>
        </div>
      </header>
      <header
        className={`${
          scrollHeader ? "opacity-100 z-[9999]" : "opacity-0"
        } fixed top-0 left-0 right-0 h-16 bg-nav-pos-scroll px-4 duration-200`}
      >
        <div className="h-full max-w-max-container mx-auto flex items-center justify-between">
          <Link>
            <img src={logo} alt="/" className="w-16 md:w-20" />
          </Link>
          <div className="flex gap-4">
            <Link className="btn border-bg-btn bg-bg-btn hover:bg-bg-btn-hover ">
              ASSINE AGORA
            </Link>
            <Link className="btn border-border-btn bg-transparent hover:bg-bg-hover hover:text-black ">
              ENTRAR
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
