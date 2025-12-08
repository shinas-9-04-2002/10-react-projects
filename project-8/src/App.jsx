import "./App.css";
import UserContextProvider from "./context/UserContextProvider";

function App() {
    return (
        <UserContextProvider>
            <h1>Use context hooks</h1>
            
        </UserContextProvider>
    );
}

export default App;
