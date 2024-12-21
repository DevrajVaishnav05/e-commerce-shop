import express from 'express';
import auth from "../middlewares/authLogin.js";
import productModel from "../models/product-model.js"
const router = express.Router();
router.get('/', (req, res) => {
    let error  = req.flash("error");
    res.render("index",{error , loggedin:false});
});
router.get('/shop', auth, async (req, res) => {
    let products = await productModel.find()
    res.render("shop",{products});
});
export default router;
