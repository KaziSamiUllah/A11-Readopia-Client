import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import { useEffect, useState } from "react";

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
      <div className="grid grid-cols-3 gap-5 p-10">
        {categories.map((category, idx) => (
          <div key={idx} data-aos="zoom-in">
            <div className="card w-full bg-base-100 shadow-xl image-full">
              <figure className="h-64">
                <img src={category.img} alt={category.name} />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-white">{category.name}</h2>
                <p className="text-white">{category.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
