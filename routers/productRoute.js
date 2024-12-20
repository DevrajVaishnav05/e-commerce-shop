import express from 'express';

const router = express.Router();

// Define your product routes here
router.get('/', (req, res) => {
    res.send('Devraj Vaishanv');
});

router.post('/', (req, res) => {
    res.send('Create a new product');
});

router.get('/:id', (req, res) => {
    res.send(`Details of product with ID: ${req.params.id}`);
});

export default router;
