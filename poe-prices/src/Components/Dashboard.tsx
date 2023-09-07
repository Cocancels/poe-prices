import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { navbarLinks } from "../utils/navbarLinks";
import { LinkProps } from "../Interfaces/Link";
import { IoMdArrowDropright, IoMdArrowDropdown } from "react-icons/io";
import { logoPoe } from "../utils/consts";

interface DashboardProps {
  children?: React.ReactNode;
}

interface SidebarProps {
  links: LinkProps[];
}

interface SidebarLinkProps {
  link: LinkProps;
  isSublink?: boolean;
}

const SidebarLink = (props: SidebarLinkProps) => {
  const { link } = props;
  const location = useLocation();

  const [isOpen, setIsOpen] = useState(false);

  const isCurrentPath = location.pathname === link.path;

  return (
    <div className="flex justify-center w-full">
      {link.path ? (
        <Link className={props.isSublink ? "w-11/12" : "w-full"} to={link.path}>
          <div
            className={
              (props.isSublink ? "ml-5" : "mx-3") +
              " flex justify-start items-center cursor-pointer hover:bg-sky-700 w-11/12 rounded-xl" +
              (isCurrentPath ? " bg-sky-700" : "")
            }
          >
            <div className="mr-2">{link.icon}</div>
            <p
              className={
                (props.isSublink ? "text-sm" : "text-xl") + " font-bold"
              }
            >
              {link.name}
            </p>
          </div>
        </Link>
      ) : (
        <div className="flex flex-col align-top w-full">
          <div
            className="flex items-center cursor-pointer justify-between w-11/12 rounded-xl mx-3 hover:bg-sky-700 "
            onClick={() => !props.isSublink && setIsOpen(!isOpen)}
          >
            <div className="flex items-center">
              <div className="mr-2">{link.icon}</div>
              <p className="text-xl font-bold">{link.name}</p>
            </div>
            <div className="ml-5">
              {!isOpen ? (
                <IoMdArrowDropright size={30} className="place-self-end" />
              ) : (
                <IoMdArrowDropdown className="place-self-end" size={30} />
              )}
            </div>
          </div>
          {link.subLinks && (
            <div className="flex flex-col items-start justify-center my-2 text-xs">
              {isOpen &&
                link.subLinks.map((sublink: LinkProps) => (
                  <div className="ml-10 py-2 border-l w-9/12">
                    <SidebarLink link={sublink} isSublink />
                  </div>
                ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

const Sidebar = (props: SidebarProps) => {
  const { links } = props;

  return (
    <div className="bg-gray-800 text-white w-64 h-screen fixed overflow-y-auto">
      <div>
        <img
          className="mx-auto text-center mb-10"
          src={logoPoe}
          alt="logo-poe"
        />
        {links.map((link: LinkProps) => (
          <SidebarLink link={link} />
        ))}
      </div>
    </div>
  );
};

const Navbar = () => {
  return (
    <div className="bg-white-500 p-4">
      <div className="flex justify-end">
        <h2 className="text-black text-xl font-semibold">BETA</h2>
      </div>
    </div>
  );
};

export const Dashboard = (props: DashboardProps) => {
  const { children } = props;

  return (
    <div className="flex">
      <Sidebar links={navbarLinks} />
      <div className="flex-1 ml-64">
        <Navbar />
        <div className="p-4 overflow-y-auto">{children}</div>
      </div>
    </div>
  );
};
