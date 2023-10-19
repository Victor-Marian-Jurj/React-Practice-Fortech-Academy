import { useEffect, useState } from "react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import BookItem from "./BookItem";
import "../../styles/BooksList.css";
import axios from "axios";

const BooksList = () => {
  const [books, setBooks] = useState([]);

  // async function a() {

  // }

  // const b = async () => {};
  //get books data on component mount
  //mounted

  const getBooks = async () => {
    try {
      const response = await axios.get(
        "https://fcs-03-01-library-backend-sgvb3cnbwa-uc.a.run.app/books"
      );
      setBooks(response.data.books);
      
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <Stack
      direction="row"
      sx={{
        flexWrap: "wrap",
        gap: "3rem",
      }}
    >
      {books.length === 0 ? (
        <Box className="center-flex-container ">
          <CircularProgress />
        </Box>
      ) : (
        books.map((book) => <BookItem book={book} key={book.id} />)
      )}
    </Stack>
  );
};

export default BooksList;
