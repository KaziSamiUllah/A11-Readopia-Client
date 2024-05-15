import React from "react";
import StarRatingComponent from "../../Shared Components/StarRatingComponent";
import { Link } from "react-router-dom";
import Aos from "aos";

const ListCard = ({ book, userData }) => {
  Aos.init();
  const { url, author, name, category, rating, _id } = book;
  return (
    <tbody data-aos="flip-down" className=" border-b-2">
      <tr className="border-b">
        <td className="px-4 py-2 font-bold">{name}</td>
        <td className="px-4 py-2">{author}</td>
        <td className="px-4 py-2">{category}</td>
        <td className="px-4 py-2">
          <StarRatingComponent rating={parseInt(rating)} />
        </td>
        <td className="px-4 py-2">
          <Link to={`/bookdetail/${name}`} className="mx-auto">
            <button className="btn-warning btn btn-sm m-2">Details</button>
          </Link>
       
        {userData?.librarian && (
        
              <Link to={`/updateBook/${name}`} className="mx-auto">
                <button className="btn-info btn btn-sm m-2">Update</button>
              </Link>
           
        )}
         </td>
      </tr>
    </tbody>
  );
};

export default ListCard;
