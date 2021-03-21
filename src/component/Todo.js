import React,{useState} from 'react'
const Todo=(props)=>{
    const [todoData,setTodoData]=useState('')
    const [addTodoData,setAddTodoData]=useState([])
    const [todoDataError,setTodoDataError]=useState('')
    //on change of todo input field
    const handleChangeTodo=(e)=>{
        setTodoData(e.target.value)
        setTodoDataError('')
    }
    // validation of todo input field
    const validation=()=>{
        let todoDataError=''
        if(!todoData){
            todoDataError='*todos cannot be empty'
        }
        else if(todoData.length<9){
            todoDataError='*todos can be of minimum 10 character long.'
        }
        if(todoDataError){
            setTodoDataError(todoDataError)
            return false
        }
        return true
    }
    //add todo data
    const addTodo=()=>{
        const isValid=validation()
        if(isValid){
            setAddTodoData([...addTodoData,todoData])
            setTodoData('')
        }
    }//on double click delete todos
    const deleteTodo=(id)=>{
        const filteredele = addTodoData.filter((ele,i)=>id!==i)
        setAddTodoData(filteredele)
    }
    // finding date and month
    let month= new Date().toLocaleString("en-us", {day:"numeric",month: "short"})

    return(
        <div className='todoContainer'>
            <div className='todoHeader'>
                <h2 className='todoName'>Hello UserName</h2><hr className='todoLine'/>
            </div>
            <div className='todoFormField'>
                <table>
                    <tr>
                        <th><input className='todoInput' type='text' value={todoData} onChange={handleChangeTodo}/><div className='usernameError'>{todoDataError}</div></th>
                        <td><button className='todoButton' onClick={addTodo}>Add</button></td>
                    </tr>
                </table>
            </div>
            <div className='todoTable'>
                <ul>
                    {
                        addTodoData.map((ele,i)=><li className='todoList' key={i} onDoubleClick={()=>deleteTodo(i)}><p>{i+1} {ele} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {month}</p></li>)
                    }
                </ul>
            </div>
        </div>
    )
}
export default Todo