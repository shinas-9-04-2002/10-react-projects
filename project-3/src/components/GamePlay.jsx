import React, { useState } from "react";
import Score from "./Score";
import NumberSelector from "./NumberSelector";
import styled from "styled-components";
import RollDies from "./RollDies";
import { Button } from "../styled/button";
import Rules from "./Rules";

const GamePlay = () => {
    const [score, setScore] = useState(0);
    const [selectedNumber, setSelectedNumber] = useState();
    const [currentDice, setCurrentDice] = useState(1);
    const [error, setError] = useState("");
    const [show, setShow] = useState(true);

    const generateRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min) + min);
    };

    const roleDice = () => {
        if (!selectedNumber) {
            setError("You have not selected any number");
            return;
        }

        const randomNumber = generateRandomNumber(1, 7);
        setCurrentDice((prev) => randomNumber);

        if (selectedNumber === randomNumber) {
            setScore((prev) => prev + randomNumber);
        } else {
            setScore((prev) => prev - 2);
        }
        setSelectedNumber(undefined);
    };

    const resetScore = () => {
        setScore(0);
    };

    const showHandler=()=>{
        setShow(!show)
    }
    return (
        <MainContainer>
            <div className="top-section">
                <Score score={score} />
                <NumberSelector
                    selectedNumber={selectedNumber}
                    setSelectedNumber={setSelectedNumber}
                    error={error}
                    setError={setError}
                />
            </div>

            <RollDies currentDice={currentDice} roleDice={roleDice} />
            <div className="btns">
                <Button onClick={resetScore}>Reset Score</Button>
                <Button onClick={showHandler}>Show Rules</Button>
            </div>

            {show ? "" : <Rules />}
        </MainContainer>
    );
};

export default GamePlay;

const MainContainer = styled.main`
    padding: 70px;
    .top-section {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        align-items: end;
    }

    .btns {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 8px;
    }
`;
