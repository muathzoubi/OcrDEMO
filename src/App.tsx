import {  useState } from 'react';
import './App.css';
import Left from './Left';
import Right from './Right';

function App() {
  const [res, setRes] = useState(' ');

  return (
    <>
      <div className="container">
        <Left  setRes={setRes} />
        <Right res={res} />
      </div>
    </>
  );
}

export default App;
