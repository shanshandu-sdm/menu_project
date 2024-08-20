import React, { useState, useEffect } from 'react'

function App () {
  const [menuItems, setMenuItems] = useState([])
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')

  useEffect(() => {
    fetch('http://127.0.0.1:8000/menu/')
      .then(response => response.json())
      .then(data => setMenuItems(data))
  }, [])

  const addMenuItem = (e) => {
    e.preventDefault()
    fetch('http://127.0.0.1:8000/menu/add/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, price }),
    })
      .then(response => response.json())
      .then(data => {
        setMenuItems([...menuItems, data])
        setName('')
        setPrice('')
      })
  }

  return (
    <div>
      <h1>Menu</h1>
      <ul>
        {menuItems.map(item => (
          <li key={item.id}>{item.name} - ${item.price}</li>
        ))}
      </ul>
      <form onSubmit={addMenuItem}>
        <input
          type="text"
          placeholder="Item Name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Price"
          value={price}
          onChange={e => setPrice(e.target.value)}
        />
        <button type="submit">Add Menu Item</button>
      </form>
    </div>
  )
}

export default App
