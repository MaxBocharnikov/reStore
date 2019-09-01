import React from 'react';

import './book-list-item.css';

const BookListItem = ({book, onAddToCart}) => {
    const {id, title, author, price, coverImage} = book;
    return (
        <div className="book-list-item">
            <div className="book-cover">
                <img src={coverImage} alt={title}/>
            </div>
            <div className="book-details">
                <a href="#" className="book-title">{title}</a>
                <div className="book-author">{author}</div>
                <div className="book-price">${price}</div>
                <button onClick={() => onAddToCart(id)} className="btn btn-info btn-add-to-cart">Add to Cart</button>
            </div>

        </div>
    )
};

export default BookListItem;