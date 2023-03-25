import { useState } from "react";
import Todos from './Todos';
import AddTodo from "./AddTodo";

const App = ()=>{

    const [todos, setTodos] = useState([
        {id: 1, title: 'react', done: false},
        {id: 2, title: 'angular', done: false},
        {id: 3, title: 'vue', done: true}
    ]);


    const addTodo = (text)=>{
        const newTodo = {
            id: Date.now(),// 123123687623876
            title: text,
            done: false
        };
        setTodos( [newTodo, ...todos] );
    }



    const removeTodo = (id)=>{ 
        const newTodos = todos.filter(el => el.id !== id);
        setTodos(newTodos);
    }

    

    const doneTodo = (id)=>{
        const newTodos = todos.map(el=>{
            if(el.id === id) el.done = !el.done;
            return el;
        });
        setTodos(newTodos);
    }


    return (
        <div className='app'>
            <AddTodo addTodo={addTodo} />
            <Todos x={1} y={2} todos={todos} doneTodo={doneTodo} removeTodo={removeTodo}  />
        </div>
    )
       
}

export default App;