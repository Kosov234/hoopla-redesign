import { FunctionComponent, SVGProps } from "react";

export type FirstLevelMenuItem = {
  title: string;
  secondLevelItems?: SecondLeveMenuItem[];
  path?: string;
};

export type SecondLeveMenuItem = {
  title: string;
  path: string;
  icon: FunctionComponent<SVGProps<SVGSVGElement>>;
  thirdLevelItems?: ThirdLevelMenuItem[];
};

export type ThirdLevelMenuItem = {
  title: string;
  path: string;
};
