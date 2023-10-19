import { Snackbar } from "@mui/material";
import { useInput } from "../../hooks/useInput";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const CreateBook = () => {
  const [title, handleTitleChange] = useInput();
  const [author, handleAuthorChange] = useInput();
  const [year, handleYearChange] = useInput();
  const [isbn, handleISBNChange] = useInput();
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleAddBook = async () => {
    const book = {
      title: title,
      authors: author,
      year: Number(year),
      isbn: isbn,
    };

    try {
      await axios.post(
        "https://fcs-03-01-library-backend-sgvb3cnbwa-uc.a.run.app/books",
        book
      );

      navigate("/books");
      setIsOpen(true);
    } catch (error) {
      console.error(error);
    } finally {
    }
  };

  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        alignItem: "center",
        justifyContent: "center",
      }}
    >
      <Snackbar
        open={isOpen}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Book saved successfully!"
      />
      <h1>Add Book</h1>
      <TextField
        variant="outlined"
        label="Title"
        value={title}
        onChange={handleTitleChange}
      />
      <TextField
        variant="outlined"
        label="Author"
        value={author}
        onChange={handleAuthorChange}
      />
      <TextField
        variant="outlined"
        label="Year"
        value={year}
        onChange={handleYearChange}
      />
      <TextField
        variant="outlined"
        label="ISBN"
        value={isbn}
        onChange={handleISBNChange}
      />
      <Button
        variant="contained"
        onClick={handleAddBook}
        sx={{
          maxWidth: "100px",
        }}
      >
        Add
      </Button>
    </Box>
  );
};

export default CreateBook;
