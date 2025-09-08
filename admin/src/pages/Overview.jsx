import { useState, useEffect } from "react";
import axios from "axios";
import { backendUrl } from "../App";
import { toast } from "react-toastify";
import { Bar, Pie } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
} from 'chart.js';
    ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

;


const Overview = ({token}) => {
    const [users, setUsers] = useState([]);
    const [products, setProducts] = useState([]);
    const [orders, setOrders] = useState([]);
    const [transactions, setTransactions] = useState([]);


    const fetchUser = async () => {
        try {
            const response = await axios.get(backendUrl + "/api/user/all-user", { headers: { token } });
            if (response.data.success) {
                setUsers(response.data.users);
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
    };
    const fetchProduct = async () => {
        try {
            const response = await axios.get(backendUrl + `/api/product/list?limit=${10000}`, { headers: { token } });
            if (response.data.success) {
                setProducts(response.data.products);
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
    };
    const fetchOrders = async () => {
        try {
            const response = await axios.post(backendUrl + "/api/order/list", {}, { headers: { token } })
            if (response.data.success) {
                setOrders(response.data.orders);
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
    };
    const fetchTransactions = async () => {
        try {
            const response = await axios.get(backendUrl + "/api/transaction", { headers: { token } });
            if (response.data.success) {
                setTransactions(response.data.transactions);
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
    };


    useEffect(() => {
        fetchUser();
        fetchProduct();
        fetchOrders();
        fetchTransactions();
    }, []);

        // Cards data
        const totalTransactionAmount = transactions.reduce((sum, t) => sum + (Number(t.amount) || 0), 0);
        const cardData = [
            { title: 'Users', value: users.length, color: 'bg-blue-500' },
            { title: 'Products', value: products.length, color: 'bg-green-500' },
            { title: 'Orders', value: orders.length, color: 'bg-yellow-500' },
            { title: 'Transactions', value: transactions.length, color: 'bg-purple-500' },
            { title: 'Total Amount', value: `${totalTransactionAmount}$`, color: 'bg-pink-500' },
        ];

        // Bar Chart: Orders per Product (top 5)
        const productOrderCounts = products.map(product => {
            const count = orders.reduce((sum, order) => {
                // order.items is an array of products in the order
                if (order.items && order.items.some(item => item._id === product._id)) {
                    return sum + 1;
                }
                return sum;
            }, 0);
            return { name: product.name, count };
        }).sort((a, b) => b.count - a.count).slice(0, 5);
        const barData = {
            labels: productOrderCounts.map(p => `${p.name} (${p.count})`),
            datasets: [
                {
                    label: 'Orders',
                    data: productOrderCounts.map(p => p.count),
                    backgroundColor: 'rgba(59,130,246,0.7)',
                },
            ],
        };

        // Bar Chart: Products per Sub-Category
        const subCategoryCounts = products.reduce((acc, p) => {
            const sub = p.subCategory || 'Unknown';
            acc[sub] = (acc[sub] || 0) + 1;
            return acc;
        }, {});
        const subCategoryBarData = {
            labels: Object.keys(subCategoryCounts),
            datasets: [
                {
                    label: 'Products',
                    data: Object.values(subCategoryCounts),
                    backgroundColor: 'rgba(16,185,129,0.7)',
                },
            ],
        };

        // Pie Chart: Payment Method Split (Stripe vs COD)
        const paymentCounts = orders.reduce((acc, t) => {
            const method = t.paymentMethod || 'Unknown';
            acc[method] = (acc[method] || 0) + 1;
            return acc;
        }, {});
        const pieData = {
            labels: Object.keys(paymentCounts),
            datasets: [
                {
                    data: Object.values(paymentCounts),
                    backgroundColor: [
                        'rgba(34,197,94,0.7)',
                        'rgba(239,68,68,0.7)',
                        'rgba(59,130,246,0.7)'
                    ],
                },
            ],
        };

        

        // Table: Recent Transactions (top 5)
        const recentTransactions = [...transactions].reverse().slice(0, 5);

        return (
            <div className="p-4">
                <h2 className="text-2xl font-bold mb-4">Overview</h2>
                {/* Cards */}
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
                    {cardData.map(card => (
                        <div key={card.title} className={` border p-4 text-white ${card.color}`}>
                            <div className="text-lg font-semibold">{card.title}</div>
                            <div className="text-3xl font-bold">{card.value}</div>
                        </div>
                    ))}
                </div>

                {/* Charts */}
                <div className="flex flex-col gap-8 mb-8">
                    <div className="bg-white border p-4">
                        <h3 className="text-lg font-semibold mb-2">Top Orders per Product</h3>
                        <Bar data={barData} />
                    </div>
                    <div className="bg-white border p-4 md:p-24 lg:p-32">
                        <h3 className="text-lg font-semibold mb-2">Payment Method Split</h3>
                        <Pie data={pieData} />
                    </div>
                    <div className="bg-white border p-4">
                        <h3 className="text-lg font-semibold mb-2">Products per Sub-Category</h3>
                        <Bar data={subCategoryBarData} />
                    </div>
                </div>

                {/* Table */}
                <div className="bg-white  border p-4 overflow-x-auto">
                    <h3 className="text-lg font-semibold mb-2">Recent Transactions</h3>
                    <table className="w-full text-sm">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="py-2 px-4">User</th>
                                <th className="py-2 px-4">Amount</th>
                                <th className="py-2 px-4">Payment</th>
                                <th className="py-2 px-4">Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {recentTransactions.map((t, idx) => {
                                let userDisplay = '';
                                if (t.userName) {
                                    userDisplay = t.userName;
                                } else if (typeof t.userId === 'string') {
                                    userDisplay = t.userId;
                                } else if (t.userId && typeof t.userId === 'object') {
                                    userDisplay = t.userId.name || t.userId.email || JSON.stringify(t.userId);
                                }
                                const paymentMethod = t.paymentMethod || 'Unknown';
                                return (
                                    <tr key={idx} className="border-b">
                                        <td className="py-2 px-4">{userDisplay}</td>
                                        <td className="py-2 px-4">{t.amount}</td>
                                        <td className="py-2 px-4">{paymentMethod}</td>
                                        <td className="py-2 px-4">{new Date(t.createdAt).toLocaleString()}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        );
}
export default Overview