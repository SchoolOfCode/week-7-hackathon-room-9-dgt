import { useState } from 'react'
import './App.css'
import Footer from './components/footer/footer.jsx'
import Header from './components/header/header.jsx'
import Flashcards from './components/flashcards/flashcards.jsx'

function App() {
    return (<div>
        <Header />
        <Flashcards />
        <Footer />
    </div>
    );
}

export default App
