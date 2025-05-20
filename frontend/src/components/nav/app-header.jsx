import Navbar from "./nav-topbar";

const Header = () => {
  return (
    <header className="fixed w-full top-0 z-10 backdrop-blur-lg py-3 ">
      <div className="flex md:block justify-between ">
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
