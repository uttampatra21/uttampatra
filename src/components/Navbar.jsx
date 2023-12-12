import React, { useEffect, useState } from "react";
import { styles } from "../style";
import { navLinks } from "../constants";
import { Link } from "react-router-dom";
import { close, menu } from "../assets";
const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`
  ${styles.paddingX}`}
      w-full
      flex
      items-center
      py-5
      fixed
      top-0
      z-20
    >
      <div className="w-full py-2 flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img
            src="https://avatars.githubusercontent.com/u/108145016?v=4"
            alt="uttam"
            className="w-10 h-10 object-cover rounded-full"
          />
          <p className="text-white text-[18px] font-bold cursor-pointer ">
            Uttam{" "}
            <span className="sm:block hidden">JavaScript Developer</span>
          </p>
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => {
            return (
              <li
                key={link.id}
                className={`${
                  active === link.title ? "text-white" : "text-secondary"
                }   hover:text-white text-[18px] font-medium`}
                onClick={() => setActive(link.title)}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            );
          })}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            className="h-[28px] w-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6  absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
            style={{ backgroundColor: "#0f172a" }}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => {
                return (
                  <li
                    key={link.id}
                    className={`${
                      active === link.title ? "text-white" : "text-secondary"
                    }  font-poppins font-medium cursor-pointer text-[16px]`}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(link.title);
                    }}
                  >
                    <a href={`#${link.id}`}>{link.title}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
