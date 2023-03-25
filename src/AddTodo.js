import { useState } from "react";

const AddTodo = ({addTodo})=>{

    const [val, setVal] = useState('');


    const handleSubmit = (e)=>{
        e.preventDefault();
        addTodo(val);
        setVal('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type='text' onChange={(e)=> setVal(e.target.value)} value={val}  />
            <input type='submit' value='ADD TODO' />
        </form>
    );
}


export default AddTodo;