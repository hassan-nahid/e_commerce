import transactionModel from '../models/transactionModel.js';
import jwt from 'jsonwebtoken';


// Create a transaction (Stripe or COD)
export const createTransaction = async (req, res) => {
    try {
        const { transactionId, transactionType, userId, orderId, amount } = req.body;
        const transaction = new transactionModel({
            transactionId,
            transactionType,
            userId,
            orderId,
            amount,
            status: 'completed'
        });
        await transaction.save();
        res.status(201).json({ success: true, transaction });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Get all transactions
export const getTransactions = async (req, res) => {
    try {
        const transactions = await transactionModel.find().populate('userId orderId');
        res.status(200).json({ success: true, transactions });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Get transaction by ID
export const getMyTransactions = async (req, res) => {
    try {
        const token = req.headers.token;
        if (!token) {
            return res.status(401).json({ success: false, message: "No token provided" });
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const userId = decoded.id;
        const transactions = await transactionModel.find({userId: userId }).populate('userId orderId');
        res.status(200).json({ success: true, transactions });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};