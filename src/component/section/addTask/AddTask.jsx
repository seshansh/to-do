import React from "react";
import './AddTask.css';
import { IoMdAddCircleOutline } from "react-icons/io";
import { VscDiffAdded } from "react-icons/vsc";
const AddTask =()=>{
    return <div className="main-head_addTask">
        
            <table className="add-task_task" >
                <tbody>
                <tr className="input-field-rows">
                <td>
                    <label>Due date<span style={{color:"red"}}>*</span></label>
                </td>
                <td>
                    <input type="date" className="due-date_input" />
                </td>
                </tr>
                <tr>
                <td>
                    <label>Tags</label>
                </td>
                <td>
                    <select className="add-tag-select">
                        <option>Choose</option>
                        <option>Home</option>
                        <option>Office</option>
                        <option>Work</option>
                        <option>Personal</option>
                        <option>Friends</option>
                        <option>Family</option>
                    </select>
                    <input className="custom-tag-input" type="text" placeholder="Add tag" maxLength="30" />
                    <button className="add-custom-tag-button"><VscDiffAdded size="1.5rem"/></button>
                </td>
                
                </tr>
                <tr>
                <td>
                    <label>Title<span style={{color:"red"}}>*</span></label>
                </td>
                <td>
                    <input type="text" className="add-title-input" placeholder="Title..." maxLength="100"/>
                </td>
                </tr>
                <tr>
                <td>
                    <label>Description<span style={{color:"red"}}>*</span></label>
                </td>
                <td>
                    <textarea className="add-description-area" placeholder="write description...." rows="1" maxLength="1000"/>
                </td>
                </tr>
                <tr>
                    <td><div className="form-button-section"><button className="add-task-button">Add Task<IoMdAddCircleOutline size="1.2rem"/></button></div></td>
                    <td><div className="form-button-section"><button className="cancel-task-button">Cancel</button></div></td>
                </tr>
                </tbody>
            </table>
            
    </div>
};

export default AddTask;

