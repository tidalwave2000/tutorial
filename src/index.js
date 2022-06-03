import React from "react";
//import ReactDOM from 'react-dom/client';
import "./index.css";
import App from "./App";
import { createRoot } from "react-dom/client";

//declare vars
const firstBook = {
	img: "https://images-na.ssl-images-amazon.com/images/I/8144Vic9C5L._AC_UL604_SR604,400_.jpg",
	title: "I Love You to the Movie and Back",
	author: "Amelia Hepworth",
};

const secondBook = {
	img: "https://m.media-amazon.com/images/I/71aLultW5EL._AC_UY218_.jpg",
	title: "Our Class is a Family",
	author: "Shannon Olsen",
};

const BookList = () => {
	return (
		<section className="booklist">
			<Book
				img={firstBook.img}
				title={firstBook.title}
				author={firstBook.author}>
				<p>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio, ad
					error necessitatibus ducimus amet reprehenderit quibusdam aspernatur
					eaque? Ipsum quia aliquid praesentium unde voluptate excepturi nam
					delectus inventore ex at.
				</p>
			</Book>
			<Book
				img={secondBook.img}
				title={secondBook.title}
				author={secondBook.author}
			/>
		</section>
	);
};

const Book = (props) => {
	//use special prop called children to show book description
	const { img, title, author, children } = props;
	return (
		<article className="book">
			<img src={img} alt="Childrens Book" />
			<h1>{title}</h1>
			<h4>{author}</h4>
			{children}
		</article>
	);
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<BookList />);
