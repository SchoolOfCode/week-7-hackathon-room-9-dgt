import { useState } from "react";
import "./App.css";
import Footer from "./components/footer/footer.jsx";
import Header from "./components/header/header.jsx";
import Flashcards from "./components/flashcards/flashcards.jsx";
export default App;

function App() {
  return (
    <>
      <Header />
      <Flashcards />
      <Footer />
    </>
  );
}