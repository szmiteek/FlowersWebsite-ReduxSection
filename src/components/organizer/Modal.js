import React, { useState } from "react";
import ReactDOM from "react-dom";
import { addEVENT } from "../../redux/actions/actions.js";
import { useDispatch } from "react-redux";
import Icon from "@mdi/react";
import { mdiAlertCircle } from "@mdi/js";

import "../../styles/Modal.css";
import "boxicons";

const Modal = ({ visible, toggleModal }) => {
  const [form, setForm] = useState({
    name: "",
    date: "",
    place: "",
    style: "",
    phoneNumber: "",
    color: "#FFFFFF",
  });
  const [error, setError] = useState(null);

  const inputsHandler = (e) => {
    setForm({
      ...form,
      [e.target.id]: e.target.value,
    });
  };
  const validate = (form) => {
    if (!form.name) {
      return "Podaj dane";
    }
    if (!form.date) {
      return "Wybierz date";
    }
    if (!form.place) {
      return "Podaj salę";
    }
    if (!form.style) {
      return "Określ styl";
    }
    if (!form.phoneNumber) {
      return "Podaj numer telefonu";
    } else if (form.phoneNumber.length < 9) {
      return "Numer za krótki";
    } else if (form.phoneNumber.length > 9) {
      return "Numer za długi";
    }
    return null;
  };
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    const errorMsg = validate(form);
    if (errorMsg) {
      setError(errorMsg);
      return;
    }

    const eventObj = {
      name: form.name,
      date: form.date,
      place: form.place,
      color: form.color,
      phoneNumber: form.phoneNumber,
      style: form.style,
    };
    dispatch(addEVENT(eventObj));
    setForm({
      name: "",
      date: "",
      place: "",
      style: "",
      phone: "",
      color: "#FFFFFF",
    });
    toggleModal(false);
  };

  if (!visible) return null;
  return ReactDOM.createPortal(
    <>
      <div className="Overlay"></div>
      <div className="Modal">
        <box-icon
          style={{
            position: "absolute",
            top: "2%",
            right: "3%",
            cursor: "pointer",
          }}
          onClick={() => {
            setError(null);
            setForm({
              name: "",
              date: "",
              place: "",
              style: "",
              phoneNumber: "",
              color: "#FFFFFF",
            });
            toggleModal(false);
          }}
          name="x"
          size="md"
        ></box-icon>
        {error && (
          <div className="error">
            <Icon
              path={mdiAlertCircle}
              size={1.3}
              horizontal={false}
              vertical
              rotate={180}
            />

            <p>{error}</p>
          </div>
        )}
        <form>
          <label htmlFor="name">Dane osobowe</label>
          <input onChange={inputsHandler} type="text" id="name" />

          <label htmlFor="date">Termin wesela</label>
          <input onChange={inputsHandler} type="date" id="date" />

          <label htmlFor="place">Sala</label>
          <input onChange={inputsHandler} type="text" id="place" />

          <label htmlFor="style">Styl</label>
          <input onChange={inputsHandler} type="text" id="style" />

          <label htmlFor="phoneNumber">Numer telefonu</label>
          <input onChange={inputsHandler} type="text" id="phoneNumber" />

          <label htmlFor="color">Kolor przewodni </label>
          <div className="color-container">
            <input
              id="color"
              className="color-input"
              onChange={inputsHandler}
              value={form.color}
              type="color"
            />
          </div>
          <button className="save-button" onClick={submitHandler}>
            Zapisz
          </button>
        </form>
      </div>
    </>,
    document.getElementById("portal")
  );
};

export default Modal;
