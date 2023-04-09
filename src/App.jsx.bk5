import { useState } from "react";

export default function MyInput() {
    const [text, setText] = useState('hello world');

    function handleClick(event) {
        setText(event.target.value);
    }

    return (
        <>
            <input value={text} onChange={handleClick} />    
            <p>You typed: {text}</p>
            <button onClick={() => setText('hello world')}>
                Reset
            </button>
        </>
    );
}