import axios from "axios";
import { useContext, useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { toast } from "react-toastify";
import moment from "moment";
import "react-toastify/dist/ReactToastify.css";
import generatePDF from 'react-to-pdf';

const BookDetail = () => {
  const { user } = useContext(AuthContext);
  const [bookDetails, setBookDetails] = useState({});
  const { name } = useParams();
  const issuedOn = moment().format("YYYY-MM-DD");
  const [borrowBtn, setBorrowBtn] = useState(true);
  const [borrowed, setBorrowed] = useState([]);





  useEffect(() => {
    axios
      .get(`https://readopia-server-one.vercel.app/books/${name}`, {withCredentials:true})
      .then((res) => setBookDetails(res.data))
      .catch((error) => (error));
  }, []);

  const { _id, url, author, category, description, quantity, rating } =
    bookDetails;


  useEffect(() => {
    axios
      .get(`https://readopia-server-one.vercel.app/borrowed/${user.email}`, {withCredentials:true})
      .then((res) => {
        setBorrowed(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const isBorrowed = borrowed.find((borrow) => borrow.book_id === _id);
  useEffect(() => {
    if (isBorrowed || bookDetails.quantity<=0) {
      setBorrowBtn(false);
    }
  }, [isBorrowed , bookDetails.quantity ]);



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
      .post("https://readopia-server-one.vercel.app/borrowed", currentBook, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        if (response.data.acknowledged === true) {
          toast("Saved Successfully");
          (response.data);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });


    const qty = "-1";
    axios
      .put(`https://readopia-server-one.vercel.app/books/${_id}`, { qty },{})
      .then((response) => {
        (response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  const targetRef = useRef();
  return (
    <div>
      <div ref={targetRef}>
        <div className="flex flex-row p-10">
          <img className="h-[80vh]" src={url} alt={name} />
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
            <h1 className={`${borrowBtn? '' : 'text-red-400'}`}>Borrow</h1>
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
