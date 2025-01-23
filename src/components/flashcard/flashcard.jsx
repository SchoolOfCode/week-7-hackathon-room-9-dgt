import { useState } from 'react';
function Flashcard({ card }) {
    //Track a flipped and unflipped state of the card
    const [flipped, setFlipped] = useState(false);
    //return button
    //on click we want the card to change state from unflipped to flipped
    //Create handleFlip function
    function handleFlip() {
        setFlipped(!flipped)
    }
    //initial state of flipped will be false 
    // content of button/card: Question
    // flipped ? card.answer : card.question
    // props: card
    return <button onClick={handleFlip}>{flipped ? card.answer : card.question} </button>
}
export default Flashcard;