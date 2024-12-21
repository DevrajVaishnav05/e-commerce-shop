import express from 'express';
const router = express.Router();
import {registerUser,loginUser} from '../controllers/userController.js';

// Define your user routes here


router.post('/register',registerUser );
router.post('/login',loginUser );

router.get('/:id', (req, res) => {
    res.send(`Details of user with ID: ${req.params.id}`);
});

export default router;
