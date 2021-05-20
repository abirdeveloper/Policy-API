const bookAdaptor = require('./lib/policy-adaptor')

const getAll = () => {
    const books = bookAdaptor.getAll();
    return books
}

const getOne = (_id) => {
    const book = bookAdaptor.getOne(_id);
    return book
}

const add = (book) => {
    const books = bookAdaptor.add(book)
    return books
}
const addNewBook = (book)=>{
  return  bookAdaptor.addNewBook(book)
}
const updateNewBook = (book)=>{
    return  bookAdaptor.updateBook(book)
  }

const deleteBookByCode = (code)=>{
    return bookAdaptor.deleteNewBook(code)
}

const searchBookname = async(policynumber)=>{
    return await bookAdaptor.searchNewBook(policynumber)
}


module.exports = {getAll, getOne, addNewBook,deleteBookByCode,updateNewBook,searchBookname}