import Swal from "sweetalert2";
import 'animate.css';
const AddBooks = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const url = form.get("url");
    const name = form.get("name");
    const quantity = parseInt(form.get("quantity"), 10);
    const author = form.get("author");
    const category = form.get("category");
    const description = form.get("description");
    const rating = form.get("rating");

    const bookDetails = {url, name, quantity, author, category, description, rating}
    
    // console.log("Form submitted!", bookDetails);

    fetch("http://localhost:5000/books", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(bookDetails),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.acknowledged === true) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Your Book has been added",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }

            });




  };

  return (
    <div className="max-w-2xl mx-auto  p-16 border-2 rounded-2xl shadow-lg animate__bounceIn">
        <h1 className="text-center font-bold text-2xl mb-5">Add a new book</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="url" className="block font-semibold">
            Image URL
          </label>
          <input
            type="url"
            name="url"
            className="w-full bg-white text text-black  border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="URL of the image"
            required
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
            placeholder="Book name"
            required
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
            placeholder="Quantity"
            required
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
            placeholder="Author name"
            required
          />
        </div>
        <div>
          <label htmlFor="category" className="block font-semibold">
            Category
          </label>
          <select
            name="category"
            className="w-full bg-white text text-black border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            required
          >
            <option value="" disabled>Select a category</option>
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
            placeholder="Short description"
            required
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
            placeholder="Rating (1-5)"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600"
        >
          Add
        </button>
      </form>
      <div className="mt-4">
        <p>Some contents/texts about the book (could be static)</p>
      </div>
    </div>
  );
};

export default AddBooks;
