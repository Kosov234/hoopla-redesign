import { useState } from "react";

import { menuItems } from "../../../../constants";
import { HamburgerMenuNavigationItem } from "./components/NavigationItemFirstLevel/NavigationItemFirstLevel";

export const HamburgerMenuNavigation = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  return (
    <nav className={"xl:hidden flex flex-col gap-8 font-aeonikPro-medium px-4"}>
      {menuItems.map((item, index) => (
        <HamburgerMenuNavigationItem
          item={item}
          index={index}
          key={item.title}
          activeMenu={activeMenu}
          setActiveMenu={() =>
            setActiveMenu(activeMenu === item.title ? null : item.title)
          }
        />
      ))}
    </nav>
  );
};
