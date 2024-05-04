import React from "react";
import { Table, Button } from "reactstrap";
import { bindActionCreators } from "redux";
import * as cartActions from "../../redux/actions/cartActions";
import { connect } from "react-redux";
import alertify from "alertifyjs";
import {
    NavItem,
    NavLink,
  } from "reactstrap";

const CartDetail = (props) => {
  const removeFromCart =  (product) => {
    props.actions.removeFromCart(product);
    alertify.error(product.productName + "removed to cart!");
  };

  const renderEmpty = () => {
    return (
      <NavItem>
        <NavLink>Cart is empty!</NavLink>
      </NavItem>
    );
  };
  const renderSummary = () => {
  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Product Name</th>
            <th>Unit Price</th>
            <th>Quantity</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {props.cart.map((cartItem) => (
            <tr key={cartItem.product.id}>
              <th scope="row">{cartItem.product.id}</th>
              <td>{cartItem.product.productName}</td>
              <td>{cartItem.product.unitPrice}</td>
              <td>{cartItem.quantity}</td>
              <td>
                <Button
                  color="danger"
                  onClick={() => removeFromCart(cartItem.product)}
                >
                  Remove to cart
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};
return <div>{props.cart.length > 0 ? renderSummary() : renderEmpty()}</div>;
};
function mapStateToProps(state) {
  return {
    cart: state.cartReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      removeFromCart: bindActionCreators(cartActions.removeFromCart, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CartDetail);
