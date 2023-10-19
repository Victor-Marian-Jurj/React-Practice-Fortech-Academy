import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ViewBook = () => {
  const { bookId } = useParams();
  const [book, setBook] = useState({});

  useEffect(() => {
    const getBookById = async () => {
      try {
        const response = await axios.get(
          `https://fcs-03-01-library-backend-sgvb3cnbwa-uc.a.run.app/books/${bookId}`
        );
        setBook(response.data);
      } catch (err) {
        console.error(err);
      }
    };

    getBookById();
  }, [bookId]);

  return <div>View book with title: {book.title} </div>;
};

export default ViewBook;
