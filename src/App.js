import "./App.css";
import MainQuestions from "./components/Questions/mainQuestions";
import PlayerScore from "./components/Score/playerScore";

function App() {
  return (
    <>
      <div className="App">
        <h2>JEOPARDY</h2>
      </div>
      <PlayerScore />
      <MainQuestions />
    </>
  );
}

export default App;
