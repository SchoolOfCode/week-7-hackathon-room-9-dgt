import Flashcard from "../flashcard/flashcard";
import { useState } from "react";


function Flashcards() {
    const [cards, setCards] = useState([
        {
            question: "What is a component?",
            answer: "A component is a reusable, independent piece of UI in React",
            id: 1,
        },
        {
            question: "What does state mean?",
            answer: "State is an object that holds dynamic data that changes over time and triggers UI updates.",
            id: 2,
        },
        {
            question: "Why do React components start with a capital letter?",
            answer: "React uses uppercase names to distinguish components from regular HTML tags.",
            id: 3,
        },
        {
            question: "Describe what props mean?",
            answer: "Props are inputs passed to components to configure them and make them reusable.",
            id: 4,
        },
        {
            question: "How do you create and nest components?",
            answer: "Create components as functions or classes, and nest them by including one component inside another.",
            id: 5,
        },
        {
            question: "How do you add markup and styles?",
            answer: "Add markup with JSX and styles using inline styles, CSS classes, or CSS modules.",
            id: 6,
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
