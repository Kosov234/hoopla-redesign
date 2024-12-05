import { HamburgerMenuAuthorizationsButtons } from "./components/HamburgerMenuAuthorizationButtons/HamburgerMenuAuthorizationsButtons";
import { HamburgerMenuNavigation } from "./components/HamburgerMenuNavigation/HamburgerMenuNavigation";

export const HamburgerMenu = () => {
  return (
    <div className="xl:hidden flex flex-col grow justify-between">
      <HamburgerMenuNavigation />
      <HamburgerMenuAuthorizationsButtons />
    </div>
  );
};
