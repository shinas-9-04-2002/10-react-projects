import styled from "styled-components";

export const Button = styled.button`
    background-color: black;
    padding: 13px 18px;
    color: white;
    border-radius: 5px;
    min-width: 220px;
    border: none;
    cursor: pointer;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    font-size: 16px;

    &:hover {
        transform: scale(0.95);
        box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.3);
    }

    @media (max-width: 600px) {
        min-width: 180px;
        padding: 10px 16px;
        font-size: 14px;
    }
`;
