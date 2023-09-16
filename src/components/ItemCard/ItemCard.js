import "./ItemCard.css";
import React from "react";
import likeButton from "../../images/likeButton.svg";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

const ItemCard = ({ item, onSelectCard, onCardLike }) => {
  const { currentUser } = React.useContext(CurrentUserContext);
  function handleLikeClick() {
    onCardLike(item);
  }
  console.log('item: ', item);
  const isLiked = item.likes.some((id) => id === currentUser._id);
  const itemLikeButtonClassName = `card__button-like ${
    isLiked ? "card__button-like_visible" : "card__button-like_hidden"
  }`;

  return (
    <div>
      <div className="card__inform">
        <div className="card__name">{item.name}</div>
        <button
          type="button"
          className={itemLikeButtonClassName}
          onClick={handleLikeClick}
        >
          {likeButton}
        </button>
      </div>
      <div className="card__pic">
        <img
          src={item.imageUrl}
          alt={item.name}
          className="card__image"
          onClick={() => onSelectCard(item)}
        />
      </div>
    </div>
  );
};

export default ItemCard;
