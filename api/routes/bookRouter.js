import express from 'express';
const router = express.Router();
import Book from '../models/bookModel.js';



// get all books
router.get('/', async (req, res) => {
    try {
        const books = await Book.find();
        res.json(books);
    } catch (error) {
        console.log(error);
    }
})





// create a new book
router.post('/newbook', async (req, res) => {
     try {
        const newBook = new Book({
            bookName: req.body.bookName,
            author : req.body.author,
            quantity: req.body.quantity,
            department: req.body.department,
            comments: req.body.comments,
        })

        const book = await newBook.save();
        res.status(201).json(book);
     } catch (error) {
        console.log(error);
     }
} )

//delete a book
router.delete('/delete/:id', async (req, res) => {
    try {
        const deletedBook = await Book.deleteOne({ _id: req.params.id });
        
        if (deletedBook.deletedCount === 0) {
            return res.status(404).json({ message: 'Book not found' });
        }

        return res.json({ message: 'Book deleted successfully' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
});

//update a book
router.put('/lend/:id', async (req, res) => {
    try {
        const updatedBook = await Book.findByIdAndUpdate(
            req.params.id,
            { $inc: { quantity: -1 } },
            { new: true }
        );
        
        if (!updatedBook) {
            return res.status(404).json({ message: 'Book not found' });
        }

        return res.json({ message: 'Book updated successfully', updatedBook });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
});


//update a book
router.put('/back/:id', async (req, res) => {
    try {
        const updatedBook = await Book.findByIdAndUpdate(
            req.params.id,
            { $inc: { quantity: +1 } },
            { new: true }
        );
        
        if (!updatedBook) {
            return res.status(404).json({ message: 'Book not found' });
        }

        return res.json({ message: 'Book updated successfully', updatedBook });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
});






export default router;
