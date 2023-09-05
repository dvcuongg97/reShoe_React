import React, { Component } from "react";

export default class DetailShoe extends Component {
  render() {
    let { shoeDetail } = this.props;
    let {
      id,
      name,
      alias,
      price,
      description,
      shortDescription,
      quantity,
      image,
    } = shoeDetail;
    return (
      <div
        class="modal fade"
        id="modelId"
        tabindex="-1"
        role="dialog"
        aria-labelledby="modelTitleId"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">SHOE DETAIL</h5>
              {/* <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button> */}
            </div>
            <div class="modal-body">
              <div>
                <img style={{ width: "-webkit-fill-available" }} src={image} />
              </div>
              <p>
                {" "}
                Mã sản phẩm: <strong>{id}</strong>{" "}
              </p>
              <p>
                Tên sản phẩm: <strong>{name}</strong>
              </p>
              <p>
                Gía sản phẩm: <strong>{price} $</strong>
              </p>
              <p>
                Mô tả sản phẩm: <strong>{description}</strong>
              </p>
              <p>
                Số lượng sẵn có: <strong>{quantity}</strong>
              </p>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
