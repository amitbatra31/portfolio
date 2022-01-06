import React, { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import WorkIcon from "@mui/icons-material/Work";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const classString =
    "bg-white vertical text-2xl tracking-widest font-mono relative fixed shadow-xl primary-navigation w-fit-content ";

  return (
    <nav
      data-visible="false"
      className={!openMenu ? classString + "px-10" : classString + " px-32"}
    >
      <span className="flex-shrink-1 absolute right-5 top-8 leading-2 text-xl">MY PORTFOLIO</span>
      {console.log(openMenu)}
      {/* <i
          className="navToggle "
          onClick={() => (!openMenu ? setOpenMenu(true) : setOpenMenu(false))}
        >
          {!openMenu ? <MenuIcon /> : <CloseIcon />}
        </i> */}
      {!openMenu ? (
        <div className="flex absolute bottom-20 right-5 inset-7 gap-10 rotate-180">
          <i
            className="navToggle "
            onClick={() => (!openMenu ? setOpenMenu(true) : setOpenMenu(false))}
          >
            <MenuIcon />
          </i>
          <i>
            <HomeIcon />
          </i>
          <i>
            <InfoIcon />
          </i>
          <i>
            <WorkIcon />
          </i>
          <i>
            <ContactSupportIcon />
          </i>
        </div>
      ) : (
        <div className="flex  absolute bottom-20 right-5 inset-7  rotate-180">
          <i
            className="navToggle justify-self-start "
            onClick={() => (!openMenu ? setOpenMenu(true) : setOpenMenu(false))}
          >
            <CloseIcon />
          </i>
          <div className="flex flex-col-reverse items-center">
            <i>
              <HomeIcon />
            </i>
            <p className="flex -rotate-90 tracking-wide w-full py-2 items-center text-sm">
              Home
            </p>
          </div>

          <div className="flex flex-col-reverse items-center">
            <i>
              <InfoIcon />
            </i>
            <p className="flex -rotate-90 tracking-wide w-full items-center text-sm">
              About me
            </p>
          </div>
          <div className="flex flex-col-reverse items-center">
            <i>
              <WorkIcon />
            </i>
            <p className="flex -rotate-90 tracking-wide w-full items-center text-sm">
              Projects
            </p>
          </div>
          <div className="flex flex-col-reverse items-center">
            <i>
              <ContactSupportIcon />
            </i>
            <p className="flex -rotate-90 tracking-wide w-full items-center text-sm">
              Contact me
            </p>
          </div>
        </div>
      )}
    </nav>
  );
}
