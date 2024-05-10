import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
            Category: {name}
        </div>
    );
};

export default CategoryDetails;