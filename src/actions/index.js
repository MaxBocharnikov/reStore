const booksRequested = () => {
    return {
        type: 'FETCH_BOOKS_REQUESTED'
    }
};


const booksLoaded = (newBooks) =>  {
    return {
        type: 'FETCH_BOOKS_SUCCESS',
        payload: newBooks
    }
};

const booksError = (err) => {
    return {
        type: 'FETCH_BOOKS_FAILURE',
        payload: err
    }
};

const fetchDataOld = (bookstoreService, dispatch) => () => {
    dispatch(booksRequested());
    bookstoreService.getBooks()
        .then((books) => {
            dispatch(booksLoaded(books));
        })
        .catch((error) => {
            dispatch(booksError(error));
        });

};

const fetchData = (bookstoreService) => () => (dispatch) => {
    dispatch(booksRequested());
    bookstoreService.getBooks()
        .then((books) => {
            dispatch(booksLoaded(books));
        })
        .catch((error) => {
            dispatch(booksError(error));
        });
};

const onAddToCart = (id) => {
  return {
      type: 'BOOK_ADD_TO_CART',
      payload: id
  }
};

const onDeleteFromCart = (id) => {
    return {
        type: 'BOOK_DELETE_FROM_CART',
        payload: id
    }
};

const onDecrementFromCart = (id) => {
    return {
        type: 'BOOK_DECREMENT_FROM_CART',
        payload: id
    }
};


export {fetchData, onAddToCart, onDeleteFromCart, onDecrementFromCart};