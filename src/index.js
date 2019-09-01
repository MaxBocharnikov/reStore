import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom';

import App from '../src/components/app';
import ErrorBoundry from './components/error-boundry';
import BooksStoreService from './services/bookstore-service';
import { BookstoreServiceProvider } from "./components/bookstore-service-context/book-service-context";

import store from './store';

const bookstoreService = new BooksStoreService();
ReactDOM.render(
    <Provider store={store}>
     <ErrorBoundry>
         <BookstoreServiceProvider value={bookstoreService}>
         <Router>
             <App/>
         </Router>
         </BookstoreServiceProvider>
     </ErrorBoundry>
    </Provider>
    ,document.getElementById('root')
);