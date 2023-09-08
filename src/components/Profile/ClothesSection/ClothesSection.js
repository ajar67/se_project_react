import ItemCard from "../../ItemCard/ItemCard";
import React from "react";
import "./ClothesSection.css";
import { CurrentUserContext } from "../../../contexts/CurrentUserContext";

const ClothesSection = ({ onCreateModal, currentCards, onSelectCard }) => {
  const {currentUser} = React.useContext(CurrentUserContext);
  const userCards = currentCards.map((card) => {
    return card.owner._id === currentUser._id
  });
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
            <ItemCard item={item} key={item.id} onSelectCard={onSelectCard} />
          ))}
        </section>
      </div>
    </div>
  );
};

export default ClothesSection;
