import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function Welcome(props) {
    return <p>Hello, {props.name}</p>;
  }

function App() {
return (
    <div>
    <Welcome name="Sara" />
    <Welcome name="Cahal" />
    <Welcome name="Edite" />
    </div>
);
}

export default App