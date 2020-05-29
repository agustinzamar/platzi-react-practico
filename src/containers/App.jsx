import React, { useEffect, useState } from "react";

import Header from "../components/Header";
import Search from "../components/Search";
import Footer from "../components/Footer";
import Categories from "../components/Categories";
import Carrousel from "../components/Carrousel";
import CarrouselItem from "../components/CarrouselItem";

import "../assets/styles/App.scss";

import useInitialState from "../hooks/useInitialState";

const API = "http://localhost:3000/initalState";

const App = () => {
  const initialState = useInitialState({ API });

  return (
    <div className="App">
      <Header />
      <Search />

      {initialState.myList?.length > 0 && (
        <Categories title="Mi lista">
          <Carrousel>
            {initalState.myList.map((item) => (
              <CarrouselItem key={item.id} {...item} />
            ))}
          </Carrousel>
        </Categories>
      )}

      <Categories title="Tendencias">
        <Carrousel>
          {initialState.trends?.map((item) => {
            return <CarrouselItem key={item.id} {...item} />;
          })}
        </Carrousel>
      </Categories>

      <Categories title="Originales de Platzi Video">
        <Carrousel>
          {initialState.originals?.map((item) => {
            return <CarrouselItem key={item.id} {...item} />;
          })}
        </Carrousel>
      </Categories>

      <Footer />
    </div>
  );
};

export default App;
