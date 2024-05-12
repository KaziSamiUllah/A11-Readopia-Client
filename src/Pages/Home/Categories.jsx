import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TypingEffect from "../../Shared Components/TypingEffect";

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
        (error);
      });
  }, []);
  (categories);
  const text = "Explore popular books in";
  const wordArray = [
    "Fiction",
    "Nonfiction",
    "Mystery",
    "Romance",
    "Science Fiction",
    "Fantasy",
    "Historical Fiction",
    "Biography",
    "Memoir",
    "Self-help",
    "Personal Development",
    "Young Adult",
    "Children's Literature",
    "Horror",
    "Poetry",
    "Adventure",
    "Crime",
    "Detective",
    "Science",
    "Nature",
    "Travel",
    "Philosophy",
    "Religion",
    "Spirituality",
    "Business",
    "Finance",
    "Cookbooks",
    "Food",
  ];

  return (
    <div id="category">
      <div className="font-bold text-4xl text-center mt-10 ">
        <TypingEffect text={text} wordArray={wordArray}></TypingEffect>
      </div>
      <div className="grid grid-cols-4 gap-5 p-10">
        {categories.map((category, idx) => (
          <div key={idx} data-aos="zoom-in">
            <Link to={`categories/${category.name}`}>
              <div
                className="h-[40vh] bg-cover bg-center flex flex-col justify-center items-center text-center"
                style={{
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url(${category.img})`,
                }}
              >
                <div className="text-left p-10 space-y-5">
                  <h2 className="text-3xl font-bold text-white">
                    {category.name}
                  </h2>
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
