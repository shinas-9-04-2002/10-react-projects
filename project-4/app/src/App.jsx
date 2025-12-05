import { useEffect, useState } from "react";
import styled from "styled-components";
import SearchReasult from "./components/SearchReasult";

export const BASE_URL = "http://localhost:9000";

const App = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [filteredData, setFilteredData] = useState(null);

    const fetchFoodData = async () => {
        setLoading(true);
        try {
            const response = await fetch(BASE_URL);
            const res = await response.json();
            setData(res);
            setFilteredData(res);
            setLoading(false);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchFoodData();
    }, []);

    const searchFood = (e) => {
        const searchValue = e.target.value;
        if (searchValue === "") {
            setFilteredData(null);
        }

        const filter = data?.filter((food) =>
            food.name.toLowerCase().includes(searchValue.toLowerCase())
        );
        setFilteredData(filter)
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
                        <input
                            type="text"
                            placeholder="Search Food"
                            onChange={searchFood}
                        />
                    </div>
                </TopContainer>

                <FilterContainer>
                    <Button>All</Button>
                    <Button>Breakfast</Button>
                    <Button>Lunch</Button>
                    <Button>Dinner</Button>
                </FilterContainer>
            </Container>
            <SearchReasult data={filteredData} />
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
