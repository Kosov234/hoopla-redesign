import HooplaLogo from "../../assets/images/hoopla-logo.svg?react";
import { AuthorizationButtons } from "./components/AuthorizationButtons/AuthorizationButtons";
import { HamburgerButton } from "./components/HamburgerButton/HambrurgerButton";
import { NavigationButtonsDesktop } from "./components/NavigationButtonsDesktop/NavigationButtonsDesktop";

export const Header = () => {
  return (
    <header className="flex flex-col">
      <div className="flex justify-between items-center font-aeonikPro-medium xl:border-b xl:border-solid border-hoopla-black[.12] px-2 py-4">
        <HooplaLogo className="max-h-[40px] max-w-[117px] lg:max-h-screen lg:max-w-[170px] flex justify-start" />
        <NavigationButtonsDesktop />
        <AuthorizationButtons />
        <HamburgerButton />
      </div>
    </header>
  );
};
