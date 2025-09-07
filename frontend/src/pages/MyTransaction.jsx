import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { toast } from "react-toastify";
import Title from "../components/Title";

const MyTransaction = () => {
    const { token, backendUrl } = useContext(ShopContext);
    const [loading, setLoading] = useState(true);
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        const fetchTransactions = async () => {
            // You may want to fetch all transactions for the user, not just by ID
            // If you have a getMyTransactions function, use that instead
            // For demo, let's assume you want to fetch all
            try {
                const response = await fetch(`${backendUrl}/api/transaction/my-transactions`, {
                    headers: { token }
                });
                const data = await response.json();
                if (data.success) {
                    setTransactions(data.transactions);
                }
            } catch (error) {
                setTransactions([]);
                toast.error(error.message)
            }
            setLoading(false);
        };
        fetchTransactions();
    }, [token]);

    return (
        <div className="max-w-2xl mx-auto py-10">
            <div className="text-center py-8 text-3xl">
                <Title text1={"MY"} text2={"TRANSACTIONS"} />
            </div>
            {loading ? (
                <div className="text-center">Loading...</div>
            ) : transactions.length === 0 ? (
                <div className="text-center text-gray-500">No transactions found.</div>
            ) : (
                <div className="space-y-4">
                    {transactions.map(tx => (
                        <div key={tx._id} className="border p-4 bg-white ">
                            <div className="font-semibold">Transaction ID: {tx.transactionId}</div>
                            <div>Type: {tx.transactionType}</div>
                            <div>Amount: {tx?.amount}$</div>
                            <div>Order ID: {tx.orderId?._id || tx.orderId}</div>
                            <div>Status: <span className={tx.status === 'completed' ? 'text-green-600' : 'text-red-600'}>{tx.status}</span></div>
                            <div>Date: {new Date(tx.createdAt).toLocaleString()}</div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default MyTransaction;