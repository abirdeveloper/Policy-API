const bookAdaptor = require('./lib/policy-adaptor')

const getAll = async () => {
    try {
        const books = await bookAdaptor.getAll();
        return books;
    } catch (error) {
        console.error("Error fetching all books:", error);
        throw error; // Re-throw to allow the error to be handled upstream
    }
}

const getOne = async (_id) => {
    try {
        const book = await bookAdaptor.getOne(_id);
        return book;
    } catch (error) {
        console.error(`Error fetching book with id ${_id}:`, error);
        throw error;
    }
}

const add = async (book) => {
    try {
        const books = await bookAdaptor.add(book);
        return books;
    } catch (error) {
        console.error("Error adding a book:", error);
        throw error;
    }
}

const addNewBook = async (book) => {
    try {
        return await bookAdaptor.addNewBook(book);
    } catch (error) {
        console.error("Error adding new book:", error);
        throw error;
    }
}

const updateNewBook = async (book) => {
    try {
        return await bookAdaptor.updateBook(book);
    } catch (error) {
        console.error(`Error updating book with id ${book._id}:`, error);
        throw error;
    }
}

const deleteBookByCode = async (code) => {
    try {
        return await bookAdaptor.deleteNewBook(code);
    } catch (error) {
        console.error(`Error deleting book with code ${code}:`, error);
        throw error;
    }
}

const searchBookname = async (policynumber) => {
    try {
        return await bookAdaptor.searchNewBook(policynumber);
    } catch (error) {
        console.error(`Error searching for book with policy number ${policynumber}:`, error);
        throw error;
    }
}


module.exports = { getAll, getOne, addNewBook, deleteBookByCode, updateNewBook, searchBookname }