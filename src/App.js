import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [student,setStudent]=useState([])
  const [newStudent,setNewStudent]=useState({name:'',roll:0})

  const handleName=(e)=>{
    setNewStudent({...newStudent,name:e.target.value})
  }
  const handleRoll=(e)=>{
    setNewStudent({...newStudent,roll:e.target.value})
  }
  const handlesubmit=(e)=>{
    e.preventDefault()
    setStudent([...student,newStudent])
    setNewStudent({name:'',roll:0})
  }
  

  return (
    <div className="App">
      <h1>Student Register</h1>
      <form onSubmit={handlesubmit}>
        <label>
          Name:
        <input type='text' onChange={handleName} placeholder='name' value={newStudent.name}/>
        
        </label>
        <label>
          Roll Number:<input type='number' onChange={handleRoll} placeholder='roll' value={newStudent.roll}/>
          </label>
        <button type='submit'>Add</button>
      </form>
      <table id="student-table">
        <thead>
          <tr>
          <th>
            Name
          </th>
          <th>
            Roll
          </th>
          </tr>
        </thead>
        <tbody>
          {
            student.map((item,index)=>(<tr key={index}>
              <td>{item.name}</td>
              <td>{item.roll}</td>
            </tr>))
          }
        </tbody>
      </table>
    </div>
  );
}

export default App;
