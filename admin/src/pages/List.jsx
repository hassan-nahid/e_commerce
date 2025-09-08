import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { useEffect, useState } from "react";
import { backendUrl, currency } from "../App";
import { toast } from "react-toastify";
import Swal from 'sweetalert2';


const List = ({ token }) => {
  const [list, setList] = useState([]);
  const navigate = useNavigate(); // Use useNavigate for navigation

  const fetchList = async () => {
    try {
      const response = await axios.get(backendUrl + "/api/product/list");
      if (response.data.success) {
        setList(response.data.products);
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
      const response = await axios.post(backendUrl + "/api/product/remove", { id }, { headers: { token } });
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

  const goToUpdatePage = (id) => {
    navigate(`/update/${id}`); // Navigate to the update page with the product id
  };

  return (
    <>
      <p className="mb-2">All Product List</p>
      <div className="flex flex-col gap-2 overflow-x-auto">
        {/* --------- List Table Title --------- */}
        <div className="hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center gap-2 py-1 px-2 border bg-gray-100 text-sm">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b className="text-center">Action</b>
        </div>

        {/* --------- List Table Body --------- */}
        {list.length > 0 ? (
          list.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-[1fr_3fr_1fr] md:grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center gap-2 py-1 px-2 border text-sm"
            >
              <img className="w-12 h-12 object-cover" src={item.image[0]} alt={item.name} />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>
                {currency}
                {item.price}
              </p>
              <div className="flex gap-2 justify-center">
                <button
                  onClick={() => removeProduct(item._id)}
                  className="py-1 px-3 text-white bg-red-500 hover:bg-red-600 rounded transition-all duration-150"
                >
                  Delete
                </button>
                <button
                  onClick={() => goToUpdatePage(item._id)}  // Update button navigates to update page
                  className="py-1 px-3 text-white bg-blue-500 hover:bg-blue-600 rounded transition-all duration-150"
                >
                  Update
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center mt-4">No products found</p>
        )}
      </div>
    </>
  );
};

export default List;
