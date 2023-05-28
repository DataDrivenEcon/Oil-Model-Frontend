import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-transparent pt-5">
      <nav className="mx-[7.5%]">
        <div className="navbar">
          <div className="flex-1">
            <a className="normal-case font-semibold text-white text-xl cursor-pointer">Brand Name</a>
          </div>
          <div className="flex-none">
            <ul className="gap-10 items-center menu-horizontal px-1">
              <li className="font-inter font-semibold text-white capitalize cursor-pointer">
                <a>Home</a>
              </li>
              <li className="font-inter font-semibold text-white capitalize cursor-pointer">
                <a>About</a>
              </li>

              <li className="font-inter font-semibold text-white capitalize cursor-pointer">
                <a>Contact</a>
              </li>
              <li className="font-inter font-semibold text-white capitalize cursor-pointer">
                <a>Testimonials</a>
              </li>
              <li className="border-1 border-[#ffa500] font-inter font-semibold text-white capitalize cursor-pointer btn btn-outline hover:bg-[#ffa500]">
                <Link to="/login">Log in</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
