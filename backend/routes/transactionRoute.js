import express from "express";
import { createTransaction, getTransactions, getMyTransactions } from "../controllers/transactionController.js";
import authUser from "../middleware/auth.js";
import adminAuth from "../middleware/adminAuth.js";

const router = express.Router();

// Create a transaction
router.post('/', createTransaction);

// Get all transactions
router.get('/', adminAuth, getTransactions);
// Get transaction by ID
router.get('/my-transactions', authUser, getMyTransactions);

export default router;
