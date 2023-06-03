import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import React, { useEffect, useState } from "react";
import ItemModal from "../ItemModal/ItemModal";
import { getForecastWeather, parseWeatherData } from "../../utils/weatherApi";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";
import Profile from "../Profile/Profile";
import { Route, Switch } from "react-router-dom";
//import AddItemModal from "../AddItemModal/AddItemModal";
import { Get, Delete, Post } from "../../utils/api";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [temp, setTemp] = useState(0);
  const [checked, setChecked] = useState(false);
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");

  const handleToggleSwitchChange = () => {
    // currentTemperatureUnit === "F"
    //   ? setCurrentTemperatureUnit("C")
    //   : setCurrentTemperatureUnit("F");

    if (currentTemperatureUnit === "F") {
      setCurrentTemperatureUnit("C");
    } else {
      setCurrentTemperatureUnit("F");
    }
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
        console.log(filterCards, initialCards, deleteCard);
        setInitialCards(filterCards);
      })
      .catch((err) => console.log(err))
      .finally(handleCloseModal);
  };

  const handleAddItemSubmit = (inputValue) => {
    Post({
      name: inputValue.name,
      imageUrl: inputValue.imageUrl,
      weather: inputValue.weather,
    })
      .then((item) => {
        setInitialCards([item, ...initialCards]);
      })
      .catch((err) => console.log(err))
      .finally(handleCloseModal);
  };

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
          <ModalWithForm
            title="New Garment"
            buttonText="Add garment"
            onClose={handleCloseModal}
            onAddItem={handleAddItemSubmit}
          >
            <label className="modal__info">
              Name
              <input
                className="modal__input"
                type="text"
                name="name"
                minLength="1"
                maxLength="30"
                placeholder="Name"
              />
            </label>
            <label className="modal__info">
              Image
              <input
                className="modal__input"
                type="url"
                name="link"
                minLength="1"
                maxLength="30"
                placeholder="ImageURL"
              />
            </label>
            <p className="modal__info">Select the weather type:</p>
            <div>
              <div>
                <input
                  className="modal__radio"
                  type="radio"
                  id="hot"
                  value="hot"
                  name="radio"
                />
                <label className="modal__label">Hot</label>
              </div>
              <div>
                <input
                  className="modal__radio"
                  type="radio"
                  id="warm"
                  value="warm"
                  name="radio"
                />
                <label className="modal__label">Warm</label>
              </div>
              <div>
                <input
                  className="modal__radio"
                  type="radio"
                  id="cold"
                  value="cold"
                  name="radio"
                />
                <label className="modal__label">Cold</label>
              </div>
            </div>
          </ModalWithForm>
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
