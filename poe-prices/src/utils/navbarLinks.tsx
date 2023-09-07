import { LinkProps } from "../Interfaces/Link";
import {
  chaosImg,
  divineImg,
  logoBaseTypes,
  logoBeasts,
  logoDivinationCards,
  logoEssences,
  logoFossils,
  logoFragments,
  logoHelmetEnchants,
  logoIncubators,
  logoMaps,
  logoOils,
  logoResonators,
  logoScarabs,
  logoSkillGems,
  logoUniqueAccessories,
  logoUniqueArmours,
  logoUniqueFlasks,
  logoUniqueJewels,
  logoUniqueMaps,
  logoUniqueWeapons,
} from "./consts";

export const navbarLinks: LinkProps[] = [
  {
    name: "Currencies",
    icon: <img src={chaosImg} alt="chaos_orb" className="w-50-px h-50-px" />,
    subLinks: [
      {
        name: "Currency",
        path: "/items/currency",
        icon: (
          <img src={divineImg} alt="chaos_orb" className="w-40-px h-40-px" />
        ),
      },
      {
        name: "Fragments",
        path: "/items/fragment",
        icon: (
          <img
            src={logoFragments}
            alt="logo_fragments"
            className="w-40-px h-40-px"
          />
        ),
      },
    ],
  },
  {
    name: "Uniques items",
    icon: (
      <img
        src={logoUniqueArmours}
        alt="chaos_orb"
        className="w-50-px h-50-px"
      />
    ),
    subLinks: [
      {
        name: "Unique Maps",
        path: "/items/uniqueMap",
        icon: (
          <img
            src={logoUniqueMaps}
            alt="Unique Maps"
            className="w-40-px h-40-px"
          />
        ),
      },
      {
        name: "Unique Jewels",
        path: "/items/uniqueJewel",
        icon: (
          <img
            src={logoUniqueJewels}
            alt="Unique Jewels"
            className="w-40-px h-40-px"
          />
        ),
      },
      {
        name: "Unique Flasks",
        path: "/items/uniqueFlask",
        icon: (
          <img
            src={logoUniqueFlasks}
            alt="Unique Flasks"
            className="w-40-px h-40-px"
          />
        ),
      },
      {
        name: "Unique Weapons",
        path: "/items/uniqueWeapon",
        icon: (
          <img
            src={logoUniqueWeapons}
            alt="Unique Weapons"
            className="w-40-px h-40-px"
          />
        ),
      },
      {
        name: "Unique Armours",
        path: "/items/uniqueArmour",
        icon: (
          <img
            src={logoUniqueArmours}
            alt="Unique Armours"
            className="w-40-px h-40-px"
          />
        ),
      },
      {
        name: "Unique Accessories",
        path: "/items/uniqueAccessory",
        icon: (
          <img
            src={logoUniqueAccessories}
            alt="Unique Accessories"
            className="w-40-px h-40-px"
          />
        ),
      },
    ],
  },
  {
    name: "Drops",
    icon: <img src={logoScarabs} alt="chaos_orb" className="w-50-px h-50-px" />,
    subLinks: [
      {
        name: "Oil",
        path: "/items/oil",
        icon: (
          <img src={logoOils} alt="logo_oils" className="w-40-px h-40-px" />
        ),
      },
      {
        name: "Incubators",
        path: "/items/incubator",
        icon: (
          <img
            src={logoIncubators}
            alt="Incubators"
            className="w-40-px h-40-px"
          />
        ),
      },
      {
        name: "Scarabs",
        path: "/items/scarab",
        icon: (
          <img src={logoScarabs} alt="Scarabs" className="w-40-px h-40-px" />
        ),
      },
      {
        name: "Fossils",
        path: "/items/fossil",
        icon: (
          <img src={logoFossils} alt="Fossils" className="w-40-px h-40-px" />
        ),
      },
      {
        name: "Resonators",
        path: "/items/resonator",
        icon: (
          <img
            src={logoResonators}
            alt="Resonators"
            className="w-40-px h-40-px"
          />
        ),
      },
      {
        name: "Essence",
        path: "/items/essence",
        icon: (
          <img src={logoEssences} alt="Essence" className="w-40-px h-40-px" />
        ),
      },
    ],
  },
  {
    name: "Misc.",
    icon: <img src={chaosImg} alt="chaos_orb" className="w-50-px h-50-px" />,
    subLinks: [
      {
        name: "Divination Cards",
        path: "/items/divinationCard",
        icon: (
          <img
            src={logoDivinationCards}
            alt="Divination Cards"
            className="w-40-px h-40-px"
          />
        ),
      },
      {
        name: "Skill Gems",
        path: "/items/gem",
        icon: (
          <img
            src={logoSkillGems}
            alt="Skill Gems"
            className="w-40-px h-40-px"
          />
        ),
      },
      {
        name: "Base Types",
        path: "/items/baseType",
        icon: (
          <img
            src={logoBaseTypes}
            alt="Base Types"
            className="w-40-px h-40-px"
          />
        ),
      },
      {
        name: "Helmet Enchants",
        path: "/items/helmetEnchant",
        icon: (
          <img
            src={logoHelmetEnchants}
            alt="Helmet Enchants"
            className="w-40-px h-40-px"
          />
        ),
      },
      {
        name: "Maps",
        path: "/items/map",
        icon: <img src={logoMaps} alt="Maps" className="w-40-px h-40-px" />,
      },
      {
        name: "Beasts",
        path: "/items/beast",
        icon: <img src={logoBeasts} alt="Beasts" className="w-40-px h-40-px" />,
      },
    ],
  },
];
