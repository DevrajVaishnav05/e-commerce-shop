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
            // Check if owner already exists
            const owners = await ownerModel.find();
            if (owners.length > 0) {
                return res.status(400).send("Owner already exists");
            }

            // Extract data from request body
            const { fullname, email, password } = req.body;
           
            if (!fullname || !email || !password) {
                // If validation fails, render the form again with an error message
                return res.render('index', { error: 'All fields are required.' });  // Pass error to EJS template
            }
            // Create a new owner
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




router.get('/:id', (req, res) => {
    res.send(`Details of owner with ID: ${req.params.id}`);
});

export default router;
