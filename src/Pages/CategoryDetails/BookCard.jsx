import { Link } from "react-router-dom";
import StarRatingComponent from "../../Shared Components/StarRatingComponent";

const BookCard = ({ book }) => {
  const { url, author, name, category, rating, _id } = book;

  return (
    <div className="p-10 border-2 shadow-xl rounded-2xl  flex flex-col gap-2 h-[70vh]">
      <div className="h-[35vh]">
        <img className="h-full mx-auto" src={url} alt="" />
      </div>

      <div className="h-32 ">
        <h1 className="text-xl font-bold">{name}</h1>
        <h1>Author:{author}</h1>
        <h1>Category: {category}</h1>
      </div>

      <div className="flex flex-col gap-5">
        <StarRatingComponent rating={parseInt(rating)} />
        <Link to={`/bookdetail/${name}`} className="mx-auto ">
          <button className="btn-outline btn btn-sm">Details</button>
        </Link>
      </div>
    </div>
  );
};

export default BookCard;
