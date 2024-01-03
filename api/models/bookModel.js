import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
    bookName: {
        type: String,
        required: true,
        unique: true,
    },
    author: {
        type: String,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    department: {
        type: String,
        required: true,
    },
    comments:{
        type: String,
        required: false,
    }
}, { timestamps: true });

const Book = mongoose.model('Book', bookSchema);
export default Book;