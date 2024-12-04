import { HamburgerMenu } from "../../components/Header/components/HamburgerMenu/HamburgerMenu";
import { Header } from "../../components/Header/Header";
import { TopBanner } from "../../components/TopBanner/TopBanner";

export const Main = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <TopBanner />
      <Header />
      <HamburgerMenu />
    </div>
  );
};
