import React from 'react';
import BookListContainer from '../../containers/book-list-container';
import ShoppingCartTable from "../shopping-cart-table/shopping-cart-table";

const HomePage = () => {
  return (
      <React.Fragment>
          <BookListContainer/>
        <ShoppingCartTable/>
      </React.Fragment>
  )
};

export default HomePage