import {useState} from 'react'
import './App.css';
import BoxRadius from './components/box';

function App() {

  const [topLeft, setTopLeft] = useState(0);
  const [topRight, setTopRight] = useState(0);
  const [bottomLeft, setBottomLeft] = useState(0);
  const [bottomRight, setBottomRight] = useState(0);

  function heldBorders(evt) {
    
    if(evt.target.id === 'top-left') {
      setTopLeft(evt.target.value);
      console.log(evt.target.value);
    }

    if(evt.target.id === 'top-right') {
      setTopRight(evt.target.value);
      console.log(evt.target.value);
    }

    if(evt.target.id === 'bottom-left') {
      setBottomLeft(evt.target.value);
        console.log(evt.target.value);
    }

    if(evt.target.id === 'bottom-right') {
      setBottomRight(evt.target.value);
      console.log(evt.target.value);

    }

    
  }

  return (
   <>
   
   <BoxRadius
   topLeft = {topLeft}
   topRight = {topRight}
   bottomLeft = {bottomLeft}
   bottomRight = {bottomRight}
   />

   <div className='inputs'>

     <input type='range' id='top-left' value={topLeft} onChange={heldBorders}></input>
     <input type='range' id='top-right' value={topRight} onChange={heldBorders}></input>
     <input type='range' id='bottom-left' value={bottomLeft} onChange={heldBorders}></input>
     <input type='range' id='bottom-right' value={bottomRight} onChange={heldBorders}></input>

   </div>
   </>
  );
}

export default App;
