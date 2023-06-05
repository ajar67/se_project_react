import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import React, { useEffect, useState } from "react";
import ItemModal from "../ItemModal/ItemModal";
import { getForecastWeather, parseWeatherData } from "../../utils/weatherApi";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";
import Profile from "../Profile/Profile";
import { Route, Switch } from "react-router-dom";
import AddItemModal from "../AddItemModal/AddItemModal";
import { Get, Delete, Post } from "../../utils/api";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [temp, setTemp] = useState(0);
  const [checked, setChecked] = useState(false);
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");

  const handleToggleSwitchChange = () => {
    currentTemperatureUnit === "F"
      ? setCurrentTemperatureUnit("C")
      : setCurrentTemperatureUnit("F");
  };

  const handleChangedCheck = () => {
    setChecked(!checked);
    handleToggleSwitchChange();
  };

  const handleCreateModal = () => {
    setActiveModal("create");
  };

  const handleCloseModal = () => {
    setActiveModal("");
  };

  const handleSelectedCard = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const [initialCards, setInitialCards] = useState([]);

  const handleDeleteCard = (deleteCard) => {
    Delete(deleteCard.id)
      .then(() => {
        const filterCards = initialCards.filter((x) => deleteCard.id !== x.id);
        setInitialCards(filterCards);
      })
      .catch((err) => console.log(err))
      .finally(handleCloseModal);
  };

  function handleAddItemSubmit({ name, imageUrl, weather }) {
    Post({
      name: name,
      imageUrl: imageUrl,
      weather: weather,
    })
      .then((item) => {
        const card = { ...item, name, imageUrl, weather };
        setInitialCards([card, ...initialCards]);
      })
      .catch((err) => console.log(err))
      .finally(handleCloseModal);
  }

  useEffect(() => {
    getForecastWeather()
      .then((data) => {
        const temperature = parseWeatherData(data);
        setTemp(temperature);
        Get()
          .then((res) => {
            setInitialCards(res);
          })
          .catch(() => console.log("Error!"));
      })
      .catch(() => console.log("Error!"));
  }, []);

  return (
    <div>
      <CurrentTemperatureUnitContext.Provider
        value={{ currentTemperatureUnit, handleToggleSwitchChange }}
      >
        <Header
          onCreateModal={handleCreateModal}
          onChange={handleChangedCheck}
          value={checked}
        />
        <Switch>
          <Route exact path="/">
            <Main
              weatherTemp={temp}
              onSelectCard={handleSelectedCard}
              currentCards={initialCards}
            />
          </Route>
          <Route path="/profile">
            <Profile
              onCreateModal={handleCreateModal}
              onSelectCard={handleSelectedCard}
              currentCards={initialCards}
            />
          </Route>
        </Switch>
        <Footer />
        {activeModal === "create" && (
          <AddItemModal
            handleCloseModal={handleCloseModal}
            isOpen={activeModal === "create"}
            onAddItem={handleAddItemSubmit}
            onSelectCard={handleSelectedCard}
          />
        )}
        {activeModal === "preview" && (
          <ItemModal
            selectedCard={selectedCard}
            onClose={handleCloseModal}
            onDelete={handleDeleteCard}
          />
        )}
      </CurrentTemperatureUnitContext.Provider>
    </div>
  );
}

export default App;
