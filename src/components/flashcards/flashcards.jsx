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
        {
            question: "What colour is the moon?",
            answer: "Silver",
            id: 2,
        },
        {
            question: "What colour is a red car?",
            answer: "Red",
            id: 2,
        },
        {
            question: "What colour is a purple grape?",
            answer: "Purple",
            id: 2,
        },
        {
            question: "What colour is a tiger?",
            answer: "Orange & Black",
            id: 2,
        },
    ]);

    console.log("i'm here");

    return (
        <>
            <Flashcard
                card={
                    cards[0]

                }
            />
            <Flashcard
                card={
                    cards[1]

                }
            />
            <Flashcard
                card={
                    cards[2]

                }
            />
            <Flashcard
                card={
                    cards[3]

                }
            />
            <Flashcard
                card={
                    cards[4]

                }
            />
            <Flashcard
                card={
                    cards[5]

                }
            />
        </>
    );
}

export default Flashcards;

//const flashcardQuestions =
