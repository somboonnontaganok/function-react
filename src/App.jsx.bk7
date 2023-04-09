import { useState } from "react";

export default function Form() {
    const [name, setName] = useState('Poon');
    const [age, setAge] = useState(58);

    return (
        <>
            <input
                value={name}
                onChange={e => setName(e.target.value)}
            />
            <button onClick={() => setAge(age + 1)}>
                Increment age
            </button>
            <p>Hello, {name}. You are {age} years old.</p>
        </>
    )
}