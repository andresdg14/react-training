import { createContext, useCallback, useState } from 'react';
import axios from 'axios';

const BooksContext = createContext();

function Provider({ children }) {
  const [books, setBooks] = useState([]);

  const fetchBooks = useCallback(async () => {
    const response = await axios.get('http://localhost:3001/books');

    setBooks(response.data);
  }, []);

  const deleteBookById = async (id) => {
    await axios.delete(`http://localhost:3001/books/${id}`);
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });

    setBooks(updatedBooks);
  };

  const editBookById = async (id, newTitle) => {
    const response = await axios.put(`http://localhost:3001/books/${id}`, {
      title: newTitle,
    });

    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, ...response.data }; // ...response.data para devolver el libro completo y evitar que tengamos una versión desactualizada del objeto cuando más de un usuario lo intenta actualizar al mismo tiempo
      }

      return book; //Para devolver el resto de libros que no han sido modificados
    });

    setBooks(updatedBooks);
  };

  const createBook = async (title) => {
    // En el response guardo la respuesta de Axios al enviar la petición de crear un nuevo libro
    const response = await axios.post('http://localhost:3001/books', {
      title,
    });

    // Guardo el listado de libros anteriores a la creación solicitada más este último que hemos añadido
    const updatedBooks = [...books, response.data];

    // Actualizo el state
    setBooks(updatedBooks);
  };

  const valueToShare = {
    books,
    deleteBookById,
    createBook,
    editBookById,
    fetchBooks,
  };

  return (
    <BooksContext.Provider value={valueToShare}>
      {children}
    </BooksContext.Provider>
  );
}

export { Provider };
export default BooksContext;
