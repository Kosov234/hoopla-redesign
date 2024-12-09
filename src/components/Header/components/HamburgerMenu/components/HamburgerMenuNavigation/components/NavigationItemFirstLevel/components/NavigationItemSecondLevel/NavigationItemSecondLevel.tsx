import { useState } from "react";

import { SecondLeveMenuItem } from "../../../../../../../../types";
import { NavigationItemThirdLevel } from "./components/NavigationItemThirdLevel/NavigationItemThirdLevel";
import classNames from "classnames";

type NavigationItemSecondLevelProps = {
  subItem: SecondLeveMenuItem;
};

export const NavigationItemSecondLevel = ({
  subItem,
}: NavigationItemSecondLevelProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div
        className={classNames(
          "flex justify-between items-center pl-3 py-3 pr-6 rounded text-hoopla-black",
          {
            "bg-hoopla-bg-gray": isOpen,
          }
        )}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div key={subItem.title} className="flex gap-2 ">
          <subItem.icon />
          <a key={subItem.title} href={subItem.path}>
            {subItem.title}
          </a>
        </div>

        {subItem.thirdLevelItems && (
          <i className="bx bx-chevron-down text-xl" />
        )}
      </div>

      {isOpen && subItem.thirdLevelItems && (
        <div
          className="flex flex-col gap-2 mx-6 py-2 border-l"
          style={{
            borderImageSource:
              "linear-gradient(to bottom, rgb(241 241 241 / 1), rgb(241 241 241 / 0))",
            borderImageSlice: "1",
          }}
        >
          {subItem.thirdLevelItems.map((thirdLevelItem) => (
            <NavigationItemThirdLevel thirdLevelItem={thirdLevelItem} />
          ))}
        </div>
      )}
    </div>
  );
};
