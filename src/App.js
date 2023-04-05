import React from 'react';
import './App.css';
import Navbar from './component/section/navbar/Navbar';
import LeftSide from './component/leftSideArea/LeftSide';
import RightSide from './component/rightSideArea/RightSide';

const App = () =>{
  
    return(
      <div className="App">
       <Navbar />
        <div>
          <div className='screen'>
            <LeftSide />
            <RightSide />
          </div>
        </div>
      </div>
    );
  }


export default App;
