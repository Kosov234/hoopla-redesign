export const HamburgerMenuNavigation = () => {
  return (
    <nav className="xl:hidden flex flex-col gap-8 font-aeonikPro-medium px-7 text-2xl">
      <div className=" flex items-center justify-between">
        <button>Product</button>
        <i className="bx bx-chevron-down text-hoopla-gray" />
      </div>
      <div className="flex items-center justify-between ">
        <button>Solutions</button>
        <i className="bx bx-chevron-down text-hoopla-gray" />
      </div>
      <div className="flex items-center justify-between">
        <button>Resources</button>
        <i className="bx bx-chevron-down text-hoopla-gray" />
      </div>
      <div className="flex items-center justify-between">
        <button>Partners</button>
        <i className="bx bx-chevron-down text-hoopla-gray" />
      </div>
      <div className="flex items-center justify-between">
        <button>Landing Page</button>
        <i className="bx bx-chevron-down text-hoopla-gray" />
      </div>
      <div className="flex items-center justify-between">
        <button>Contact Sales</button>
        <i className="bx bx-chevron-down text-hoopla-gray" />
      </div>
    </nav>
  );
};
