import { Button } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";

const EditBook = () => {
  const params = useParams();
  const navigate = useNavigate();

  const handleCancelClick = () => {
    //code
    navigate("/books");
  };

  return (
    <div>
      Edit book with id: {params.bookId}
      <Button variant="outlined" onClick={handleCancelClick}>
        Cancel
      </Button>
    </div>
  );
};

export default EditBook;
