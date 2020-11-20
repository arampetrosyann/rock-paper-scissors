import React, { useState, useCallback } from "react";
import useStyles from "./App.styles";
import paper from "./assets/images/paper.svg";
import rock from "./assets/images/rock.svg";
import scissors from "./assets/images/scissors.svg";
import {
  Header,
  Main,
  Image,
  Paragraph,
  FlexContainer,
  Score,
  Button,
} from "./components";
import { getRandomNumber, calculateWinner } from "./helpers";

const figures = [
  { src: rock, name: "ROCK", numb: 0 },
  { src: paper, name: "PAPER", numb: 1 },
  { src: scissors, name: "SCISSORS", numb: 2 },
];

function App() {
  const classes = useStyles();
  const [play, setPlay] = useState(false);
  const [pick, setPick] = useState({});
  const [roboPick, setRoboPick] = useState({});
  const [score, setScore] = useState(0);
  const [winner, setWinner] = useState(null);
  const [isFinished, setIsFinished] = useState(false);

  const roboRandPick = useCallback(() => {
    return new Promise((resolve, reject) => {
      let randPick;

      const interval = setInterval(() => {
        randPick = figures[getRandomNumber(0, 3)];

        setRoboPick(randPick);
      }, 86);
      setTimeout(() => {
        clearInterval(interval);

        resolve(randPick);
      }, 2000);
    });
  }, []);

  const handleOnClick = async (figure) => {
    setPick(figure);
    setPlay(true);

    const randFigure = await roboRandPick();

    const winnerNum = calculateWinner(figure.numb, randFigure.numb);

    if (winnerNum === 1) {
      setScore((prevScore) => prevScore + 1);
    }

    setWinner(winnerNum);
    setIsFinished(true);
  };

  const handlePlayAgain = () => {
    setWinner(null);
    setIsFinished(false);
    setPlay(false);
  };

  return (
    <div className={classes.app}>
      <Header
        heading="Rock Paper Scissors"
        textAlign="center"
        textShadow="3px 4px 7px #000000b3"
        className={classes.header}
      />
      <Main className={classes.main}>
        <FlexContainer justifyContent="center" className={classes.scoreBox}>
          <Score score={score} color="#ffffff" />
        </FlexContainer>
        <FlexContainer
          justifyContent="center"
          alignItems="center"
          className={classes.table}
        >
          {play ? (
            <>
              <FlexContainer flexDirection="column">
                <Paragraph text="YOU PICK" padding={8} align="center" />
                <Image src={pick.src} alt={pick.name} width={147} />
              </FlexContainer>
              {isFinished && (
                <Paragraph
                  text={`YOU ${
                    winner === 1 ? "WIN" : winner === 2 ? "LOSE" : "DRAW"
                  }`}
                  padding={[5, 15]}
                  size={33}
                  className={classes.result}
                />
              )}
              <FlexContainer flexDirection="column">
                <Paragraph text="ROBO PICK" padding={8} align="center" />
                <Image src={roboPick.src} alt={roboPick.name} width={147} />
              </FlexContainer>
            </>
          ) : (
            figures.map(({ src, name, numb }) => {
              return (
                <Image
                  src={src}
                  alt={name}
                  key={name}
                  width={147}
                  onClick={() => handleOnClick({ src, name, numb })}
                />
              );
            })
          )}
        </FlexContainer>
        {play && isFinished && (
          <Button value="Play Again" onClick={handlePlayAgain} />
        )}
      </Main>
    </div>
  );
}

export default App;
