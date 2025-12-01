import styled from "styled-components";

const NumberSelector = ({
    selectedNumber,
    setSelectedNumber,
    error,
    setError,
}) => {
    const num = [1, 2, 3, 4, 5, 6];

    const numberSelectorHandler = (value) => {
        setSelectedNumber(value);
        setError("");
    };

    return (
        <NumberSelectorContainer>
            <p className="error">{error}</p>
            <div className="flex">
                {num.map((value, i) => (
                    <Box
                        $isSelected={value === selectedNumber}
                        onClick={() => numberSelectorHandler(value)}
                        key={i}
                    >
                        {value}
                    </Box>
                ))}
            </div>
            <p>Select Number</p>
        </NumberSelectorContainer>
    );
};

export default NumberSelector;

const Box = styled.div`
    height: 72px;
    width: 72px;
    border: 1px solid black;
    display: grid;
    place-items: center;
    font-size: 24px;
    font-weight: 700;
    background-color: ${({ $isSelected }) => ($isSelected ? "black" : "white")};
    color: ${({ $isSelected }) => ($isSelected ? "white" : "black")};
    cursor: pointer;
`;

const NumberSelectorContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    .flex {
        display: flex;
        flex-wrap: wrap;
        gap: 24px;
    }
    p {
        font-size: 24px;
        font-weight: 700;
        margin-top: 18px;
    }

    .error {
        color: red;
        font-size: 20px;
        position: absolute;
        top: 0;
        right: 0;
        padding-right: 20px;
    }
`;
