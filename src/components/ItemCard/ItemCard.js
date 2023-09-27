import "./ItemCard.css";
import React, { useState } from "react";
import likeButtonInactive from "../../images/likeButtonInactive.svg";
import likeButtonActive from "../../images/likeButtonActive.svg";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

const ItemCard = ({ item, onSelectCard, onCardLike, loggedIn }) => {
  const { currentUser } = React.useContext(CurrentUserContext);
  //const isLiked = item.likes.some((like) => like?._id === currentUser?._id);
  const itemLikeButtonClassName = `card__button-like ${
    loggedIn ? "card__button-like_visible" : "card__button-like_hidden"
  }`;

  const [activeLike, setActiveLike] = useState(!!item.likes.length);

  function handleLikeClick() {
    const newLikeStatus = !activeLike;
    console.log("newLikeStatus: ", newLikeStatus);
    onCardLike({ id: item._id, isLiked: activeLike, user: currentUser });
    setActiveLike(newLikeStatus);
    //console.log('newLikeStatus: ', newLikeStatus);

    //localStorage.setItem("isLiked", newLikeStatus);
  }

  // useEffect(() => {
  //   const likedStatus = localStorage.getItem("isLiked");
  //   setActiveLike(likedStatus === "true");
  // }, []);

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
