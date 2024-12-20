import express from 'express';

const router = express.Router();

// Define your user routes here
router.get('/', (req, res) => {
    res.send('List of users');
});

router.post('/', (req, res) => {
    res.send('Create a new user');
});

router.get('/:id', (req, res) => {
    res.send(`Details of user with ID: ${req.params.id}`);
});

export default router;
