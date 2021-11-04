import Button from './components/Button';
import Input from './components/Input';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Typescript 101</h1>
      </header>
      <main>
        <Button name="number" width={100} />
        <Input />
      </main>
    </div>
  );
}

export default App;
