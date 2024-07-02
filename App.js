import {useState} from 'react'
import './App.css'
const App=()=>{
  let [data,setData]=useState([])
  let [obj,setObj]=useState({"uid":"","email":"","task":"","d1":""})
  let [f,setF]=useState(true)
  let [ind,setInd]=useState(-1)
  let fun=(e)=>{
    setObj({...obj,[e.target.name]:e.target.value})
  }
  let add=()=>{
    setData([...data,obj])
    setObj({"uid":"","email":"","task":"","d1":""})
  }
  let del=(i)=>{
    data.splice(i,1)
    setData([...data])
  }
  let edit=(i)=>{
    setObj(data[i])
    setF(false)
    setInd(i)
  }
  let update=()=>{
    data[ind]=obj
    setData([...data])
    setF(true)
    setObj({"uid":"","email":"","task":"","d1":""})
  }
  return(<div>
    <input type='text' placeholder='enter uid' name='uid' value={obj.uid} onChange={fun}/>
    <input type='email' placeholder='enter email' name='email' value={obj.email} onChange={fun}/>
    <input type='text' placeholder='enter task' name='task' value={obj.task} onChange={fun}/>
    <input type='date' placeholder='enter deadline' name='d1' value={obj.d1} onChange={fun}/>
    {f&&<button onClick={add}>Add</button>}
    {!f&&<button onClick={update}>update</button>}
    {
      data.length>0&&<table border={1}>
        <tr><th>UID</th><th>Email</th><th>Task</th><th>Deadline</th></tr>
        {
          data.map((item,i)=>{
            return(<tr>
              <td>{item.uid}</td>
              <td>{item.email}</td>
              <td>{item.task}</td>
              <td>{item.d1}</td>
              <td><button onClick={()=>edit(i)}>Edit</button></td>
              <td><button onClick={()=>del(i)}>Delete</button></td>
            </tr>)
          })
        }
      </table>
    }
  </div>)
}
export default App