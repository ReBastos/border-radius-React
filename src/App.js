import {useState} from 'react'
import './App.css';
import BoxRadius from './components/BoxRadius';
import CssGenerator from './components/CssGenerator';
import RangeInput from './components/RangeInput';


function App() {

  const [topLeft, setTopLeft] = useState(0);
  const [topRight, setTopRight] = useState(0);
  const [bottomLeft, setBottomLeft] = useState(0);
  const [bottomRight, setBottomRight] = useState(0);


  return (
   <>
   <h1 className='titlePG'>Border-Radius Previewer</h1>
   <main>
   
   <BoxRadius
   topLeft = {topLeft}
   topRight = {topRight}
   bottomLeft = {bottomLeft}
   bottomRight = {bottomRight}
   />
   

   <div className='inputs'>
      <RangeInput value={topLeft} setValue={setTopLeft}/>
      <RangeInput value={topRight} setValue={setTopRight}/>
      <RangeInput value={bottomLeft} setValue={setBottomLeft}/>
      <RangeInput value={bottomRight} setValue={setBottomRight}/>
   

    
   <CssGenerator 
   topLeft = {topLeft}
   topRight = {topRight}
   bottomLeft = {bottomLeft}
   bottomRight = {bottomRight}
   />
    
</div>

  </main> 
   </>
  );
}

export default App;
