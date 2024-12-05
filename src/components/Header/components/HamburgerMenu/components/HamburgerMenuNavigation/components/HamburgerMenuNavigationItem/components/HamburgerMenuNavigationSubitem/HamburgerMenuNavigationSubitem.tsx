import { MenuSubItem } from "../../../../../../../../types";

type HamburgerMenuNavigationSubitemProps = {
  subItem: MenuSubItem;
};

export const HamburgerMenuNavigationSubitem = ({
  subItem,
}: HamburgerMenuNavigationSubitemProps) => {
  return (
    <div className="flex justify-between items-center pl-3 py-3 pr-6 rounded text-hoopla-black hover:bg-hoopla-bg-gray">
      <div key={subItem.title} className="flex gap-2 ">
        {subItem.icon && <subItem.icon />}
        <a key={subItem.title} href={subItem.path}>
          {subItem.title}
        </a>
      </div>

      {subItem.subItems && <i className="bx bx-chevron-down text-xl" />}
    </div>
  );
};
