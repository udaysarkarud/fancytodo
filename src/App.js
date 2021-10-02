import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import Header from './components/Header/Header';
import CreateTodo from './components/CreateTodo/CreateTodo';
import ActiveTodos from './components/ActiveTodos/ActiveTodos';
import { useState } from 'react';

function App() {
  const [fullTodoList, setFullTodoList] = useState([])
  const newTodo = {};

  const createNewTodo = () => {
    const title = document.getElementById('title').value;
    const details = document.getElementById('details').value;
    document.getElementById('title').value = '';
    document.getElementById('details').value = '';
    newTodo.todoKey = parseInt(Math.random() * 3790);
    newTodo.title = title;
    newTodo.details = details;
    setFullTodoList([...fullTodoList, newTodo]);
  }

  const deleteFromList = (todoId) => {
    const restTodos = fullTodoList.filter(todoFilter => todoFilter.todoKey !== todoId);
    setFullTodoList(restTodos)
  }

  const removeTodoList = () => {
    setFullTodoList([])
  }

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Header />
            <CreateTodo fullTodoList={fullTodoList} createNewTodo={createNewTodo} deleteFromList={deleteFromList} removeTodoList={removeTodoList} />
          </Route>

          <Route exact path="/home">
            <Header />
            <CreateTodo createNewTodo={createNewTodo} deleteFromList={deleteFromList} removeTodoList={removeTodoList} />
          </Route>

          <Route path="/active">
            <Header />
            <ActiveTodos fullTodoList={fullTodoList} />
          </Route>

          <Route></Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
