import { useState, useEffect } from 'react'
import './App.css'
import { ToDoProvider } from './Context'
import TodoItem from './components/TodoItem'
import TodoForm from './components/TodoForm'

function App() {
  console.log(`App called`);

  const [todos, setTodos] = useState([])

  const addToDo = (todo) => {
    console.log(`inside before app addToDo called: ${JSON.stringify(todo)}`);
    // setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev])

    setTodos((prev) => {
      console.log(`inside before app addToDo prev called: ${JSON.stringify(prev)}`);
      return [{ id: Date.now(), ...todo }, ...prev];
    });
  }

  const updateToDo = (id, todo) => {
    console.log(`inside before app updateToDo called: ${JSON.stringify(todo)}: id is ${id}`);
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)))
  }
  const deleteToDo = (id) => {
    console.log(`inside before app deleteToDo called: ${JSON.stringify(id)}`);
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  const toggleComplete = (id) => {
    console.log(`inside before app toggleComplete called: ${Object.toString(id)}`);
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id ? { ...prevTodo, completed: !prevTodo.completed } : prevTodo))
  }

  useEffect(() => {

    const todos = JSON.parse(localStorage.getItem("todos"))

    if (todos && todos.length > 0) {
      setTodos(todos)
    }
    console.log(`Use effect called 1st : ${JSON.stringify(todos)}`);
  }, [])

  useEffect(() => {
    console.log(`Use effect called 2nd : ${Object.toString(todos)}`);
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])


  return (

    <ToDoProvider value={{ todos, addToDo, updateToDo, deleteToDo, toggleComplete }}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((todo) => (
              <div key={todo.id}
                className='w-full'
              >
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </ToDoProvider>
  )
}

export default App
