const bookAdaptor = require('./lib/policy-adaptor')

const getAll = async (req, res, next) => {
    try {
        const books = await bookAdaptor.getAll();
        res.status(200).json(books);
    } catch (error) {
        next(error);
    }
}

const getOne = async (req, res, next) => {
    try {
        const book = await bookAdaptor.getOne(req.params.id);
        if (!book) {
            return res.status(404).json({ message: 'Book not found' });
        }
        res.status(200).json(book);
    } catch (error) {
        next(error);
    }
}

const addNewBook = async (req, res, next) => {
    try {
        const newBook = await bookAdaptor.addNewBook(req.body);
        res.status(201).json(newBook);
    } catch (error) {
        next(error);
    }
}

const updateNewBook = async (req, res, next) => {
    try {
        const updatedBook = await bookAdaptor.updateBook(req.body);
        if (!updatedBook) {
            return res.status(404).json({ message: 'Book not found' });
        }
        res.status(200).json(updatedBook);
    } catch (error) {
        next(error);
    }
}

const deleteBookByCode = async (req, res, next) => {
    try {
        const result = await bookAdaptor.deleteNewBook(req.params.code);
        if (!result) {
            return res.status(404).json({ message: 'Book not found' });
        }
        res.status(200).json({ message: 'Book deleted successfully' });
    } catch (error) {
        next(error);
    }
}

const searchBookname = async (req, res, next) => {
    try {
        const policynumber = req.query.policynumber;
        const books = await bookAdaptor.searchNewBook(policynumber);
        res.status(200).json(books);
    } catch (error) {
        next(error);
    }
}


module.exports = { getAll, getOne, addNewBook, deleteBookByCode, updateNewBook, searchBookname }