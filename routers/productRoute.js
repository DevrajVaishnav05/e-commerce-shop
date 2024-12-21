import express from 'express';
import upload from "../config/multer.js";
import productModel from "../models/product-model.js"

const router = express.Router();

router.post('/create', upload.single("image"), async (req, res) => {
    try {
        const { name, price, discount, bgcolor, panelcolor, textcolor } = req.body;
        
        // Validate input fields
        // if (!name || !price || !discount || !bgcolor || !panelcolor || !textcolor) {
        //     req.flash("error", "All fields are required.");
        //     return res.redirect("/owners/admin"); 
        // }

        // Create new product
        await productModel.create({
            image: req.file.buffer,
            name,
            price,
            discount,
            bgcolor,
            panelcolor,
            textcolor
        });

        // Flash success message
        req.flash("success", "Product created successfully");

         res.redirect("/owners/admin"); 

    } catch (error) {
        console.error("Error creating product:", error); // Log error for debugging
        req.flash("error", "An error occurred while creating the product.");
        return res.redirect("/owners/admin"); // Ensure this URL is correct
    }
});


export default router;
