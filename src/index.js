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
					//use spread operator to pass items in book array to Book as props
					<Book key={book.id} {...book}></Book>
				);
			})}
		</section>
	);
};

const Book = (props) => {
	//attribute, eventHandler
	//onClickevent, onMouseOver
	const ClickHandler = (e) => {
		console.log(e);
		console.log(e.target);
		alert("hello World");
	}; 

	const complexExample = (author) => {
		console.log(author);
	};


	//use special prop called children to show book description
	const { img, title, author } = props;
	return (
		<article className="book" onMouseOver={() => console.log(title)}>
			<img src={img} alt="Childrens Book" />
			<h1 onClick={() => console.log(title)}>{title}</h1>
			<h4>{author}</h4>
			<button type="button" onClick={ClickHandler}>
				reference example
			</button>
			<button type="button" onClick={() => complexExample(author)}> more complex example </button>
		</article>
	);
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<BookList />);
