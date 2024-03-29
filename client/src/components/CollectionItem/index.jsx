import React from "react";
import "./index.scss";
import CustomButton from "../CustomButton";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cartActions";

function CollectionItem({ item, addItem }) {
  const { name, imageUrl, price } = item;
  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton onClick={() => addItem(item)} inverted>
        ADD TO CART
      </CustomButton>
    </div>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    addItem: item => {
      dispatch(addItem(item));
    }
  };
}

export default connect(
  null,
  mapDispatchToProps
)(CollectionItem);
