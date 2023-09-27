import "./ItemCard.css";
import React, { useState } from "react";
import likeButtonInactive from "../../images/likeButtonInactive.svg";
import likeButtonActive from "../../images/likeButtonActive.svg";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

const ItemCard = ({ item, onSelectCard, onCardLike, loggedIn }) => {
  const { currentUser } = React.useContext(CurrentUserContext);
  const isLiked2 = item.likes.some((like) => like === currentUser?._id);
  const itemLikeButtonClassName = `card__button-like ${
    loggedIn ? "card__button-like_visible" : "card__button-like_hidden"
  }`;

  const [isLiked, setIsLiked] = useState(
    item.likes.some((like) => like === currentUser?._id)
  );

  if (item._id === "6514800ee8c0bf3be38d23ef")
    console.log({ isLiked, isLiked2 });

  function handleLikeClick() {
    const newLikeStatus = !isLiked;
    onCardLike({ id: item._id, isLiked: isLiked, user: currentUser })
      .then(() => {
        setIsLiked(newLikeStatus);
      })
      .catch((err) => console.error(err));
  }

  //   function handleLikeClick() {
  //     if (item.likes.includes(currentUser._id)) {
  //       onCardLike({ id: item._id, isLiked: true, user: currentUser });
  //       setActiveLike(false);
  //     } else {
  //       onCardLike({ id: item._id, isLiked: false, user: currentUser });
  //       setActiveLike(true);
  //     }
  //  }

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
          onClick={handleLikeClick}
        >
          <img
            src={isLiked ? likeButtonActive : likeButtonInactive}
            alt="like button"
            className="card__likebutton_img"
          />
        </button>
      </div>
    </div>
  );
};

export default ItemCard;
