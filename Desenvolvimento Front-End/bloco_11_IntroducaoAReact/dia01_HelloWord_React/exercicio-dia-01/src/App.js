import './App.css';
import Aula from './Component'


const arrayOfCompromisses = [
  'Aprender JSX',
  'Aprender react',
  'Não ficar de recuperação',
  'e é isso',
];

const Task = (value) => {
  return <li>{value}</li>;
};
const element = <h1>Oi, {Task('Aprender JSX')}</h1>;
const containter = <div>{element}</div>;

function App() {
  return (
  <>
  <h1>{arrayOfCompromisses.map((element) => <p>{element}</p>)}</h1>
  <Aula/>
  </>
  )
}

export default App;
