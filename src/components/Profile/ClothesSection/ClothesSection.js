import ItemCard from "../../ItemCard/ItemCard";
import React from "react";
import "./ClothesSection.css";
import { CurrentUserContext } from "../../../contexts/CurrentUserContext";

const ClothesSection = ({
  onCreateModal,
  currentCards,
  onSelectCard,
  onCardLike,
}) => {
  const { currentUser } = React.useContext(CurrentUserContext);
  console.log("dddd", currentCards);
  const userCards = currentCards.filter(
    (card) => card.owner === currentUser._id
  );
  console.log("userCards: ", userCards);
  return (
    <div className="clothes">
      <div className="clothes__section">
        <div className="clothes__intro">
          Your Items
          <button
            className="clothes__button"
            type="button"
            onClick={onCreateModal}
          >
            + Add New
          </button>
        </div>
        <section className="clothes__cards">
          {userCards.map((item) => (
            <ItemCard
              item={item}
              key={item._id}
              onSelectCard={onSelectCard}
              onCardLike={onCardLike}
            />
          ))}
        </section>
      </div>
    </div>
  );
};

export default ClothesSection;
