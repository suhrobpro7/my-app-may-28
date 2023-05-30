import {useState} from 'react'
import TodoList from './TodoList';

function InputList() {
    let [text, setText] = useState('');
    let [list, setList] = useState([]);
    
    let changeText = (event) => {
      let newText = event.target.value;
      setText(newText);
    };

    let saveToList = () => {
      let newList =  [...list, text];
      setList(newList);
    }
  return (
    <div>
       <h1 className='text-red'>Todo List</h1>
      <input onChange={changeText}></input>
      <button onClick={saveToList}>Submit</button>
      <TodoList text={text} list={list}/>
    </div>
  )
}
export default  InputList;