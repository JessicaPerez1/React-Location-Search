import React from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import Results from "./components/Results";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Search />
      <Results />
    </div>
  );
}

export default App;
