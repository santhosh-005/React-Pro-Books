import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get("https://reactnd-books-api.udacity.com/books", {
        headers: { Authorization: "whatever-you-want" },
      })
      .then((res) => {
        setBooks(res.data.books);
        // console.log(res.data.books[0].authors[0])
      })
      .catch((err) => console.log("Website Not Found (404 error)"));
  }, []);

  return (
    <div>
      {books.map((book, index) => {
        return (
          <div key={index} id="books">
            <h2>{book.title}</h2>
            <div style={{ display: "flex" }}>
              <img src={book.imageLinks.thumbnail} />
              <p>{book.description}</p>
            </div>
            <p>
              {book.authors.map((ele) => {
                return <span>{ele}, </span>;
              })}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
