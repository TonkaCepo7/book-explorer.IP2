import axios from "axios";

const backend = axios.create({
  baseURL: "http://localhost:5000/api", // naš Express backend
});

const GOOGLE_BOOKS_API = "https://www.googleapis.com/books/v1/volumes";

// Google Books API
export const searchGoogleBooks = async (
  query,
  startIndex = 0,
  maxResults = 10,
  lang = "",
  filter = ""
) => {
  const params = {
    q: query,
    startIndex,
    maxResults,
  };
  if (lang) params.langRestrict = lang;
  if (filter) params.filter = filter;

  const response = await axios.get(GOOGLE_BOOKS_API, { params });
  return response.data;
};

// Backend CRUD
export const getBooks = () => backend.get("/books");
export const addBook = (book) => backend.post("/books", book);
export const updateBook = (id, book) => backend.put(`/books/${id}`, book);
export const deleteBook = (id) => backend.delete(`/books/${id}`);
