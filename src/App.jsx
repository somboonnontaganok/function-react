import React, {useState} from "react";

const ExLearning = () => {
    const [change, setChange] = useState(true);
    return (
        <>
            <button onClick={() => setChange(!change)}>
                Click Me!
            </button>
            {
                change ? 
                <h1>Welcome to Poon Studio</h1> : 
                <h1>A Computer Science Portal for Poon</h1>
            }
        </>
    );
}

export default ExLearning;