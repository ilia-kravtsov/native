import React from 'react';
import './App.css';

let names = ['ilai', 'ilia', 'dmitriy', 'aisudfh']

let users = [
    {id: 923854, name: 'ilai'},
    {id: 234, name: 'ilia'},
    {id: 23423, name: 'dmitriy'},
    {id: 435, name: 'jhsadf'},
]

let liElement = users.map((u, index) => <div key={u.id}><li>{u.name}</li></div>)

function App() {
  return (
    <div className="App">
      <ul>
        {liElement}
      </ul>
    </div>
  );
}

export default App;


/*
ключ key всегда переносится во внешний возвращаемый элемент
<div key={u.id}><li>{u.id} - {u.name}</li></div>
*/