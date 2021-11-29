import React from "react";
import "../src/styles/App.css";

import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

import { Provider } from "react-redux";
import store from "./redux/store/store";
import Organizer from "./components/organizer/Organizer";
import HomePage from "./components/pages/HomePage";
import Offer from "./components/pages/Offer";
import Projects from "./components/pages/Projects";

const App = () => {
  return (
    <Provider store={store}>
      <div className="app">
        <Header></Header>

        <Navigation></Navigation>

        <main>
          <HomePage></HomePage>
          <Offer></Offer>
          <Projects></Projects>
          <Organizer></Organizer>
        </main>
        <Footer></Footer>
      </div>
    </Provider>
  );
};
export default App;
