import React from "react";
//import ReactDOM from 'react-dom/client';
import "./index.css";
import App from "./App";
import { createRoot } from "react-dom/client";

//declare vars
const books = [
	{
		id: 1001,
		img: "https://images-na.ssl-images-amazon.com/images/I/8144Vic9C5L._AC_UL604_SR604,400_.jpg",
		title: "I Love You to the Movie and Back",
		author: "Amelia Hepworth",
	},

	{
		id: 1002,
		img: "https://m.media-amazon.com/images/I/71aLultW5EL._AC_UY218_.jpg",
		title: "Our Class is a Family",
		author: "Shannon Olsen",
	},
	{
		id: 1003,
		img: "https://m.media-amazon.com/images/I/71gGPRRlyTL._AC_UL320_.jpg",
		title: "The Vanishing Half: A Novel",
		author: "Brit Bennett",
	},
];




const BookList = () => {
	return (
		<section className="booklist">
			{books.map((book) => {
				//destructure items on book array
				
				return (
					<Book key={book.id} book={book}></Book>
				);
			})}
		</section>
	);
};

const Book = (props) => {
	//use special prop called children to show book description
	const { img, title, author } = props.book;
	return (
		<article className="book">
			<img src={img} alt="Childrens Book" />
			<h1>{title}</h1>
			<h4>{author}</h4>
			
		</article>
	);
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<BookList />);
