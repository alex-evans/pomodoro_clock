import React from 'react';
import './App.scss';
import Header from "./components/header";
import Footer from "./components/footer";
import Pomodoro from "./components/pomodoro";

function App() {
  return (
    <div id="app">
      <Header />
      <Pomodoro />
      <Footer />
    </div>
  );
}

export default App;
