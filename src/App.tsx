import { useRef, useState } from 'react';
import './App.css';
import Left from './Left';
import Right from './Right';

function App() {
  const img = useRef<HTMLImageElement>(null);
  const [res, setRes] = useState(' ');

  return (
    <>
      <div className="container">
        <Left ref={img} setRes={setRes} />
        <Right res={res} />
      </div>
    </>
  );
}

export default App;
