import styled from "styled-components";

const RollDies = ({ currentDice, roleDice }) => {
  

    return (
        <DiesContainer>
            <div className="dice" onClick={roleDice}>
                <img src={`/images/dice_${currentDice}.png`} alt="" />
            </div>
            <p>Click on Dice to roll</p>
        </DiesContainer>
    );
};

export default RollDies;

const DiesContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 48px;

    p {
        font-size: 25px;
    }

    .dice {
        cursor: pointer;
    }
`;
