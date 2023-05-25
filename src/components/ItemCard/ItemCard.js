import "./ItemCard.css";
import React from "react";
const ItemCard = ({ item, onSelectCard }) => (
  <div>
    <div>
      <img
        src={item.link}
        className="card__image"
        onClick={() => onSelectCard(item)}
      />
    </div>
    <div className="card__name">{item.name}</div>
  </div>
);

export default ItemCard;
