import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import React, { useEffect, useState } from "react";
import ItemModal from "../ItemModal/ItemModal";
import { getForecastWeather, parseWeatherData } from "../../utils/weatherApi";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import Profile from "../Profile/Profile";
import { Route, Switch, useHistory } from "react-router-dom";
import AddItemModal from "../AddItemModal/AddItemModal";
import {
  getItems,
  addItem,
  deleteItem,
  profileUpdate,
  addCardLike,
  removeCardLike,
} from "../../utils/api";
import ProtectedRoute from "../ProtectedRoute";
import * as auth from "../../auth";
import RegisterModal from "../RegisterModal/RegisterModal";
import LoginModal from "../LoginModal/LoginModal";
import EditProfileModal from "../EditProfileModal/EditProfielModal";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [temp, setTemp] = useState(0); // here we wil have an object, like: { C: 4, F: 17 }
  const [checked, setChecked] = useState(false); // either true or false
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [isLoading, setIsLoading] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [initialCards, setInitialCards] = useState([]);
  const [openLoginModal, setLoginModal] = useState("");
  const [openRegisterModal, setRegisterModal] = useState("");
  const [openEditProfileModal, setEditProfileModal] = useState("");
  const [token, setToken] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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

  const handleLoading = () => {
    setIsLoading((state) => !state);
  };

  useEffect(() => {
    if (!activeModal) return;
    const closeByEscape = (e) => {
      if (e.key === "Escape") {
        handleCloseModal();
      }
    };

    document.addEventListener("keydown", closeByEscape);

    return () => document.removeEventListener("keydown", closeByEscape);
  }, [activeModal]);

  const handleSelectedCard = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const handleDeleteCard = (deleteCard) => {
    handleLoading();
    deleteItem(deleteCard.id)
      .then(() => {
        const filterCards = initialCards.filter((x) => deleteCard.id !== x.id);
        setInitialCards(filterCards);
        handleCloseModal();
      })
      .catch(console.error)
      .finally(handleLoading);
  };

  function handleAddItemSubmit({ name, imageUrl, weather }) {
    handleLoading();
    addItem({
      name: name,
      imageUrl: imageUrl,
      weather: weather,
    })
      .then((item) => {
        const card = { ...item, name, imageUrl, weather };
        setInitialCards([card, ...initialCards]);
        handleCloseModal();
      })
      .catch(console.error)
      .finally(handleLoading);
  }

  function handleLogin({ email, password }) {
    handleLoading();
    auth
      .authorize(email, password)
      .then((res) => {
        if (res) {
          localStorage.setItem("jwt", res.token);
          auth
            .checkToken(res.token)
            .then((data) => {
              setCurrentUser(data);
              console.log(data);
            })
            .catch((err) => console.log("Token failure: ", err));
        }
        handleCloseLoginModal();
      })
      .catch((err) => console.log("Login failed: ", err))
      .finally(handleLoading);
  }

  const handleLoginModal = () => {
    handleCloseRegisterModal();
    setLoginModal("create");
  };
  const handleCloseLoginModal = () => {
    setLoginModal("");
  };

  function handleRegistration({ email, password, name, avatar }) {
    handleLoading();
    auth
      .register(email, password, name, avatar)
      .then((res) => {
        if (res) {
          localStorage.setItem("jwt", res.token);
          auth
            .checkToken(res.token)
            .then((data) => {
              setCurrentUser(data);
            })
            .catch((err) => console.log("Token failure: ", err));
          setIsLoggedIn(true); //history.push() maybe
        }
        handleCloseRegisterModal();
      })
      .catch((err) => console.log("Registration failed:", err))
      .finally(handleLoading);
  }

  const handleRegisterModal = () => {
    handleCloseLoginModal();
    setRegisterModal("create");
  };
  const handleCloseRegisterModal = () => {
    setRegisterModal("");
  };

  const handleEditProfileModal = () => {
    setEditProfileModal("create");
  };
  const handleCloseEditProfileModal = () => {
    setEditProfileModal("");
  };

  function handleEditProfile({ name, avatar }) {
    handleLoading();
    profileUpdate({ name, avatar })
      .then((res) => {
        return res;
      })
      .catch((err) => console.log("Update denied: ", err))
      .finally(handleLoading);
  }

  useEffect(() => {
    getForecastWeather()
      .then((data) => {
        const temperature = parseWeatherData(data);
        console.log(temperature);
        setTemp(temperature);
        getItems()
          .then((res) => {
            setInitialCards(res.data);
          })
          .catch(() => console.log("Error!"));
      })
      .catch(() => console.log("Error!"));
  }, []);

  useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      setToken(jwt);
      auth
        .checkToken(token)
        .then((res) => {
          return res;
        })
        .catch((err) => console.log("Invalid token: ", err));
    }
  }, []);

  const history = useHistory("");

  const logout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("jwt");
    history.push("/login");
  };

  const [clothingItems, setClothingItems] = useState("");

  ////////////////////////////////////////////from the breif /////////////////////

  const handleLikeClick = ({ id, isLiked, user }) => {
    console.log(clothingItems);
    const token = localStorage.getItem("jwt");
    isLiked
      ? addCardLike(id, token)
          .then((updatedCard) => {
            setClothingItems((cards) =>
              cards.map((c) => (c._id === id ? updatedCard : c))
            );
          })
          .catch((err) => console.log(err))
      : removeCardLike(id, token)
          .then((updatedCard) => {
            setClothingItems((cards) =>
              cards.map((c) => (c._id === id ? updatedCard : c))
            );
          })
          .catch((err) => console.log(err));
  };

  ////////////////////////////////////////////////////////////////////////////////////////

  return (
    <div>
      <CurrentUserContext.Provider value={{ currentUser }}>
        <CurrentTemperatureUnitContext.Provider
          value={{ currentTemperatureUnit, handleToggleSwitchChange }}
        >
          <Header
            onCreateModal={handleCreateModal}
            onChange={handleChangedCheck}
            value={checked}
            loggedIn={isLoggedIn}
            onCreateRegisterModal={handleRegisterModal}
            onCreateLoginModal={handleLoginModal}
          />
          <Switch>
            <Route exact path="/">
              <Main
                weatherTemp={temp}
                onSelectCard={handleSelectedCard}
                currentCards={initialCards}
                onCardLike={handleLikeClick}
              />
            </Route>
            <ProtectedRoute
              path="/profile"
              loggedIn={isLoggedIn}
              component={(props) => (
                <Profile
                  {...props}
                  onCreateModal={handleCreateModal}
                  onSelectCard={handleSelectedCard}
                  currentCards={initialCards}
                  onCreateProfileModal={handleEditProfileModal}
                  onLogout={logout}
                />
              )}
            />
          </Switch>
          <Footer />
          {activeModal === "create" && (
            <AddItemModal
              onCloseModal={handleCloseModal}
              isOpen={activeModal === "create"}
              onSubmit={handleAddItemSubmit}
              onSelectCard={handleSelectedCard}
              buttonText={isLoading ? "Saving..." : "Save"}
            />
          )}
          {activeModal === "preview" && (
            <ItemModal
              selectedCard={selectedCard}
              onClose={handleCloseModal}
              onDelete={handleDeleteCard}
            />
          )}
          {openRegisterModal === "create" && (
            <RegisterModal
              onCloseModal={handleCloseRegisterModal}
              isOpen={openRegisterModal === "create"}
              onSubmit={handleRegistration}
              onCreateLoginModal={handleLoginModal}
              buttonText={isLoading ? "Registering..." : "Next"}
            />
          )}
          {openLoginModal === "create" && (
            <LoginModal
              onCloseModal={handleCloseLoginModal}
              isOpen={openLoginModal === "create"}
              onSubmit={handleLogin}
              onCreateRegisterModal={handleRegisterModal}
              buttonText={isLoading ? "Logging In..." : "Log in"}
            />
          )}
          {openEditProfileModal === "create" && (
            <EditProfileModal
              onCloseModal={handleCloseEditProfileModal}
              isOpen={openEditProfileModal === "create"}
              onSubmit={handleEditProfile}
              buttonText={isLoading ? "Saving..." : "Save Changes"}
            />
          )}
        </CurrentTemperatureUnitContext.Provider>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
