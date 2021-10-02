import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import CreateTodo from './components/CreateTodo/CreateTodo';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <CreateTodo />
    </div>
  );
}

export default App;
