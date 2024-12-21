import express from 'express';

const router = express.Router();
import ownerModel from "../models/owner-model.js";
router.get('/', (req, res) => {
    res.render("index");
    // res.send('<h1> this company is  owners devraj vaishanv </h1>' );
});
if (process.env.NODE_ENV === "development") {
    router.post('/', async (req, res) => {
        try {
            const owners = await ownerModel.find();
            if (owners.length > 0) {
                return res.status(400).send("Owner already exists");
            }
            const { fullname, email, password } = req.body;
            if (!fullname || !email || !password) {
                return res.render('index', { error: 'All fields are required.' }); 
            }
            const createOwner = await ownerModel.create({
                fullname,
                email,
                password
            });

            console.log(createOwner);
            res.status(201).send(createOwner);  // Send the created owner back with 201 status
        } catch (err) {
            console.error("Error creating owner:", err);
            res.status(500).send("Server error");
        }
    });
}


router.get('/admin', (req, res) => {
    let success = req.flash("success");
    let error = req.flash("error");
    res.render("createproducts",{success,error});
});


export default router;
