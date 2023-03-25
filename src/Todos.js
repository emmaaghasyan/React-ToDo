import Todo from "./Todo";

const Todos = ( {x, y, todos, doneTodo, removeTodo} )=>{

    return (
        <div className="todos">
            {todos.map(el=> <Todo item={el} doneTodo={doneTodo} removeTodo={removeTodo} />)}
        </div>
    );
}

export default Todos;