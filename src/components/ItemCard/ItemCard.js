import "./ItemCard.css";
import React, { useState } from "react";
import likeButtonInactive from "../../images/likeButtonInactive.svg";
import likeButtonActive from "../../images/likeButtonActive.svg";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

const ItemCard = ({ item, onSelectCard, onCardLike }) => {
  const { currentUser } = React.useContext(CurrentUserContext);
  console.log("item: ", item);
  console.log("item.likes = ", item.likes);
  console.log("item.owner = ", item.owner);
  console.log(currentUser);
  const isLiked = item.owner === currentUser?._id ? true : false;
  console.log("isLiked: ", isLiked);
  const itemLikeButtonClassName = `card__button-like ${
    isLiked ? "card__button-like_visible" : "card__button-like_hidden"
  }`;

  console.log(itemLikeButtonClassName);

  const [activeLike, setActiveLike] = useState(false);
  console.log(activeLike, "active like");

  function handleLikeClick() {
    onCardLike({ id: item._id, isLiked: isLiked, user: currentUser });
    setActiveLike((prevActiveLike) => !prevActiveLike);
  }

  return (
    <div className="card__container">
      <img
        src={item.imageUrl}
        alt={item.name}
        className="card__image"
        onClick={() => onSelectCard(item)}
      />
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
    </div>
  );
};

export default ItemCard;
