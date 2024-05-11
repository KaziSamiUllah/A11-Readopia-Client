import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { useContext } from "react";

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
  const { user, SignOut } = useContext(AuthContext);
  // console.log(user)
  const handleSingOut = () => {
    SignOut();
  };

  return (
    <div className="px-16">
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
          <Link to="/" className="rounded-2xl btn btn-ghost text-xl briem-hand bg-red-500 px-1">
            <img
              className="w-10 bg-orange-300 rounded-xl mr-2"
              src="https://i.ibb.co/Rg37txC/icons8-book-stack-100.png"
              alt=""
            />
            <h1 className="text-3xl pb-2 pr-2"><span className="text-orange-300 ">Read</span>opia</h1>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-lg font-semibold">
            {NavLinks}
          </ul>
        </div>
        <div className="navbar-end gap-5">
          <input
            // onChange={handleTheme}
            type="checkbox"
            value="luxury"
            className="toggle theme-controller bg-orange-300 border-sky-400 [--tglbg:theme(colors.slate.900)] checked:bg-lime-50 checked:border-red-300 checked:[--tglbg:theme(colors.orange.300)] row-start-1 col-start-1 col-span-2"
          />
          {user ? (
            // <div className="avatar">

            <div className="dropdown dropdown-hover">
              <div tabIndex={0} role="button" className=" m-1">
                <div className="w-10 mask mask-squircle">
                  <img src={user.photoURL} />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="right-0 dropdown-content z-[10] menu p-2 shadow bg-base-100 rounded-box w-fit space-y-5 "
              >
                <li>{user.displayName}</li>
                <li>{user.email}</li>
                <li>
                  <button className="btn" onClick={handleSingOut}>
                    Sign Out
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            // </div>
            <Link to="/login" className="btn">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Nav;
