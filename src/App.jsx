import { useState } from "react";
import "./App.css";
import FlashCards from "./FlashCards";

const flashcards = [
  { "question": "What is the SI unit of energy?", "answer": "Joule (J)", "color": "green" },
  { "question": "What is the law of conservation of energy?", "answer": "Energy cannot be created or destroyed, only transformed.", "color": "yellow" },
  { "question": "What is kinetic energy's formula?", "answer": "KE = (1/2)mv²", "color": "yellow" },
  { "question": "What is potential energy's formula?", "answer": "PE = mgh", "color": "yellow" },
  { "question": "What does 'work' mean in physics?", "answer": "Work = Force × Distance (W = Fd)", "color": "green" },
  { "question": "What is power in physics?", "answer": "Power is the rate of energy transfer: P = E/t", "color": "yellow" },
  { "question": "What type of energy does a stretched rubber band have?", "answer": "Elastic potential energy", "color": "green" },
  { "question": "What happens to total mechanical energy in a frictionless system?", "answer": "It remains constant.", "color": "red" },
  { "question": "What is efficiency in terms of energy?", "answer": "Efficiency = (Useful Energy Output / Total Energy Input) × 100%", "color": "red" },
  { "question": "What is the unit of power?", "answer": "Watt (W) = 1 Joule per second", "color": "green" }
];

function App() {
  const [index, setIndex] = useState(0);

  const onNextClick = () => {
    setIndex((prevIndex) => (prevIndex + 1) % flashcards.length);
  };

  const onPrevClick = () => {
    setIndex((prevIndex) => (prevIndex - 1 + flashcards.length) % flashcards.length);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Physics Quiz FlashCards</h1>
      <h2>Study for your physics quiz on Energy and Work with these 10 flashcards.</h2>
      <h2>Green=Easy, Yellow=Medium, Red=Hard</h2>
      <FlashCards 
        question={flashcards[index].question} 
        answer={flashcards[index].answer} 
        color={flashcards[index].color} 
      />
      <div className="button-container">
        <button 
          className="button px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
          onClick={onPrevClick}
        >
          Previous
        </button>
        <button 
          className="button px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
          onClick={onNextClick}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default App;


