import React from 'react';
import './shopping-cart-table.css';
import {connect} from 'react-redux';
import {onAddToCart, onDeleteFromCart, onDecrementFromCart} from '../../actions/'

const ShoppingCartTable = ({items, total, onIncrease, onDicrease, onDelete}) => {
    const renderRow = (item, idx) => {
        const {id, title, count, total} = item;
        return (
            <tr key={id}>
                <td>{idx + 1}</td>
                <td>{title}</td>
                <td>{count}</td>
                <td>${total}</td>
                <td>
                    <button onClick={() => onIncrease(id)} className="btn btn-outline-success btn-small"><i className="fa fa-plus-circle"></i></button>
                    <button onClick={() => onDicrease(id)} className="btn btn-outline-warning btn-small"><i className="fa fa-minus-circle"></i></button>
                    <button onClick={() => onDelete(id)} className="btn btn-outline-danger btn-small"><i className="fa fa-trash-o"></i></button>
                </td>
            </tr>
        );
    };
    return (
        <div className="shopping-cart-table">
            <h2>Your Order</h2>
            <table className="table">
                <thead>
                <tr>
                    <th>#</th>
                    <th>item</th>
                    <th>Count</th>
                    <th>Total</th>
                    <th>Action</th>
                </tr>
                </thead>

                <tbody>
                {
                    items.map(renderRow)
                }
                </tbody>
            </table>
            <div className="total">
                Total: ${total}
            </div>
        </div>
    )
};

const mapStateToProps = ({shoppingCartList}) => {
    const {cartItems, total} = shoppingCartList;
    return {
        items: cartItems,
        total: total
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onIncrease: (id) => dispatch(onAddToCart(id)),

        onDicrease: (id) => dispatch(onDecrementFromCart(id)),

        onDelete: (id) => dispatch(onDeleteFromCart(id))

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable);