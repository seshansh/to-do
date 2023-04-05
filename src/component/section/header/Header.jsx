import React, { useState } from 'react';
import './Header.css';
import AddTask from '../addTask/AddTask';
import { IoIosAdd } from "react-icons/io";

const Header= () =>{

    const [formOpen, setFormOpen] = useState(false);
    const manageNewTask =()=>{
        setFormOpen(!formOpen)
    }
    return  <div className='main-head_header'>
            <div className='starting-state'>
                <p className='emoji-part'>😎  <span className='set-task-mot'>Let's set a new goal</span></p>
                <button className='new-task-button' onClick={manageNewTask}><IoIosAdd /> New task</button>
            </div>
            {formOpen ? <AddTask /> : ""}
    </div>

};

export default Header;