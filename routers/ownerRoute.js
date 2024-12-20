import express from 'express';

const router = express.Router();

// Define your owner routes here
router.get('/', (req, res) => {
    res.send('<h1> this company is  owners devraj vaishanv </h1>' );
});

router.post('/', (req, res) => {
    res.send('Create a new owner');
});

router.get('/:id', (req, res) => {
    res.send(`Details of owner with ID: ${req.params.id}`);
});

export default router;
