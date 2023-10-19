import { Stack, Typography } from "@mui/material";
import CircleBackgroundIcon from "../../components/CircleBackgroundIcon";
import DeleteSharpIcon from "@mui/icons-material/DeleteSharp";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import { Link } from "react-router-dom";
import { useState } from "react";
import ConfirmDeleteBookDialog from "./ConfirmDeleteBookDialog";
import axios from "axios";

export default function BookItem({ book }) {
  const [isOpen, setIsOpen] = useState(false);
  
  const handleOpenDialog = () => {
    setIsOpen(true);
  };

const handleCloseDialog = () => {
  setIsOpen(false);
}

  const handleDeleteBook = () => {
    axios.delete("https://fcs-03-01-library-backend-sgvb3cnbwa-uc.a.run.app/books/" + book.id)
  }
  return (
    <Stack
      direction="column"
      alignItems="center"
      spacing={0.5}
      className="book-cover-width"
    >
      <div className="book-cover-container">
        <img
          className="book-cover book-cover-width book-cover-height"
          src={`../../images/${book.id}.jpg`}
          loading="lazy"
          alt="Book cover"
        />
        <Stack
          direction="row"
          alignItems="center"
          spacing={4}
          className="middle"
        >
          <Link to={`/books/${book.id}`}>
            <CircleBackgroundIcon icon={VisibilityIcon} color="white" />
          </Link>
          <Link to={`/books/${book.id}/edit`}>
            <CircleBackgroundIcon icon={EditIcon} color="white" />
          </Link>
          <CircleBackgroundIcon icon={DeleteSharpIcon} color="white" onClick = {handleOpenDialog} />
        <ConfirmDeleteBookDialog isOpen = {isOpen} onClose={handleCloseDialog} onDelete ={handleDeleteBook}/>
        </Stack>
      </div>

      <Typography sx={{ fontWeight: "bold" }}>
        <Link to={"/books/" + book.id}>
          {book.title} - {book.authors}
        </Link>
      </Typography>
    </Stack>
  );
}
