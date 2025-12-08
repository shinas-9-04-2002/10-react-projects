import { useCallback, useEffect, useRef, useState } from "react";

const App = () => {
    const [length, setLength] = useState(8);
    const [numberAllowed, setNumberAllowed] = useState(false);
    const [charAllowed, setCharAllowed] = useState(false);
    const [password, setPassword] = useState("");

    const passwordRef = useRef(null);

    const passwordGenerator = useCallback(() => {
        let pass = "";
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

        if (numberAllowed) str += "0123456789";
        if (charAllowed) str += "!@#$%^&*()_+{}[]<>?/|~";

        for (let i = 0; i < length; i++) {
            let char = Math.floor(Math.random() * str.length);
            pass += str.charAt(char);
        }

        setPassword(pass);
    }, [length, numberAllowed, charAllowed]);

    useEffect(() => {
        passwordGenerator();
    }, [passwordGenerator]);

    const copyPassword = () => {
        passwordRef.current?.select();
        navigator.clipboard.writeText(password);
    };

    return (
        <>
            <div className="w-full max-w-md mx-auto shadow-md rounded-lg p-4 my-8 bg-gray-700">
                <h1 className="text-white text-center mb-4 text-xl ">
                    Password Generator
                </h1>

                {/* Output + Copy */}
                <div className="flex items-center shadow rounded-lg overflow-hidden mb-4">
                    <input
                        type="text"
                        value={password}
                        className="outline-none w-full py-2 px-3 bg-white h-10"
                        readOnly
                        ref={passwordRef}
                    />
                    <button
                        onClick={copyPassword}
                        className="bg-indigo-600 text-white px-4 h-10 flex items-center"
                    >
                        Copy
                    </button>
                </div>

                {/* Controls */}
                <div className="flex gap-3 text-orange-500 text-sm ">
                    {/* Length */}
                    <div className="flex items-center gap-3">
                        <input
                            type="range"
                            min={6}
                            max={50}
                            value={length}
                            className="cursor-pointer"
                            onChange={(e) => setLength(e.target.value)}
                        />
                        <label>Length: {length}</label>
                    </div>

                    {/* Numbers */}
                    <div className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            checked={numberAllowed}
                            onChange={() => setNumberAllowed((prev) => !prev)}
                        />
                        <label>Numbers</label>
                    </div>

                    {/* Special Characters */}
                    <div className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            checked={charAllowed}
                            onChange={() => setCharAllowed((prev) => !prev)}
                        />
                        <label>Characters</label>
                    </div>
                </div>
            </div>
        </>
    );
};

export default App;
