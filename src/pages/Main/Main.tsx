import { useState } from "react";

import { HamburgerMenu } from "../../components/Header/components/HamburgerMenu/HamburgerMenu";
import { Header } from "../../components/Header/Header";
import { TopBanner } from "../../components/TopBanner/TopBanner";

export const Main = () => {
  const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = useState(true);

  return (
    <div className="flex flex-col min-h-screen">
      <TopBanner />
      <Header
        setIsHamburgerMenuOpen={() => setIsHamburgerMenuOpen((prev) => !prev)}
        isHamburgerMenuOpen={isHamburgerMenuOpen}
      />
      {isHamburgerMenuOpen && <HamburgerMenu />}
    </div>
  );
};
