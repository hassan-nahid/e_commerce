import { useContext, useEffect } from "react";
import { ShopContext } from "../context/ShopContext";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const Verify = () => {
    const { navigate, token, setCartItems, backendUrl } = useContext(ShopContext);
    const [searchParams] = useSearchParams();

    const success = searchParams.get("success");
    const orderId = searchParams.get("orderId");

    const verifyPayment = async () => {
        try {
            if (!token) {
                toast.error("User not authenticated. Redirecting to login.");
                return navigate("/login");
            }

            const response = await axios.post(`${backendUrl}/api/order/verifyStripe`, { success, orderId }, { headers: { token } });
            if (response.data.success) {
                setCartItems({});
                toast.success("Payment successful, order placed!");
                navigate("/orders");
            } else {
                toast.error(response.data.message || "Payment verification failed, redirecting to cart.");
                navigate("/cart");
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
    };

    useEffect(() => {
        if (token && success && orderId) {
            verifyPayment();
        }
    }, [token, success, orderId]); // Added success and orderId as dependencies

    return <div>Verifying payment...</div>;
};

export default Verify;
