import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BookCard from "./BookCard";

const CategoryDetails = () => {
    const {name} = useParams()

    const [thisCategory, setThisCategory] = useState([])
      
    useEffect(() => {
        // Make a GET request to the server endpoint to fetch data with the same emails
        axios.get(`http://localhost:5000/categories/${name}`)
          .then(res => {
            setThisCategory(res.data);
          })
          .catch(error => {
            console.error('Error fetching same email data:', error);
          });
      }, []);

      console.log(thisCategory)
    return (
        <div>
            <h1 className="text-center text-3xl font-bold">Category: {name}</h1>
         <div className="grid grid-cols-3 gap-5 m-5">
         {
                thisCategory.map(book=>
                    <BookCard key={book._id} book={book}></BookCard>)
            }
         </div>
        </div>
    );
};

export default CategoryDetails;