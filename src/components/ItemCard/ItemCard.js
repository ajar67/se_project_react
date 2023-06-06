import "./ItemCard.css";
import React from "react";
const ItemCard = ({ item, onSelectCard }) => (
  <div>
    <div>
      <img
        src={item.imageUrl}
        alt={item.name}
        className="card__image"
        onClick={() => onSelectCard(item)}
      />
    </div>
    <div className="card__name">{item.name}</div>
  </div>
);

export default ItemCard;
