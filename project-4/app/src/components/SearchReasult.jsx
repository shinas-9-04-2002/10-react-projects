import styled from "styled-components";
import { BASE_URL, Button, Container } from "../App";

const SearchReasult = ({ data: foods }) => {
    return (
        <FoodContainer>
            <Container>
                <FoodCards>
                    {foods?.map((food) => (
                        <FoodCard key={food.name}>
                            <div className="food-image">
                                <img
                                    src={BASE_URL + food.image}
                                    alt={food.name}
                                />
                            </div>

                            <div className="food_info">
                                <div className="info">
                                    <h3>{food.name}</h3>
                                    <p>{food.text}</p>
                                </div>

                                <Button>${food.price.toFixed(2)}</Button>
                            </div>
                        </FoodCard>
                    ))}
                </FoodCards>
            </Container>
        </FoodContainer>
    );
};

export default SearchReasult;

// ======================= Styled Components =======================

const FoodContainer = styled.section`
    height: calc(100vh - 210px);
    background-image: url("/bg.png");
    background-size: cover;
    background-position: center;
    padding: 20px;
`;

const FoodCards = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    row-gap: 20px;
    column-gap: 32px;
`;

const FoodCard = styled.div`
    width: 340px;
    height: 167px;
    padding: 12px;
    display: flex;
    gap: 14px;
    border-radius: 20px;
    cursor: pointer;

    /* Background Image + Radial Gray Blur Gradient */
    background: url(.png),
        radial-gradient(
            circle at center,
            rgba(255, 255, 255, 0.12) 0%,
            rgba(180, 180, 180, 0.28) 40%,
            rgba(100, 100, 100, 0.55) 100%
        );

    background-size: cover;
    background-position: center;
    background-blend-mode: overlay, normal;

    /* Blur Effect */
    backdrop-filter: blur(14px);

    /* Optional Shadow */
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.15);

    .food-image img {
        width: 140px;
        height: 140px;
        object-fit: cover;
        border-radius: 16px;
    }

    .food_info {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        gap: 10px;

        .info h3 {
            margin: 0;
            font-size: 18px;
            font-weight: 600;
            white-space: nowrap;
        }

        .info p {
            margin: 0;
            font-size: 12px;
            opacity: 0.8;
        }
    }
`;
