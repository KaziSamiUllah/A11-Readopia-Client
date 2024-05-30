import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";

const Allusers = () => {
  const [allUsers, setAllUsers] = useState([]);

  useState(() => {
    axios
      //   .get("https://readopia-server-one.vercel.app/books", { withCredentials: true })
      .get("https://readopia-server-one.vercel.app/users", { withCredentials: true })
      .then((res) => {
        setAllUsers(res.data);
      })
      .catch((error) => {
        error.message;
      });
  }, []);

  const handleRoleChange = (id, librarian) => {
    console.log("user ID", id);

    Swal.fire({
      title: "Are you sure?",
      text: `This user will be assigned as ${
        librarian ? "Member" : "librarian"
      }`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Proceed!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .put(`https://readopia-server-one.vercel.app/users/${id}`, { librarian })
          .then((res) => console.log(res));
        Swal.fire({
          title: "DONE!",
          text: "User Role has been set.",
          icon: "success",
        });
        window.location.reload()
      }
    });
  };

  return (
    <div className="container mx-auto my-8">
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Index</th>
            <th className="py-2 px-4 border-b">Email</th>
            <th className="py-2 px-4 border-b">Role</th>
          </tr>
        </thead>
        <tbody>
          {allUsers.map((user, idx) => (
            <tr key={idx} className="even:bg-gray-100">
              <td className="py-2 px-4 border-b text-center">{idx + 1}</td>
              <td className="py-2 px-4 border-b">{user.userEmail}</td>
              <td className="py-2 px-4 border-b">
                {" "}
                <div className="flex flex-row justify-center items-center gap-5">
                  <p>{user.librarian ? "Librarian" : "Member"}</p>{" "}
                  <button
                    className=" btn btn-ghost"
                    onClick={() => handleRoleChange(user._id, user.librarian)}
                  >
                    {" "}
                    Assign as {!user?.librarian ? "Librarian" : "Member"}{" "}
                  </button>
                </div>{" "}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Allusers;
