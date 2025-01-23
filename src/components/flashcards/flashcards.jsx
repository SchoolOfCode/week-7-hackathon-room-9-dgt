import Flashcard from "../flashcard/flashcard";
import { useState } from "react";

function Flashcards() {
  const [cards, setCards] = useState([
    {
      question: "What colour is a carrot?",
      answer: "Orange",
      id: 1,
    },
    {
      question: "What colour is a banana?",
      answer: "Yellow",
      id: 2,
    },
  ]);

  console.log("i'm here");

  return (
    <>
      <Flashcard
        card={
          cards[0]
          // {
          //     question: "What colour is a carrot?",
          //     answer: "Orange",
          //     id: 1
          // }
        }
      />
      <Flashcard
        card={
          cards[1]
          // {
          //     question: "What colour is a carrot?",
          //     answer: "Orange",
          //     id: 1
          // }
        }
      />
    </>
  );
}

export default Flashcards;

//const flashcardQuestions =
