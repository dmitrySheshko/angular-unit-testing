import express from 'express';
import db from '../../../db';

const router = express.Router();

router.get('/:id', (req, res) => {
    let id = req.params.id;
    res.json({getCurrentUserData:{id: id}});
});

router.get('/', (req, res) => {
    res.json(db.getUsers());
});

export default router;