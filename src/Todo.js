

const Todo = ({item, doneTodo, removeTodo})=>{

    return <div className={item.done ? 'todo done' : 'todo'}>
        {item.title}
        <i className="fas fa-check" onClick={ ()=>doneTodo(item.id) }></i>
        <i className="fas fa-trash" onClick={ ()=> removeTodo(item.id) }></i>
        </div>;
}

export default Todo;