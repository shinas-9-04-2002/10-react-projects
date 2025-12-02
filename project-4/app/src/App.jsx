import { useEffect, useState } from "react";
import styled from "styled-components";
import SearchReasult from "./components/SearchReasult";

export const BASE_URL = "http://localhost:9000";

const App = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);

    const fetchFoodData = async () => {
        setLoading(true);
        try {
            const response = await fetch(BASE_URL);
            const res = await response.json();
            setData(res);

            setLoading(false);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchFoodData();
    }, []);

    const temp = {
        image: "/images/egg.png",
        name: "Boilded Egg",
        price: 10,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        type: "breakfast",
    };

    if (loading) {
        return <div>Loading...</div>;
    }
    return (
        <>
            <Container>
                <TopContainer>
                    <div className="logo">
                        <img src="/Foody Zone.svg" alt="logo" />
                    </div>

                    <div className="search">
                        <input type="text" placeholder="Search Food" />
                    </div>
                </TopContainer>

                <FilterContainer>
                    <Button>All</Button>
                    <Button>Breakfast</Button>
                    <Button>Lunch</Button>
                    <Button>Dinner</Button>
                </FilterContainer>
            </Container>
            <SearchReasult data={data} />
        </>
    );
};

export default App;

export const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
`;
const TopContainer = styled.section`
    min-height: 140px;
    display: flex;
    justify-content: space-between;
    padding: 35px 120px;

    .search {
        input {
            background: transparent;
            border: 3px solid red;
            color: white;
            border-radius: 5px;
            width: 100%;
            height: 40px;
            font-size: 16px;
            padding: 0 10px;
            outline: none;
        }
    }
`;

const FilterContainer = styled.section`
    display: flex;
    justify-content: center;
    gap: 12px;
    padding-bottom: 40px;
`;
export const Button = styled.button`
    background-color: #ff4343;
    border-style: none;
    border-radius: 5px;
    padding: 6px 12px;
    color: white;
    cursor: pointer;
`;
