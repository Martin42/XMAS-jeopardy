import "./App.css";
import MainQuestions from "./components/Questions/mainQuestions";
import PlayerScore from "./components/Score/playerScore";

function App() {
  return (
    <>
      <div className="App">
        <h2>XMAS JEOPARDY 2023</h2>
      </div>
      <PlayerScore />
      <MainQuestions />
    </>
  );
}

export default App;
