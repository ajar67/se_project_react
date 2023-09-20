import "./ItemCard.css";
import React, { useState } from "react";
import likeButtonInactive from "../../images/likeButtonInactive.svg";
import likeButtonActive from "../../images/likeButtonActive.svg";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

const ItemCard = ({ item, onSelectCard, onCardLike }) => {
  const { currentUser } = React.useContext(CurrentUserContext);
  console.log("item: ", item);
  const isLiked = item.likes.some((id) => id === currentUser._id);
  const itemLikeButtonClassName = `card__button-like ${
    isLiked ? "card__button-like_visible" : "card__button-like_hidden"
  }`;

  const [activeLike, setActiveLike] = useState(false);

  function handleLikeClick() {
    onCardLike({ id: item._id, isLiked: isLiked, user: currentUser });
    setActiveLike((prevActiveLike) => !prevActiveLike);
  }

  return (
    <div className="card__container">
      <div className="card__inform">
        <div className="card__name">{item.name}</div>
        <button
          type="button"
          className={itemLikeButtonClassName}
          onClick={() => handleLikeClick()}
        >
          <img
            src={activeLike ? likeButtonActive : likeButtonInactive}
            alt="like button"
            className="card__likebutton_img"
          />
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
