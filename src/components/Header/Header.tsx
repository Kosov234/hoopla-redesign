import HooplaLogo from "../../assets/images/hoopla-logo.svg?react";
import { AuthorizationButtons } from "./components/AuthorizationButtons/AuthorizationButtons";
import { NavigationButtonsDesktop } from "./components/NavigationButtonsDesktop/NavigationButtonsDesktop";

export const Header = () => {
  return (
    <header>
      <div className="flex justify-between border-1 border-b border-solid border-hoopla-black[.12] px-16">
        <HooplaLogo />
        <NavigationButtonsDesktop />
        <AuthorizationButtons />
      </div>
    </header>
  );
};
