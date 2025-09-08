import { useState } from "react";
import { backendUrl } from "../App";
import axios from "axios"
import { toast } from "react-toastify";

const Login = ({ setToken }) => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const onSubmitHandler = async (e) => {
        try {
            e.preventDefault();
            const response = await axios.post(backendUrl + "/api/user/admin", { email, password })
            if (response.data.success) {
                setToken(response.data.token)
            }
            else {
                toast.error(response.data.message)
            }

        } catch (error) {
            console.log(error)
            toast.error(error.message)

        }
    }

    // Demo credentials
    const demoEmail = "admin@nahid.com";
    const demoPassword = "password@admin";

    const handleDemoFill = () => {
        setEmail(demoEmail);
        setPassword(demoPassword);
    };

    return (
        <div className="min-h-screen flex items-center justify-center w-full">
            <div className="bg-white shadow-md rounded-lg px-8 py-6 max-w-md">
                <h1 className="text-2xl font-bold mb-4">Admin Panel</h1>
                <div className="mb-2 text-sm text-gray-600 bg-blue-50 p-2 rounded">
                    <b>Note:</b> Use the button below to auto-fill demo credentials for quick access. This is useful for testing or previewing the admin panel without creating an account.
                </div>
                <button
                    type="button"
                    onClick={handleDemoFill}
                    className="mb-4 w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all"
                >
                    Auto Fill Demo Credentials
                </button>
                <form onSubmit={onSubmitHandler}>
                    <div className="mb-3 min-w-72">
                        <p className="text-sm font-medium text-gray-700 mb-2">Email Address</p>
                        <input onChange={(e) => setEmail(e.target.value)} value={email} className="rounded-md w-full px-3 py-2 border border-gray-300 outline-none" type="email" placeholder="you@email.com" required />
                    </div>
                    <div className="mb-3 min-w-72">
                        <p className="text-sm font-medium text-gray-700 mb-2">Password</p>
                        <input onChange={(e) => setPassword(e.target.value)} value={password} className="rounded-md w-full px-3 py-2 border border-gray-300 outline-none" type="password" placeholder="Enter Your Password" required />
                    </div>
                    <button className="mt-2 w-full py-2 px-4 bg-black text-white rounded-md" type="submit">Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login