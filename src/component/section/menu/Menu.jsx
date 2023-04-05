import React from "react";
import './Menu.css';
import { AiOutlineSearch } from "react-icons/ai";

const Menu = () =>{
    return <div>
         <table>
            <tbody>
                <tr>
                    <td><AiOutlineSearch size="1.5rem"/></td>
                    <td>
                        <div className="left-search-input">
                        <input type='search' className='' 
                        placeholder='🔍 Search' spellCheck="false"/>
                        <button>🔍 Search</button>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                </tr>
            </tbody>
         </table>
    </div>
};

export default Menu;