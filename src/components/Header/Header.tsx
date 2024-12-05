import { AuthorizationButtons } from "./components/AuthorizationButtons/AuthorizationButtons";
import { HamburgerButton } from "./components/HamburgerButton/HambrurgerButton";
import { NavigationButtonsDesktop } from "./components/NavigationButtonsDesktop/NavigationButtonsDesktop";

import HooplaLogo from "../../assets/images/hoopla-logo.svg?react";

type HeaderProps = {
  setIsHamburgerMenuOpen: () => void;
  isHamburgerMenuOpen: boolean;
};

export const Header = ({
  setIsHamburgerMenuOpen,
  isHamburgerMenuOpen,
}: HeaderProps) => {
  return (
    <header className="flex flex-col">
      <div className="flex justify-between items-center font-aeonikPro-medium xl:border-b xl:border-solid border-hoopla-black[.12] px-2 py-4">
        <HooplaLogo className="max-w-[117px] xl:max-w-[170px] flex justify-start" />
        <NavigationButtonsDesktop />
        <AuthorizationButtons />
        <HamburgerButton
          setIsHamburgerMenuOpen={() => setIsHamburgerMenuOpen()}
          isHamburgerMenuOpen={isHamburgerMenuOpen}
        />
      </div>
    </header>
  );
};
