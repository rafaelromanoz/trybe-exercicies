import { useEffect, useState } from 'react';
import ToDo from './ToDo';
function App() {
  const [aleatoryNumber, setAleatory] = useState(1);
  const [multiply, setMultiply] = useState('');

  useEffect(()=>{
    setInterval(()=>{
      setAleatory(Math.floor(Math.random() * 100))
    }, 10000)
  },[])

  useEffect(()=> {
    verifyNumber();
  },[ aleatoryNumber ])

  const verifyNumber = () => {
    if(aleatoryNumber % 3 === 0 ) {
      setMultiply('Acerto')
    }
    else {
      setMultiply('')
    }
  }

  useEffect(()=> {
    return () => {
      setAleatory('');
      setMultiply('');
    }
  }, [aleatoryNumber,multiply])

  return (
    <div>
      <h1>{aleatoryNumber}</h1>
      <p>{multiply}</p>
      <ToDo></ToDo>
    </div>
  );
}

export default App;
