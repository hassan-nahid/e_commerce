
import { useContext, useState } from "react";
import { toast } from "react-toastify";
import { ShopContext } from "../context/ShopContext";

const ChangePassword = () => {
  const { changePassword } = useContext(ShopContext);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
 
    setSubmitting(true);
    const res = await changePassword(oldPassword, newPassword);
    if (res.success) {
      toast.success(res.message || "Password changed successfully.");
      setOldPassword("");
      setNewPassword("");
    } else {
      toast.error(res.message || "Failed to change password.");
    }
    setSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800">
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="prata-regular text-3xl">Change Password</p>
        <hr className="border-none h-[1.5px] w-8 bg-green-800" />
      </div>
      <input
        type="password"
        placeholder="Old Password"
        value={oldPassword}
        onChange={e => setOldPassword(e.target.value)}
        className="w-full px-3 py-2 border border-gray-800"
        required
      />
      <input
        type="password"
        placeholder="New Password"
        value={newPassword}
        onChange={e => setNewPassword(e.target.value)}
        className="w-full px-3 py-2 border border-gray-800"
        required
      />
      <div className="w-full flex justify-between text-sm mt-[-8px]">
      </div>
      <button className="bg-black text-white font-light px-8 py-2 mt-4 w-full" disabled={submitting}>
        {submitting ? "Changing..." : "Change Password"}
      </button>
     
    </form>
  );
};

export default ChangePassword;