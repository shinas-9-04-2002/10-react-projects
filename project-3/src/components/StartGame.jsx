import React from "react";
import styled from "styled-components";
import { Button } from "../styled/button";

const StartGame = ({toggleGamePlay}) => {
    return (
        <Container>
            <div className="imageBox">
                <img src="/images/dices.png" alt="" />
            </div>
            <div className="content">
                <h1>Dice Game</h1>
                <Button onClick={toggleGamePlay}>Play Now</Button>
            </div>
        </Container>
    );
};

export default StartGame;

const Container = styled.div`
    max-width: 1180px;
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    align-items: center;
    justify-content: center;
    height: 100vh;
    gap: 40px;

    .imageBox img {
        width: 400px;
        max-width: 100%;
        filter: drop-shadow(0 6px 20px rgba(0, 0, 0, 0.3));
        transition: transform 0.3s ease;
    }

    .imageBox img:hover {
        transform: scale(1.05);
    }

    .content {
        text-align: center;
    }

    .content h1 {
        font-size: 80px;
        white-space: nowrap;
        text-shadow: 0px 2px 10px rgba(0, 0, 0, 0.4);
        transition: transform 0.3s ease;

        &:hover {
            transform: scale(1.1);
        }
    }

    /* 🔽 Responsive for tablets */
    @media (max-width: 992px) {
        .content h1 {
            font-size: 60px;
        }

        .imageBox img {
            width: 320px;
        }
    }

    /* 🔽 Responsive for mobile */
    @media (max-width: 600px) {
        .content h1 {
            font-size: 45px;
        }

        .imageBox img {
            width: 250px;
        }
    }
`;

