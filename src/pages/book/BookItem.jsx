import { Stack, Typography } from "@mui/material";
import CircleBackgroundIcon from "../../components/CircleBackgroundIcon";
import DeleteSharpIcon from "@mui/icons-material/DeleteSharp";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import { Link } from "react-router-dom";

export default function BookItem({ book }) {
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
          <CircleBackgroundIcon icon={DeleteSharpIcon} color="white" />
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
