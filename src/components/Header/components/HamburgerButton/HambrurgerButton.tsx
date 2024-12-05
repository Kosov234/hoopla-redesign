type HamburgerButtonProps = {
  setIsHamburgerMenuOpen: () => void;
  isHamburgerMenuOpen: boolean;
};

export const HamburgerButton = ({
  setIsHamburgerMenuOpen,
  isHamburgerMenuOpen,
}: HamburgerButtonProps) => {
  return (
    <div className="xl:hidden text-4xl text-hoopla-black">
      <button onClick={() => setIsHamburgerMenuOpen()}>
        {isHamburgerMenuOpen ? (
          <i className="bx bx-x " />
        ) : (
          <i className="bx bx-menu" />
        )}
      </button>
    </div>
  );
};
