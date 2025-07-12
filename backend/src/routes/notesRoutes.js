import express from 'express';
import { createNote, deleteNote, getNotes, updateNote,getNoteByid } from '../controllers/notesControllers.js';
const router = express.Router();
// router.get('/',users)
router.get('/', getNotes);
router.get('/:id', getNoteByid);

router.post('/', createNote);

router.put('/:id', updateNote);

router.delete('/:id', deleteNote);

export default router;