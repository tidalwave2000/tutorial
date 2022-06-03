import React from "react";
//import ReactDOM from 'react-dom/client';
import "./index.css";
import { books } from "./books";
import App from "./App";
import Book from "./Book";
import { createRoot } from "react-dom/client";

const BookList = () => {
	return (
		<section className="booklist">
			{books.map((book) => {
				//destructure items on book array

				return (
					//use spread operator to pass items in book array to Book as props
					<Book key={book.id} {...book}></Book>
				);
			})}
		</section>
	);
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<BookList />);
