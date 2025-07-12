import mongoose from 'mongoose';

// Step 1: Create Schema
const noteSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
 
  content: {
    type: String,
    required: true  //	Makes the field mandatory
    // unique: true   ///	ensures no duplicates in the field
  },

}
,{timestamps: true}); // Automatically add createdAt and updatedAt timestamps

// Step 2: Create Model from Schema
const Note = mongoose.model('Note', noteSchema);
export default Note;
