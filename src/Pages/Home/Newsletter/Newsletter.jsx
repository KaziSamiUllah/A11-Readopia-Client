import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";

const Newsletter = () => {
    const {user} = useContext(AuthContext)
  return (
    <div className="rounded-2xl bg-[url('https://c1.wallpaperflare.com/preview/791/207/698/dark-gloomy-books-pages.jpg')]  bg-opacity-20 bg-center">
    <div className=" rounded-lg shadow-md p-10 m-10 text-white w-1/2 mx-auto text-center">
      <h2 className="text-3xl font-bold mb-2">Subscribe to Our Newsletter</h2>
      <p className=" mb-4">Stay updated with our latest books, events, and news!</p>
      <form className="flex items-center" action="#" method="post">
        <input type="email" id="email" name="email" defaultValue={user?.email} required className=" bg-white text-black flex-1 py-2 px-4 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
        <button type="submit" className="bg-red-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">Subscribe</button>
      </form>
    </div>
    </div>
  );
}

export default Newsletter;
