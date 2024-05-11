import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../Providers/AuthProvider";
import 'animate.css';
import { toast } from "react-toastify";


const Login = () => {
    const { SingIn, signInWithGoogle } = useContext(AuthContext)
  const Navigate = useNavigate();
  const location = useLocation();
  const [showPass, setShowPass] = useState(false);

  const toggleView = () => {
    setShowPass(!showPass);
    console.log(showPass);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");

    SingIn(email, password)
    .then((res)=>{
      console.log( res.user?.displayName)
        toast(`welcome back ${res.user?.displayName}`)
    })
    .catch(error=>{ 
      toast(error.message)
    })

  };

  const handleGoogleLogIn = () => {
    signInWithGoogle();
  };


  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        <div className="lg:p-14 ">
          <div className=" animate__bounceIn mx-auto p-8 bg-slate-100 rounded-xl shadow-lg  max-w-lg ">
            <div className="flex justify-center items-center">
              <h1 className="text-black font-bold text-2xl">Sign In</h1>
            </div>
            <form className="mt-8 space-y-6 mx-auto " onSubmit={handleLogin}>
              <div className="flex flex-col space-y-5">
                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border text-black border-gray-300 placeholder-gray-500 bg-transparent focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Email address"
                />
                <div className="flex items-center relative">
                  <div
                    className="absolute right-3 top-1/3"
                    onClick={toggleView}
                  >
                    {!showPass ? <FaEye /> : <FaEyeSlash />}
                  </div>
                  <input
                    type={showPass ? "text" : "password"}
                    name="password"
                    autoComplete="current-password"
                    required
                    className="appearance-none rounded-md block w-full px-3 py-2 border bg-transparent text-black border-gray-300 placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm "
                    placeholder="Password"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Sign in
              </button>
              <label>
                <a href="#" className="text-black">
                  Forgot Password?
                </a>
              </label>
              <h2 className="text-black">
                Do not have an account?
                <Link to="/register" className="text-blue-500 font-bold">
                  REGISTER
                </Link>
              </h2>
            </form>
            <div
              onClick={handleGoogleLogIn}
              className="text-black mt-5 text-4xl  flex w-fit mx-auto btn rounded-full px-1"
            >
              <FcGoogle />
            </div>
          </div>
        </div>
      </div>
      <div className="flex-none"></div>
    </div>
  );
};

export default Login;
