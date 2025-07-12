import mongoose from 'mongoose';

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.dbUri);
        
        console.log("MongoDB connected successfully");

        
    } catch (error) {
      
        console.log("MongoDB connection failed", error.message);
        
    }
}


// J5DU2JNI3p7AKiaY
// mongodb+srv://itsyou917:<db_password>@demo.hcwxsu9.mongodb.net/?retryWrites=true&w=majority&appName=demo