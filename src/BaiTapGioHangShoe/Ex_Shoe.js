import React, { Component } from "react";
import { TANG_SO_LUONG, shoeArr } from "./data";
import ListShoe from "./ListShoe";
import CartShoe from "./CartShoe";
import DetailShoe from "./DetailShoe";

export default class Ex_Shoe extends Component {
  // state
  state = {
    shoeArr: shoeArr,
    shoeCart: [],
    shoeDetail: {},
  };
  // thêm sản phẩm vào giỏ hàng
  handleAdd = (selectedShoe) => {
    let cloneShoeCart = [...this.state.shoeCart];
    let index = cloneShoeCart.findIndex((item) => {
      return item.id === selectedShoe.id;
    });
    if (index == -1) {
      let newShoeArr = { ...selectedShoe, soLuong: 1 };
      cloneShoeCart.push(newShoeArr);
    } else {
      cloneShoeCart[index].soLuong += 1;
    }
    this.setState({
      shoeCart: cloneShoeCart,
    });
  };
  // xóa sản phẩm
  handleRemove = (idShoe) => {
    let cloneShoeCart = [...this.state.shoeCart];
    let index = cloneShoeCart.findIndex((item) => {
      return item.id == idShoe;
    });
    cloneShoeCart.splice(index, 1);
    this.setState({
      shoeCart: cloneShoeCart,
    });
  };
  // tăng giảm số lượng
  handleChangeQuantity = (idShoe, option) => {
    let cloneShoeCart = this.state.shoeCart;
    let index = cloneShoeCart.findIndex((item) => {
      return item.id == idShoe;
    });
    if (option == TANG_SO_LUONG) {
      cloneShoeCart[index].soLuong++;
    } else {
      cloneShoeCart[index].soLuong--;
      cloneShoeCart[index].soLuong == 0 && this.handleRemove(idShoe);
    }
    this.setState({
      shoeCart: cloneShoeCart,
    });
  };
  // btn detail
  handleShowDetail = (shoe) => {
    let cloneShoeDetail = { ...this.state.shoeDetail };

    // let index = this.state.shoeArr.findIndex((item) => {
    //   return (item.id = idShoe);
    // });
    cloneShoeDetail = shoe;
    console.log(
      "🚀 ~ file: Ex_Shoe.js:65 ~ Ex_Shoe ~ cloneShoeDetail:",
      cloneShoeDetail
    );

    this.setState({
      shoeDetail: cloneShoeDetail,
    });
  };
  //
  render() {
    return (
      <div>
        <h1 className="text-center my-5">SHOE APP</h1>

        <div className="container-fluid row my-5">
          <ListShoe
            shoeArr={this.state.shoeArr}
            handleAdd={this.handleAdd}
            handleShowDetail={this.handleShowDetail}
          />
          <CartShoe
            shoeCart={this.state.shoeCart}
            handleRemove={this.handleRemove}
            handleChangeQuantity={this.handleChangeQuantity}
          />
        </div>
        <DetailShoe
          shoeDetail={this.state.shoeDetail}
          handleShowDetail={this.handleShowDetail}
        />
      </div>
    );
  }
}
