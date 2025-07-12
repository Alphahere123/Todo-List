
import Note from '../Model/Note.js';
// export const users = (req, res) => {
//   res.status(200).json({ message: 'Users Route' });
// }


export const getNotes = async (req, res) => {



  try {
    const User = await Note.find().sort({ createdAt: -1 }); // it will showing the firtst 
    res.status(200).json(User);
  } catch (error) {
    console.log("error in getNotes", error);
    res.status(500).json({ message: 'internal server error' });
  }


}

export const getNoteByid = async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);
    if (!note) {
      return res.status(404).json({ message: 'Note not found' });
    }
    res.status(200).json(note);
  } catch (error) {
    console.log("error in getNoteByid", error);
    res.status(500).json({ message: 'Internal server error' });
  }
}
export const createNote = async (req, res) => {
  try {
    
    const { title, content } = req.body;
    if (!req.body) {
      return res.status(400).json({ error: "Request body is missing" });
    }

    const newNote = new Note({ title, content });
     const saved= await newNote.save();


    res.status(201).json(saved);
  } catch (error) {
    console.log("error in createNote", error);
    res.status(500).json({ message: 'Internal server error' });
  }
}
export const updateNote = async(req, res) => {
try {
  const { title, content } = req.body;
  const updatedNotes=  await Note.findByIdAndUpdate(
    req.params.id,
    { title, content },
    { new: true }
  );
  if (!updatedNotes) {
    return res.status(404).json({ message: 'Note not found' });
  }
  res.status(200).json(updatedNotes);
} catch (error) {
  res.status(500).json({ message: 'Internal server error' });
  console.log("error in updateNote", error);
}


}
export const deleteNote =  async (req, res) => {
  try {
    const deletedNote = await Note.findByIdAndDelete(req.params.id);
    if (!deletedNote) {
      return res.status(404).json({ message: 'Note not found' });
    }
    res.status(200).json({ message: 'Note deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
    console.log("error in deleteNote", error);
    
  }
}