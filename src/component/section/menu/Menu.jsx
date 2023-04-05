import React from "react";
import './Menu.css';
import { AiOutlineSearch } from "react-icons/ai";
// import { FaFilter } from "react-icons/fa";
// import { FcGenericSortingDesc } from "react-icons/fc";
// import { HiOutlineSortAscending } from "react-icons/hi";
// import { TbArrowBigDown, TbArrowBigUp } from "react-icons/tb";
import { BiSort } from "react-icons/bi";
import { RiEqualizerLine , RiFilter2Line } from "react-icons/ri";

const Menu = () =>{
    return <div>
         <table>
            <tbody>
                <tr>
                    <td><AiOutlineSearch size="1.8rem"/></td>
                    <td>
                        <div className="left-search">
                        <input type='search' className='left-search-input' 
                        placeholder='Search' spellCheck="false"/>
                        <button className="left-search-button">🔍 Search</button>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td><div className="sort-icon"><RiEqualizerLine color="#1C82AD" size="2rem"/></div></td>
                    <td>
                        <div className="sort-area">
                            <select className="sort-select">
                                <option>Date & Time</option>
                                <option>Title</option>
                                <option>Description</option>
                                <option>Due date</option>
                            </select>
                            <div className="sort-up-down">
                                <button><BiSort className="ascending" size="1.6rem"/></button>
                                {/* <TbArrowBigDown className="descending" size="1.8rem"/>
                                <TbArrowBigUp className="ascending" size="1.8rem"/> */}
                            </div>
                        </div>
                    </td>
                </tr>
                
            </tbody>
         </table>
         <div className="filter-parent">
                <div className="filter-area">
                    <div className="filter-icon"><RiFilter2Line color="#1C82AD" size="1.2rem"/></div>
                    <p className="filter-intro"> Filters</p>
                </div>
                <div className="filter-options">
                    <p>Status</p>
                    <input type="checkbox" />
                    <label>Open</label><br/>
                    <input type="checkbox" />
                    <label>Working</label><br/>
                    <input type="checkbox" />
                    <label>Done</label><br/>
                    <input type="checkbox" />
                    <label>Overdue</label><br/>
                </div>
         </div>
    </div>
};

export default Menu;