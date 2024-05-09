import { Link } from "react-router-dom";

const Nav = () => {
  const NavLinks = (
    <>
      <li>
        <Link>Home</Link>
      </li>
      <li>
        <Link to="/allBooks">All Books</Link>
      </li>
      <li>
        <Link to="/addBooks">Add books</Link>
      </li>
      <li>
        <Link to="borrowedBooks">Borrowed Books</Link>
      </li>
    </>
  );

  return (
    <div className="">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {NavLinks}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl briem-hand gap-0 ">
            <img
              className="w-8 bg-orange-300 rounded-xl mr-2"
              src="https://i.ibb.co/Rg37txC/icons8-book-stack-100.png"
              alt=""
            />
            <span className="text-orange-300">Read</span>opia
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{NavLinks}</ul>
        </div>
        <div className="navbar-end gap-5">
          <input
            type="checkbox"
            value="luxury"
            className="toggle theme-controller bg-orange-300 border-sky-400 [--tglbg:theme(colors.sky.500)] checked:bg-lime-50 checked:border-blue-800 checked:[--tglbg:theme(colors.blue.900)] row-start-1 col-start-1 col-span-2"
          />
          <Link to="/login" className="btn">Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;
