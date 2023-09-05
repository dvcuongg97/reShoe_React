import React, { Component } from "react";
import ItemShoe from "./ItemShoe";

export default class ListShoe extends Component {
  renderListShoe = () => {
    let { shoeArr, handleAdd, handleShowDetail } = this.props;
    return shoeArr.map((item, index) => {
      return (
        <ItemShoe
          key={index}
          item={item}
          handleAdd={handleAdd}
          handleShowDetail={handleShowDetail}
        />
      );
    });
  };
  render() {
    return <div className="row col-6">{this.renderListShoe()}</div>;
  }
}
