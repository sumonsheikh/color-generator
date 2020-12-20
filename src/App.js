import React, {useState} from 'react';
import SingleColor from './SingleColor';
import Values from 'values.js';

function App() {
 const [color, setColor] = useState('');
 const [error, setError] = useState(false);
 const [list, setList]   = useState([]);
 const handleSubmit = (e) =>{
   e.preventDefault();
   console.log("hello");
 }
  return (
   <>
    <section className="container">
      <h3>Color generator</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" value={color} onChange={(e) => setColor(e.target.value)} />
        <button className="btn-generate" type="submit">generate</button>
      </form>
    </section>
    <section className="colors">
      <h3>list goes here</h3>
    </section>
   </>
  );
}

export default App;
