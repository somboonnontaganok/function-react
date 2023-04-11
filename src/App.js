import React, { useState, useEffect } from 'react';

function App() {
  const [ form, setForm ] = useState({})
  const [ table, setTable ] = useState([])

  const submitForm = (event) => {
    event.preventDefault()
    const [ name, organize, position ] = event.target
    if (!name.value || !organize.value || !position.value) return
    setForm({
      [name.name]: name.value,
      [organize.name]: organize.value,
      [position.name]: position.value
    })

    name.value = ''
    organize.value = ''
    position.value = ''
  }

  const handleDelete = (event) => {
    setTable(() => (
      table.filter((user, index) => {
        return index != event.target.id
      })
    ))
  }
  
  useEffect(() => {
    if (!form.name) return
    setTable((prev) => (
      [...prev, form]
    ))
  }, [form])


  return (
    <div className="App"> {/* Add class name */}
      <h1>Table Example</h1>
      <form onSubmit={submitForm}>
        <input name='name' type="text" placeholder="Type new name here" style={{margin: '4px'}} />
        <input name='organize' type="text" placeholder="Type new organization here" style={{margin: '4px'}} />
        <input name='positon' type="text" placeholder="Type new position here" style={{margin: '4px'}} />
        <button style={{margin: '4px'}}>Save</button>
      </form>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Organization</th>
            <th>Position</th>
          </tr>
        </thead>
        <tbody>
          {table && table.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.organize}</td>
              <td>{user.positon}</td>
              <td><button onClick={handleDelete} id={index}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;