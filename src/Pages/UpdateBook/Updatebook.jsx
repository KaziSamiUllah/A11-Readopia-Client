import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

const Updatebook = () => {
  const { name } = useParams();
  const [updateDetails, setUpdate] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:5000/books/${name}`)
      .then((res) => setUpdate(res.data))
      .catch((error) => (error));
  }, []);
  
  const {_id, url, author, category, quantity, description, rating } = updateDetails;




//   (updateDetails);
  const handleUpdate = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const url = form.get("url");
    const name = form.get("name");
    const quantity = parseInt(form.get("quantity"));
    const author = form.get("author");
    const category = form.get("category");
    const description = form.get("description");
    const rating = form.get("rating");

    const formUpdate = {
      url,
      name,
      quantity,
      author,
      category,
      description,
      rating
    };


    axios.put(`http://localhost:5000/books/${_id}`, formUpdate)
      .then((response) => {
        (response.data)
        if(response.data.acknowledged == true)
            {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Book data has been updated",
                    showConfirmButton: false,
                    timer: 1500
                  });
                setUpdate(formUpdate)
            }
      })
      .catch(() => {
        
      });
    

  };




  return (
    <div className="max-w-2xl mx-auto  p-16 border-2 rounded-2xl shadow-lg animate__bounceIn">
      <h1 className="text-center font-bold text-2xl mb-5">Add a new book</h1>
      <form onSubmit={handleUpdate} className="space-y-4">
        <div>
          <label htmlFor="url" className="block font-semibold">
            Image URL
          </label>
          <input
            type="url"
            name="url"
            className="w-full bg-white text text-black  border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            defaultValue={url}
          />
        </div>
        <div>
          <label htmlFor="name" className="block font-semibold">
            Book Name
          </label>
          <input
            type="text"
            name="name"
            className="w-full bg-white text text-black border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            defaultValue={name}
          />
        </div>
        <div>
          <label htmlFor="quantity" className="block font-semibold">
            Quantity
          </label>
          <input
            type="number"
            name="quantity"
            className="w-full bg-white text text-black border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            defaultValue={quantity}
          />
        </div>
        <div>
          <label htmlFor="author" className="block font-semibold">
            Author Name
          </label>
          <input
            type="text"
            name="author"
            className="w-full bg-white text text-black border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            defaultValue={author}
          />
        </div>
        <div>
          <label htmlFor="category" className="block font-semibold">
            Category
          </label>
          <select
            name="category"
            className="w-full bg-white text text-black border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            defaultValue={category}
          >
            <option value="" disabled>
              Select a category
            </option>
            <option value="Fiction">Fiction</option>
            <option value="Sports">Sports</option>
            <option value="Science Fiction">Science Fiction</option>
            <option value="Mystery">Mystery</option>
            <option value="Fantasy">Fantasy</option>
            <option value="Romance">Romance</option>
            {/* Add more options as needed */}
          </select>
        </div>

        <div>
          <label htmlFor="description" className="block font-semibold">
            Description
          </label>
          <textarea
            name="description"
            className="w-full bg-white text text-black border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            defaultValue={description}
          ></textarea>
        </div>
        <div>
          <label htmlFor="rating" className="block font-semibold">
            Rating
          </label>
          <input
            type="number"
            name="rating"
            min="1"
            max="5"
            className="w-full bg-white text text-black border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            defaultValue={rating}
          />
        </div>
        <button
          type="submit"
          className="bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600"
        >
          Submit
        </button>
      </form>
      
    </div>
  );
};

export default Updatebook;
