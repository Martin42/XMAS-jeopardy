import {
  Modal,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useState } from "react";
import ModalContent from "./modal";

function createData(level1, level2, level3, level4, level5) {
  return { level1, level2, level3, level4, level5 };
}

const rows = [
  createData(200, 200, 200, 200, 200),
  createData(400, 400, 400, 400, 400),
  createData(600, 600, 600, 600, 600),
  createData(800, 800, 800, 800, 800),
  createData(1000, 1000, 1000, 1000, 1000),
];

const MainQuestions = () => {
  const [isOpen, setModal] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  const [clickedCells, setClickedCells] = useState([]);

  const handleCloseModal = () => {
    setModal(false);
    setSelectedRow(null);
  };

  const handleOpenModal = (rowIndex, cellIndex) => {
    const cellKey = `${rowIndex}_${cellIndex}`;
    if (!clickedCells.includes(cellKey)) {
      setSelectedRow(rows[rowIndex][`level${cellIndex + 1}`]);
      setModal(true);
      setClickedCells((prevClickedCells) => [...prevClickedCells, cellKey]);
    }
  };

  return (
    <div className="mainQuestions">
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center">Cenas de Filmes</TableCell>
              <TableCell align="center">Xmas Trivia</TableCell>
              <TableCell align="center">Jeoguessr</TableCell>
              <TableCell align="center">Cenas de Filmes</TableCell>
              <TableCell align="center">Cenas de Filmes</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, rowIndex) => (
              <TableRow key={rowIndex}>
                {[1, 2, 3, 4, 5].map((cellIndex) => (
                  <TableCell
                    key={cellIndex}
                    align="center"
                    onClick={() => handleOpenModal(rowIndex, cellIndex)}
                    style={{
                      backgroundColor: clickedCells.includes(
                        `${rowIndex}_${cellIndex}`
                      )
                        ? "white"
                        : "initial",
                      color: clickedCells.includes(`${rowIndex}_${cellIndex}`)
                        ? "#46479e"
                        : "initial",
                      cursor: clickedCells.includes(`${rowIndex}_${cellIndex}`)
                        ? "not-allowed"
                        : "pointer",
                    }}
                  >
                    {`${row[`level${cellIndex}`]}$`}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Modal open={isOpen} onClose={handleCloseModal}>
        <ModalContent
          handleCloseModal={handleCloseModal}
          clickedCells={clickedCells}
        />
      </Modal>
    </div>
  );
};

export default MainQuestions;
