import { useState } from "react";

export default function MyCheckbox() {
    const [linked, setLinked] = useState(false);

    function handleChange(e) {
        setLinked(e.target.checked);
    }

    return (
        <>
            <label>
                <input 
                type="checkbox"
                checked={linked}
                onChange={handleChange}
                />
                I like this
            </label>
            <p>You {linked ? 'liked' : 'did not like'} this.</p>
        </>
    )
}