import React, { Component } from "react";
import { GIAM_SO_LUONG, TANG_SO_LUONG } from "./data";

export default class CartShoe extends Component {
  // render
  render() {
    let { shoeCart, handleRemove, handleChangeQuantity } = this.props;
    let USDollar = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    });
    return (
      <div className="col-6">
        <table className="table">
          <thead>
            <th>Name</th>
            <th>Image</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Action</th>
          </thead>
          <tbody>
            {shoeCart.map((item, index) => {
              let { name, image, price, soLuong, id } = item;
              return (
                <tr key={index}>
                  <td>{name}</td>
                  <td>
                    <img src={image} width={100} height={80} />
                  </td>
                  <td>{USDollar.format(price)}</td>
                  <td>
                    <button
                      className="btn btn-success"
                      onClick={() => {
                        handleChangeQuantity(id, TANG_SO_LUONG);
                      }}
                    >
                      +
                    </button>
                    {soLuong}
                    <button
                      className="btn btn-success"
                      onClick={() => {
                        handleChangeQuantity(id);
                      }}
                    >
                      -
                    </button>
                  </td>
                  <td>{USDollar.format(price * soLuong)}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleRemove(id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
          <tr>
            <th colSpan={3}></th>
            <th>Total</th>
            <th>
              {USDollar.format(
                shoeCart.reduce((tongTien, item, index) => {
                  return (tongTien += item.soLuong * item.price);
                }, 0)
              )}
            </th>
          </tr>
        </table>
      </div>
    );
  }
}
