import React, { useState } from 'react'
import './App.css';

function App() {

  const [state, setState] = useState('')

  return (
    <div className="App">
      <h1>Naruto</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet perferendis ex obcaecati blanditiis ut cum dignissimos eum autem id incidunt iste, fugiat quam laboriosam adipisci tenetur temporibus qui ipsum quidem?</p>
      <button onClick={() => setState('Dude')}>CLICKED {state}</button>
    </div>
  );
}

export default App;
