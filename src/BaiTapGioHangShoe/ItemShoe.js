import React, { Component } from "react";

export default class ItemShoe extends Component {
  render() {
    let { item, handleAdd, handleShowDetail } = this.props;
    return (
      <div className="card text-left col-3">
        <img className="card-img-top" src={item.image} alt />
        <div className="card-body">
          <h4 className="card-title">{item.name}</h4>
          <div>
            <button
              className="btn btn-success"
              onClick={() => {
                handleAdd(item);
              }}
            >
              Add
            </button>
            <button
              className="btn btn-dark "
              data-toggle="modal"
              data-target="#modelId"
              onClick={() => handleShowDetail(item)}
            >
              Detail
            </button>
          </div>
        </div>
      </div>
    );
  }
}
