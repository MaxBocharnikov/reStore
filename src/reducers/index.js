
const initialState = {
  bookList: {
      books: [],
      loading: true,
      error: null,
  },
   shoppingCartList: {
      cartItems: [],
      total: 0
  }
};

const removeFromCart = (state,id) => {
    const {shoppingCartList} = state;
    const {cartItems, total} = shoppingCartList;
    const idx = cartItems.findIndex(item => item.id === id);
    const item = cartItems[idx];
    return {
        ...state,
        cartItems: [
            ...cartItems.slice(0, idx),
            ...cartItems.slice(idx + 1)
        ],
        total: total - item.total
    }
};

const dicrementFromCart = (state,id) => {
    const {bookList, shoppingCartList} = state;
    const {books} = bookList;
    const {cartItems, total} = shoppingCartList;

    const idx = cartItems.findIndex(item => item.id === id);
    const item = cartItems[idx];
    const itemPrice = books.find(book => book.id === item.id).price;

    if (item.count === 1) {
        return removeFromCart(state,id);
    }

    const newItem = {
        ...item,
        count: item.count - 1,
        total: item.total - itemPrice
    };

    return {
        ...state,
        cartItems: [
            ...cartItems.slice(0, idx),
            newItem,
            ... cartItems.slice(idx + 1)
        ],
        total: total - itemPrice
    };
};

const updateBookList = (state, action) => {
    switch (action.type) {
        case 'FETCH_BOOKS_FAILURE':
            return {
                ...state,
                book: [],
                loading: false,
                error: action.payload
            };
        case 'FETCH_BOOKS_REQUESTED':
            return {
                ...state,
                books: [],
                loading: true
            };

        case 'FETCH_BOOKS_SUCCESS':
            return {
                ...state,
                books: action.payload,
                loading: false
            };

        default:
            return state.bookList;
    }
};

const updateShoppingCartList = (state, action) => {
  const {bookList, shoppingCartList} = state;
  const {books} = bookList;
  const {cartItems, total} = shoppingCartList;
  switch (action.type) {
      case 'BOOK_ADD_TO_CART':
          const bookId = action.payload;
          const book = books.find(book => book.id === bookId);
          const fountItemIdx = cartItems.findIndex(item => item.id === bookId);
          const incrementedItem = cartItems[fountItemIdx];
          if (incrementedItem) {
              return {
                  ...state,
                  cartItems: [
                      ...cartItems.slice(0, fountItemIdx),
                      {
                          ...incrementedItem,
                          count: incrementedItem.count + 1,
                          total: incrementedItem.total + book.price
                      },
                      ...cartItems.slice(fountItemIdx + 1)
                  ],
                  total: total + book.price
              }
          }
          else {
              const newItem = {
                  id: bookId,
                  title: book.title,
                  count: 1,
                  total: book.price
              };
              return {
                  ...state,
                  cartItems: [
                      ...cartItems,
                      newItem
                  ],
                  total: total + book.price
              };
          }

      case 'BOOK_DELETE_FROM_CART':
          return  removeFromCart(state, action.payload);

      case 'BOOK_DECREMENT_FROM_CART':
          return dicrementFromCart(state, action.payload);

      default:
          return state.shoppingCartList;
  }
};


const reducer = (state = initialState, action) => {
  return {
      bookList: updateBookList(state, action),
      shoppingCartList: updateShoppingCartList(state, action)
  }
};

export default reducer;