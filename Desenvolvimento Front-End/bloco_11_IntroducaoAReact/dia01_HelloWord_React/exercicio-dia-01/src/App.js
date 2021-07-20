import './App.css';

const arrayOfCompromisses = [
  'Aprender JSX',
  'Aprender react',
  'Não ficar de recuperação',
  'e é isso',
];
const teste = arrayOfCompromisses.map((element) => {
  return <li>{element}</li>
});
const Task = (value) => {
  return <li>{value}</li>;
};
const element = <h1>Oi, {Task('Aprender JSX')}</h1>;
const containter = <div>{element}</div>;

function App() {
  return <h1>VQV</h1>,
    teste;
}

export default App;
