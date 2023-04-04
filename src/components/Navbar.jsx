import React, { useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks, navLinksEn } from "../constants";
import { logo, menu, close, github, linkedInLogo } from "../assets";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { changeLanguage } from "../redux/actions";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {
    setIsChecked(!isChecked);
  };

  let dispatch = useDispatch();
  console.log(isChecked);
  useEffect(() => {
    dispatch(changeLanguage(isChecked));
  }, [dispatch, isChecked]);

  let source = isChecked ? navLinksEn : navLinks;

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7x1 mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            // para que vaya al top de la pagina
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Diego Llaya &nbsp;<span className="sm:block hidden">| FS Dev</span>
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10 items-center">
          <div className="flex justify-around gap-2">
            <div
              className={`${
                isChecked ? "text-secondary" : "text-white"
              } text-[18px] font-medium`}
            >
              Sp
            </div>
            <div className="flex justify-center items-center">
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={isChecked}
                  onChange={handleChange}
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600" />
                <span className="text-sm font-medium text-white-900 dark:text-gray-300"></span>
              </label>
            </div>
            <div
              className={`${
                isChecked ? "text-white" : "text-secondary"
              } text-[18px] font-medium`}
            >
              En
            </div>
          </div>
          {source.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
          <li>
            <div className="flex gap-1">
              <Link
                to="https://www.linkedin.com/in/diego-llaya-01272652/"
                className="flex items-center gap-2"
              >
                <img
                  src={linkedInLogo}
                  alt="link linkedin Diego Llaya"
                  className="w-9 h-9 object-contain"
                />
              </Link>
              <Link
                to="https://github.com/goya0310"
                className="flex items-center gap-2"
              >
                <img
                  src={github}
                  alt="link github Diego Llaya"
                  className="w-9 h-9 object-contain"
                />
              </Link>
            </div>
          </li>
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
        <div className="flex justify-around gap-2 mr-10">
            <div
              className={`${
                isChecked ? "text-secondary" : "text-white"
              } text-[18px] font-medium`}
            >
              Sp
            </div>
            <div className="flex justify-center items-center">
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={isChecked}
                  onChange={handleChange}
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600" />
                <span className="text-sm font-medium text-white-900 dark:text-gray-300"></span>
              </label>
            </div>
            <div
              className={`${
                isChecked ? "text-white" : "text-secondary"
              } text-[18px] font-medium`}
            >
              En
            </div>
          </div>
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 rigth-0 mx-2 my-2 min-w-[140px] z-10 rounded-xl`}
            // black-gradient es el color de la ventana del menu, ver de Cambiar
          >
            <ul className="list-none flex sm:flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-white" : "text-secondary"
                  } font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
              <li>
                <div className="flex">
                  <Link
                    to="https://www.linkedin.com/in/diego-llaya-01272652/"
                    className="flex items-center gap-2"
                  >
                    <img
                      src={linkedInLogo}
                      alt="link linkedin Diego Llaya"
                      className="w-9 h-9 object-contain"
                    />
                  </Link>
                  <Link
                    to="https://github.com/goya0310"
                    className="flex items-center gap-2"
                  >
                    <img
                      src={github}
                      alt="link github Diego Llaya"
                      className="w-9 h-9 object-contain"
                    />
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
