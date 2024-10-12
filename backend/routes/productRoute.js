import express from "express";
import productController from "../controllers/productController.js";
import upload from "../middleware/multer.js";

const { addProduct, listProduct, removingProduct, singleProduct } = productController;

const productRouter = express.Router();

productRouter.post('/add', upload.fields([{name:"image1",maxCount:1},{name:"image2",maxCount:1},{name:"image3",maxCount:1},{name:"image4",maxCount:1}]), addProduct);
productRouter.post('/remove', removingProduct);
productRouter.post('/single', singleProduct);
productRouter.get("/list", listProduct);

export default productRouter;
