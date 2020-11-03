import React from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import MapComponent from "./components/MapComponent";
import ListResults from "./components/ListResults";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Search />
      <MapComponent/>
      <ListResults />
    </div>
  );
}

export default App;
