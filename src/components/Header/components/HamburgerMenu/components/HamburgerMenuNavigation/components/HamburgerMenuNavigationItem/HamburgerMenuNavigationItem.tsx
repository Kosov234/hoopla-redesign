import classNames from "classnames";
import { MenuItem } from "../../../../../../types";
import { HamburgerMenuNavigationSubitem } from "./components/HamburgerMenuNavigationSubitem/HamburgerMenuNavigationSubitem";

type Props = {
  item: MenuItem;
  index: number;
  activeMenu: string | null;
  setActiveMenu: () => void;
};

export const HamburgerMenuNavigationItem = ({
  item,
  index,
  activeMenu,
  setActiveMenu,
}: Props) => {
  return (
    <div key={index}>
      <div
        className={classNames("flex items-center justify-between text-2xl", {
          "text-hoopla-electric-blue": activeMenu === item.title,
        })}
      >
        <button
          onClick={() => setActiveMenu()}
          className="flex items-center justify-between w-full text-left"
        >
          {item.title}
        </button>
        <i className="bx bx-chevron-down" />
      </div>

      {activeMenu === item.title && item.items && (
        <div className="flex flex-col gap-2 ">
          {item.items.map((subItem) => (
            <HamburgerMenuNavigationSubitem subItem={subItem} />
          ))}
        </div>
      )}
    </div>
  );
};
