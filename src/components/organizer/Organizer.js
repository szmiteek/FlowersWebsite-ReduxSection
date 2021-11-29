import React, { useState } from "react";
import Modal from "./Modal";
import EventsTable from "./EventsTable";
import "../../styles/Organizer.css";

const Organizer = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = (visible) => {
    setModalVisible(visible);
  };

  return (
    <section id="organizer">
      <Modal visible={modalVisible} toggleModal={toggleModal} />
      <div className="organizer">
        <h1>Organizer</h1>
        <button className="add-button" onClick={() => toggleModal(true)}>
          Dodaj wydarzenie
        </button>
        <div className="table">
          <EventsTable></EventsTable>
        </div>
      </div>
    </section>
  );
};

export default Organizer;
