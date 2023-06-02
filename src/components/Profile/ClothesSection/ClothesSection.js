import ItemCard from "../../ItemCard/ItemCard";
import React from "react";
import "./ClothesSection.css";

const ClothesSection = ({ onCreateModal, currentCards, onSelectCard }) => {
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
          {currentCards.map((item) => (
            <ItemCard item={item} key={item.id} onSelectCard={onSelectCard} />
          ))}
        </section>
      </div>
    </div>
  );
};

export default ClothesSection;
