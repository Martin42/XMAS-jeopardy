import React, { useEffect, useState } from "react";
import moviesData from "../../data/QNA.json";
import "../../styles/Modal.css";

const ModalContent = ({ handleCloseModal, clickedCells }) => {
  const [questionAndAnswer, setQuestionAndAnswer] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);

  useEffect(() => {
    const lastClickedCell = clickedCells[clickedCells.length - 1];
    const clickedCellData = moviesData[lastClickedCell];

    if (clickedCellData) {
      const { question, answer, src } = clickedCellData;
      setQuestionAndAnswer({ question, answer, src });
    }
  }, [clickedCells]);

  const handleShowAnswer = () => {
    setShowAnswer(true);
  };

  return (
    <div className="modal">
      {questionAndAnswer ? (
        <>
          <div className="question">
            {questionAndAnswer.src ? (
              <img
                className="movieImg"
                src={`../images/${questionAndAnswer.src}.png`}
                alt="scene"
              />
            ) : (
              ""
            )}

            <p>{questionAndAnswer.question}</p>
            {showAnswer ? (
              <>
                <p>
                  <b>Resposta: {questionAndAnswer.answer}</b>
                </p>
                <div className="answerButton">
                  <button
                    className="button"
                    type="submit"
                    onClick={handleCloseModal}
                  >
                    Continuar
                  </button>
                </div>
              </>
            ) : (
              ""
            )}
          </div>
          <div className="answerButton">
            {showAnswer ? (
              ""
            ) : (
              <button
                className="button"
                type="submit"
                onClick={handleShowAnswer}
              >
                Ver Resposta
              </button>
            )}
          </div>
        </>
      ) : (
        <div>No data found</div>
      )}
    </div>
  );
};

export default ModalContent;
