import styled from "styled-components";

const Rules = () => {
    return (
        <RulesContainer>
            <div className="child">
                <h2>How to play dice game</h2>
                <div className="text">
                    <ol>
                        <li>Select any number</li>
                        <li>Click on dice image</li>
                    </ol>
                </div>
                <div>
                    <p>
                    after click on dice if selected number is equal to dice
                    number you will get same point as dice
                </p>
                <p>If you get wrong guess then 2 point will be dedcuted</p>
                </div>
            </div>
        </RulesContainer>
    );
};

export default Rules;

const RulesContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-top: 30px;

    .child {
        width: 794px;
        height: 208px;
        padding: 20px;
        background-color: #fbf1f1;
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
`;
