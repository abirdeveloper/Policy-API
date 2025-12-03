const db = require('./db'); // Assuming you have a db.js file for database connection

const getAll = async () => {
    try {
        const [rows] = await db.query('SELECT * FROM books');
        return rows;
    } catch (error) {
        console.error('Error getting all books:', error);
        throw error; // Re-throw the error to be handled by the route handler
    }
};

const getOne = async (_id) => {
    try {
        const [rows] = await db.query('SELECT * FROM books WHERE id = ?', [_id]);
        if (rows.length === 0) {
            return null; // Or throw an error if you prefer
        }
        return rows[0];
    } catch (error) {
        console.error('Error getting book by ID:', error);
        throw error;
    }
};

const add = async (book) => {
    try {
        const { title, author, isbn } = book; // Assuming these are the fields
        const [result] = await db.query('INSERT INTO books (title, author, isbn) VALUES (?, ?, ?)', [title, author, isbn]);
        return { id: result.insertId, ...book }; // Return the newly created book with its ID
    } catch (error) {
        console.error('Error adding book:', error);
        throw error;
    }
};

const addNewBook = async (book) => {
    try {
        const { title, author, isbn } = book; // Assuming these are the fields
        const [result] = await db.query('INSERT INTO books (title, author, isbn) VALUES (?, ?, ?)', [title, author, isbn]);
        return { id: result.insertId, ...book }; // Return the newly created book with its ID
    } catch (error) {
        console.error('Error adding new book:', error);
        throw error;
    }
};

const updateBook = async (book) => {
    try {
        const { id, title, author, isbn } = book;
        const [result] = await db.query('UPDATE books SET title = ?, author = ?, isbn = ? WHERE id = ?', [title, author, isbn, id]);
        if (result.affectedRows === 0) {
            return null; // Or throw an error if the book wasn't found
        }
        return book;
    } catch (error) {
        console.error('Error updating book:', error);
        throw error;
    }
};

const deleteBookByCode = async (code) => {
    try {
        const [result] = await db.query('DELETE FROM books WHERE id = ?', [code]);
        if (result.affectedRows === 0) {
            return false; // Or throw an error if the book wasn't found
        }
        return true;
    } catch (error) {
        console.error('Error deleting book:', error);
        throw error;
    }
};

const searchBookname = async (policynumber) => {
    try {
        const [rows] = await db.query('SELECT * FROM books WHERE title LIKE ?', [`%${policynumber}%`]);
        return rows;
    } catch (error) {
        console.error('Error searching for book:', error);
        throw error;
    }
};

module.exports = { getAll, getOne, addNewBook, deleteBookByCode, updateBook, searchBookname, add };