import { defaultClothingItems } from "../../utils/constants";
import ItemCard from "../ItemCard/ItemCard";
import React from "react";

const ClothesSection = () => {
  return (
    <div className="clothes">
      <div className="clothes__intro">
        Your Items
        <button className="clothes__button" type="button">
          + Add New
        </button>
      </div>
      <section className="clothes__section">
        {defaultClothingItems.map((item) => (
          <ItemCard item={item} key={item._id} onSelectCard={onSelectCard} />
        ))}
      </section>
    </div>
  );
};

export default ClothesSection;
