import express from 'express';
import auth from "../middlewares/authLogin.js";
import productModel from "../models/product-model.js"
import userModel from "../models/user-model.js"
const router = express.Router();
router.get('/', (req, res) => {
    let error  = req.flash("error");
    res.render("index",{error , loggedin:false});
});
router.get('/shop', auth, async (req, res) => {
    let products = await productModel.find()
    let success  = req.flash("success");
    res.render("shop",{products,success});
});
router.get('/cart', auth, async (req, res) => {
    let user = await userModel.findOne({email:req.user.email}).populate("cart");
    
    res.render("cart",{user});
});
router.get('/addtocard/:productid', auth, async (req, res) => {
    let user = await userModel.findOne({email:req.user.email});
    user.cart.push(req.params.productid);
      await user.save();
      req.flash("success","Added to cart");
      res.redirect("/shop");
});
export default router;
