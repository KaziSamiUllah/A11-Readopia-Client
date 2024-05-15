import axios from "axios";
import { useContext, useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import moment from "moment";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";

const BookDetail = () => {
  const { user } = useContext(AuthContext);
  const [bookDetails, setBookDetails] = useState({});
  const { name } = useParams();
  const issuedOn = moment().format("YYYY-MM-DD");
  const [borrowBtn, setBorrowBtn] = useState(true);
  const [borrowed, setBorrowed] = useState([]);

  useEffect(() => {
    axios
      .get(`https://readopia-server-one.vercel.app/books/${name}`, {
        withCredentials: true,
      })
      .then((res) => setBookDetails(res.data))
      .catch((error) => error);
  }, []);

  const { _id, url, author, category, description, quantity, rating } =
    bookDetails;

  useEffect(() => {
    axios
      .get(`https://readopia-server-one.vercel.app/borrowed/${user.email}`, {
        withCredentials: true,
      })
      .then((res) => {
        setBorrowed(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [user]);

  const isBorrowed = borrowed.find((borrow) => borrow.book_id === _id);
  useEffect(() => {
    if (isBorrowed || bookDetails.quantity <= 0) {
      setBorrowBtn(false);
    }
  }, [isBorrowed, bookDetails.quantity, user]);

  const handleBorrow = (e) => {
    const form = new FormData(e.currentTarget);
    const returnOn = form.get("returnDate");
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
    console.log(currentBook);

    axios
      .post("https://readopia-server-one.vercel.app/borrowed", currentBook, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        if (response.data.acknowledged === true) {
          // toast("Saved Successfully");
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Book has been issued for borrow",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    const qty = "-1";
    axios
      .put(`https://readopia-server-one.vercel.app/books/${_id}`, { qty }, {})
      .then(() => {})
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  const targetRef = useRef();
  return (
    <div>
      <div ref={targetRef}>
        <div className="flex flex-row p-10 min-h-[calc(100vh-240px)]">
          <img className="h-[65vh]" src={url} alt={name} />
          <div className="px-6 py-4">
            <h1 className="font-bold text-xl ">Title:{name}</h1>
            <h1 className="text-lg mb-2">-{author}</h1>

            <h1 className="text-sm mb-2">
              Category: <span className="font-semibold">{category}</span>
            </h1>
            <h1>Rating: {rating} </h1>
            <p className=" text-base first-letter:text-2xl  my-5 text-justify">
              {description}
            </p>
            <p className=" text-base">Available: {quantity} copies</p>
            {/* <button onClick={() => generatePDF(targetRef, {filename: 'page.pdf'})}>Download PDF</button> */}
          </div>

          <label
            htmlFor="my_modal_6"
            className={`btn btn-info text-lg font-bold ${
              borrowBtn ? "" : "pointer-events-none"
            }`}
          >
            <h1 className={`${borrowBtn ? "" : "text-red-400"}`}>Borrow</h1>
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
            <label>
              Return Date:
              <input name="returnDate" type="date" />
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
