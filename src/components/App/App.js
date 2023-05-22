import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useEffect, useState } from "react";
import ItemModal from "../ItemModal/ItemModal";
import { getForecastWeather, parseWeatherData } from "../../utils/weatherApi";
import {CurrentTemperatureUnitContext} from "../../Contexts/CurrentTemperatureUnitContext";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [temp, setTemp] = useState(0);
  const [checked, setChecked] = useState(false);
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");

  const handleToggleSwitchChange = () => {
    currentTemperatureUnit === 'F' ? setCurrentTemperatureUnit('C') : setCurrentTemperatureUnit('F');
  };

  const handleChangedCheck = () => {
    setChecked(!checked);
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

  useEffect(() => {
    getForecastWeather()
      .then((data) => {
        const temperature = parseWeatherData(data);
        setTemp(temperature);
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
        <Main weatherTemp={temp} onSelectCard={handleSelectedCard} />
        <Footer />
        {activeModal === "create" && (
          <ModalWithForm
            title="New Garment"
            buttonText="Add garment"
            onClose={handleCloseModal}
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
          <ItemModal selectedCard={selectedCard} onClose={handleCloseModal} />
        )}
      </CurrentTemperatureUnitContext.Provider>
    </div>
  );
}

export default App;
