import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import './AddTask.css';
import bg_img from '../Home/Images/task.png'


export default function AddTask(){
    var [title, setTitle] = useState("");
    var [description, setDescription] = useState("");
    var [dueDate, setDueDate] = useState("");
    var [status, setstatus] = useState();
    var [createdDate, setCreatedDate] = useState();
    var [completedDate, setCompletedDate] = useState();

    var navigate = useNavigate();

    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + 1);
    const minDateTime = currentDate.toISOString().slice(0, 16);


    var task = {};

    function add(e)
    {
        e.preventDefault();

        task.title = title;
        task.description = description;
        task.dueDate = dueDate;
        task.status = status;
        task.createdDate = createdDate;
        task.completedDate = completedDate;

        var RequestOption = {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(task)
          }
      
          fetch("https://localhost:7269/api/Task/AddTask", RequestOption)
          .then(res => res.json())
          .then(res => {
            console.log(res)
            alert("Task added successfully")
          })
          .catch(err => {
            console.log(err)
            alert("Error adding the task")
          })
    }
   

    return(
        <div className="add-member-page">
            <img src={bg_img} className="img-bg"/> 
            <div className="form-container">
                <h2>Add Task</h2>
                <form>
                    <div className="form-group">
                        <label htmlFor="name">Title</label>
                        <input type="text" id="name" name="name" value={title} onChange={(e) => setTitle(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Description</label>
                        <input type="email" id="email" name="email" value={description} onChange={(e) => setDescription(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">dueDate</label>
                        <input type="text" id="phone" name="phone" value={dueDate} onChange={(e) => setDueDate(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="expiry">Membership Expiry</label>
                        <input type="datetime-local" id="expiry" name="expiry" value={status} min={minDateTime} onChange={(e) => setstatus(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="doj">DOJ</label>
                        <input type="datetime-local" id="doj" name="doj" min={minDateTime} value={createdDate} onChange={(e) => setCreatedDate(e.target.value)} />
                    </div>
                    <button type="submit" onClick={add}>Add</button>
                </form>
            </div>
        </div>
    )
}