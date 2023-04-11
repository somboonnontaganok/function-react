import React, { useState } from "react";
import { useEffect } from "react";

// Auto Sync
const AutoSync = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [position, setPosition] = useState("");

  const syncInfo = () => {
    setName("Poonn");
    setAge(58);
    setPosition("Learner");
  };

  useEffect(syncInfo, [])

  return (
    <div>
      <h3>Name: {name}</h3>
      <h3>Age: {age}</h3>
      <h3>Position: {position}</h3>
    </div>
  );
};

export default AutoSync;
