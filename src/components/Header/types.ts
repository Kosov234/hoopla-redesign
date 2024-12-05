import { FunctionComponent, SVGProps } from "react";

export type MenuItem = {
  title: string;
  items?: MenuSubItem[];
};

export type MenuSubItem = {
  title: string;
  path: string;
  icon?: FunctionComponent<SVGProps<SVGSVGElement>>;
  subItems?: {
    title: string;
    path: string;
  }[];
};
