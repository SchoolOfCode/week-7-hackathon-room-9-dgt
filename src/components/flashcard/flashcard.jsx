import { useState } from "react";
import "./flashcard.css";

function Flashcard({ card }) {
  const [flipped, setFlipped] = useState(false);
  function handleFlip() {
    setFlipped(!flipped);
  }
  return (
    <button
      onClick={handleFlip}
      className={`flashcard ${flipped ? "answer" : "question"}`} // template literal needed for passing a static and dynamic class name
    >
      <div className={flipped ? "answer" : "question"}>
        {flipped ? card.answer : card.question}
      </div>
    </button>
  );
}
export default Flashcard;
