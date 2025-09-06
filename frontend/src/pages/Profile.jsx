import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";

const Profile = () => {
    const { getMe } = useContext(ShopContext);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [message, setMessage] = useState("");


    useEffect(() => {
        const fetchUser = async () => {
            setLoading(true);
            const res = await getMe();
            if (res.success) {
                setUser(res.user);
            } else {
                setMessage(res.message);
            }
            setLoading(false);
        };
        fetchUser();
    }, [getMe]);

    if (loading) {
        return <div className="py-20 text-center">Loading profile...</div>;
    }

    if (!user) {
        return <div className="py-20 text-center text-red-500">{message || "Unable to load profile."}</div>;
    }

    return (
        <div className="max-w-xl mx-auto py-10">
            <div className="text-center py-8 text-3xl">
                <Title text1={"MY"} text2={"PROFILE"} />
            </div>
            <div className="bg-white border flex flex-col justify-center items-center p-6 mb-8">
                <div className="w-20 h-20 rounded-full border text-gray-500 border-gary-500 flex items-center justify-center text-4xl font-bold mb-4">
                    {user.name ? user.name[0].toUpperCase() : "U"}
                </div>
                <div className="mb-4">
                    <span className="font-semibold">Name:</span> {user.name}
                </div>
                <div className="mb-4">
                    <span className="font-semibold">Email:</span> {user.email}
                </div>
            </div>
        </div>
    );
}

export default Profile