import React from 'react';
import {connect} from 'react-redux';
import {fetchData, onAddToCart} from "../../actions/index"
import withBookstoreService from "../../components/hoc/with-bookstore-service";
import ErrorIndicator from "../../components/error-indicator/error-indicator";
import Spinner from "../../components/spinner/spinner";
import BookList from "../../components/books-list/book-list";
import {bindActionCreators} from 'redux';


class BookListContainer extends React.Component {

    componentDidMount() {
        this.props.fetchData();
    };


    render() {
        const {books, loading, error, onAddToCart} = this.props;
        if (loading) {
            return <Spinner/>
        }

        if (error) {
            return <ErrorIndicator error = {error}/>
        }

        return (
            <BookList onAddToCart={onAddToCart}  books = {books}/>
        )
    }
}

const mapStateToProps = ({bookList: {books, loading, error}}) => {
    return {
        books: books,
        loading,
        error
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    /*return {
        booksLoaded: (newBooks) => dispatch(booksLoaded(newBooks))
    }*/
    /*return bindActionCreators({booksLoaded}, dispatch);*/
    /*booksLoaded,
    booksRequested,
    booksError*/
    const {bookstoreService} = ownProps;
    return  bindActionCreators({
        fetchData: () => fetchData(bookstoreService)(),
        //fetchData: fetchData(bookstoreService, dispatch),
        onAddToCart: onAddToCart
    }, dispatch)
};


export default withBookstoreService()(connect(mapStateToProps, mapDispatchToProps)(BookListContainer))