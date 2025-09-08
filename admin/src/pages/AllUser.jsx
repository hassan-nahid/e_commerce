import axios from "axios";
import { useEffect, useState } from "react";
import { backendUrl } from "../App";
import { toast } from "react-toastify";
import Swal from 'sweetalert2';


const AllUser = ({ token }) => {
  const [list, setList] = useState([]);


  const fetchList = async () => {
    try {
      const response = await axios.get(backendUrl + "/api/user/all-user", {headers: {token}});
      if (response.data.success) {
        setList(response.data.users);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  
const removeProduct = async (id) => {
  const result = await Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  });

  if (result.isConfirmed) {
    try {
      const response = await axios.post(backendUrl + `/api/user/delete/${id}`, { headers: { token } });
      if (response.data.success) {
        Swal.fire('Deleted!', 'Your product has been deleted.', 'success');
        await fetchList();
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  }
};
  useEffect(() => {
    fetchList();
  }, []);



  return (
    <>
      <p className="mb-2">All User</p>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border rounded-lg shadow">
          <thead>
            <tr className="bg-gray-100 text-gray-700 text-sm">
              <th className="py-2 px-4 text-left">Name</th>
              <th className="py-2 px-4 text-left">Email</th>
              <th className="py-2 px-4 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {list.length > 0 ? (
              list.map((user, index) => (
                <tr key={index} className="border-b hover:bg-gray-50 transition">
                  <td className="py-2 px-4">{user.name}</td>
                  <td className="py-2 px-4">{user.email}</td>
                  <td className="py-2 px-4 text-center">
                    <button
                      onClick={() => removeProduct(user._id)}
                      className="py-1 px-3 text-white bg-red-500 hover:bg-red-600 rounded transition-all duration-150"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={3} className="text-center py-4">No users found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AllUser;
