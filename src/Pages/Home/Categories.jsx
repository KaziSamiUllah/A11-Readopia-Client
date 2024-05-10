import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Categories = () => {
  AOS.init();

  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/categories")
      .then((res) => {
        setCategories(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(categories);

  return (
    <div>
      <h1 className="font-bold text-3xl text-center ">
        {" "}
        Popular book Categories
      </h1>
      <div className="grid grid-cols-4 gap-5 p-10">
        {categories.map((category, idx) => (
          // <div key={idx} data-aos="zoom-in">
          //   <Link to={`categories/${category.name}`}>
          //   <div className="card w-full bg-base-100 shadow-xl image-full">
          //     <figure className="h-[40vh]">
          //       <img src={category.img} alt={category.name} />
          //     </figure>
          //     <div className="card-body">
          //       <div>
          //       <h2 className="card-title text-white">{category.name}</h2>
          //       <p className="text-white">{category.description}</p>
          //       </div>
          //     </div>
          //   </div>
          //   </Link>
          // </div>

          <div key={idx} data-aos="zoom-in">
            <Link to={`categories/${category.name}`}>
              <div
                className="h-[40vh] bg-cover bg-center flex flex-col justify-center items-center text-center"
                style={{
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url(${category.img})`
                }}>
                <div className="text-left p-10 space-y-5">
                  <h2 className="text-3xl font-bold text-white">{category.name}</h2>
                  <p className="text-white">{category.description}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
