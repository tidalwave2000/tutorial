import React from "react";
//import ReactDOM from 'react-dom/client';
import "./index.css";
import App from "./App";
import { createRoot } from "react-dom/client";

//declare vars
const books = [
	{
		img: "https://images-na.ssl-images-amazon.com/images/I/8144Vic9C5L._AC_UL604_SR604,400_.jpg",
		title: "I Love You to the Movie and Back",
		author: "Amelia Hepworth",
	},

	{
		img: "https://m.media-amazon.com/images/I/71aLultW5EL._AC_UY218_.jpg",
		title: "Our Class is a Family",
		author: "Shannon Olsen",
	},
];


const names = ["john", "peter", "susan"];
const newName = names.map((name) => {
	return <h1>{name}</h1>;
});

console.log(newName);

const BookList = () => {
	return (
		<section className="booklist">
			{newName}
		</section>
	);
};

const Book = (props) => {
	//use special prop called children to show book description
	const { img, title, author } = props;
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
