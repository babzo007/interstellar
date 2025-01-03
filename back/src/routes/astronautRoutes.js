import express from 'express';
import {
  createAstronaut,
  deleteAstronaut,
  getAstronauts,
  updateAstronaut,
} from '../controllers/astronautController.js';

const router = express.Router();

router.get('/', getAstronauts);

router.post('/', createAstronaut);

router.put('/:id', updateAstronaut);

router.delete('/:id', deleteAstronaut);

export default router;
