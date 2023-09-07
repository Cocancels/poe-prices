import { useState } from "react";
import { IoMdArrowDropright, IoMdArrowDropdown } from "react-icons/io";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { LinkProps } from "../../Interfaces/Link";
import { logoPoe } from "../../utils/consts";

interface SidebarProps {
  links: LinkProps[];
}

interface SidebarLinkProps {
  link: LinkProps;
  isSublink?: boolean;
}

export const Sidebar = (props: SidebarProps) => {
  const { links } = props;

  return (
    <div className="bg-[#131A20] text-white w-64">
      <div className="h-full min-h-screen">
        <img
          className="mx-auto text-center mb-10"
          src={logoPoe}
          alt="logo-poe"
        />
        {links.map((link: LinkProps) => (
          <SidebarLink key={link.name} link={link} />
        ))}
      </div>
    </div>
  );
};

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
        <div className="flex flex-col align-top w-full my-2">
          <div
            className="flex items-center cursor-pointer justify-between w-11/12 rounded-xl mx-3 hover:bg-sky-700"
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
            <div
              className={
                (isOpen ? "my-2" : "") +
                " flex flex-col items-start justify-center text-xs"
              }
            >
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
