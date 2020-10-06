import React from 'react';
import './App.scss';
import Header from "./components/header";
import Footer from "./components/footer";
import Calculator from "./components/calculator";

function App() {
  return (
    <div id="app">
      <Header />
      <Calculator />
      <Footer />
    </div>
  );
}

export default App;
