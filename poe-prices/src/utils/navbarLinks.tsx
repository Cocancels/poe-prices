import { LinkProps } from "../Interfaces/Link";
import { chaosImg } from "./consts";

export const navbarLinks: LinkProps[] = [
  {
    name: "Items",
    icon: <img src={chaosImg} alt="chaos_orb" className="w-50-px h-50-px" />,
    subLinks: [
      {
        name: "Chaos Orb",
        path: "/currencies/chaos-orb",
        icon: (
          <img src={chaosImg} alt="chaos_orb" className="w-40-px h-40-px" />
        ),
      },
    ],
  },
  {
    name: "Currency",
    path: "/currency",
    icon: <img src={chaosImg} alt="chaos_orb" className="w-50-px h-50-px" />,
  },
];
