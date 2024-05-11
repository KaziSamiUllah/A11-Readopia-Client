import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { toast } from "react-toastify";
import moment from "moment";
import "react-toastify/dist/ReactToastify.css";

const BookDetail = () => {
  const { user } = useContext(AuthContext);
  const [bookDetails, setBookDetails] = useState({});
  const { name } = useParams();
  const issuedOn = moment().format("YYYY-MM-DD");

  useEffect(() => {
    axios
      .get(`http://localhost:5000/books/${name}`)
      .then((res) => setBookDetails(res.data))
      .catch((error) => console.log(error));
  }, []);

  const { _id, url, author, category, description, quantity, rating } =
    bookDetails;

  const handleBorrow = (e) => {
    const form = new FormData(e.currentTarget);
    const returnOn = form.get("date");
    const borrowedBy = user.displayName;
    const email = user.email;
    const currentBook = {
      url,
      name,
      book_id: _id,
      borrowedBy,
      email,
      author,
      category,
      returnOn,
      issuedOn,
    };

    axios
      .post("http://localhost:5000/borrowed", currentBook, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        if (response.data.acknowledged === true) {
          toast("Saved Successfully");
          console.log(response.data);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    // const modal = document.getElementById("my_modal_6");
    // modal.checked = false;

    const qty = "-1";
    axios
      .put(`http://localhost:5000/books/${_id}`, { qty })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div>
      <div className="">
        <div className="flex flex-row p-10">
          <img className="h-[80vh]" src={url} alt={name} />
          <div className="px-6 py-4">
            <h1 className="font-bold text-xl ">Title:{name}</h1>
            <h1 className="text-lg mb-2">-{author}</h1>

            <h1 className="text-sm mb-2">
              Category: <span className="font-semibold">{category}</span>
            </h1>
            <h1>Rating: {rating} </h1>
            <p className=" text-base first-letter:text-2xl w-2/3 my-5 text-justify">
              {description}
            </p>
            <p className=" text-base">Available: {quantity} copies</p>
          </div>
          {/* <button onClick={handleBorrow} htmlFor="my_modal_6" className="btn my-10 btn-info text-lg font-bold">Borrow now</button> */}
          <label
            htmlFor="my_modal_6"
            className="btn btn-info text-lg font-bold"
          >
            Borrow
          </label>
        </div>
      </div>

      {/* The button to open modal */}

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my_modal_6" className="modal-toggle " />
      <div className="modal " role="dialog">
        <div className="modal-box border-2">
          <form onSubmit={handleBorrow}>
            <h1>Name: {user?.displayName}</h1>
            <h1>Email: {user?.email}</h1>
            <label htmlFor="">
              Return Date:
              <input name="date" type="date" />
            </label>
            <div className="flex flex-row justify-between  items-center mt-5">
              <button
                htmlFor="my_modal_6"
                className="btn-success btn modal-action my-0"
                type="submit"
              >
                Submit
              </button>
              <label htmlFor="my_modal_6" className="btn-warning btn">
                Close!
              </label>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;