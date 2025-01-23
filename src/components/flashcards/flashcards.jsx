import Flashcard from "../flashcard/flashcard";

function Flashcards () { 
// const [cards, setCards] = useState([ 
//     {
//         question: "What colour is a carrot?",
//         answer: "Orange",
//         id: 1
//     }
// ])

return <Flashcard card={[ 
    {
        question: "What colour is a carrot?",
        answer: "Orange",
        id: 1
    }
]} />
}

export default Flashcards;

//const flashcardQuestions = 