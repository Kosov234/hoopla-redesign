import { ThirdLevelMenuItem } from "../../../../../../../../../../types";

type NavigationItemThirdLevelProps = {
  thirdLevelItem: ThirdLevelMenuItem;
};

export const NavigationItemThirdLevel = ({
  thirdLevelItem,
}: NavigationItemThirdLevelProps) => {
  return (
    <div className="flex justify-between items-center pl-7 py-3 pr-6 rounded text-hoopla-black font-aeonikPro-regular">
      <a key={thirdLevelItem.title} href={thirdLevelItem.path}>
        {thirdLevelItem.title}
      </a>
    </div>
  );
};
