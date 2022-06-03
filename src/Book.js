import React from 'react'


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
            <button type="button" onClick={() => complexExample(author)}>
                {" "}
                more complex example{" "}
            </button>
        </article>
    );
};


export default Book;