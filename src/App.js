
import './App.css';
import {AppBar, Box, Button, Toolbar, Typography}from "@mui/material"
import Pls from './components/Pls';
import Noerror from './components/Noerror';
import { Link, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      
        <AppBar style={{backgroundColor: 'green'}}>
            <Toolbar>
                <Button color='inherit'><Link to={'/entry'} style={{textDecoration:'none',color:'white',backgroundColor:'purple'}}> ADD</Link> </Button>
                <Button color='inherit'><Link to={'/table'} style={{textDecoration:'none',color:'white',backgroundColor:'purple'}}> VIEW</Link></Button>
            </Toolbar>
        </AppBar>
        {/* <Pls/>
       <Noerror/> */}
       <Routes>
        <Route path='/table' element={<Pls/>}/>
        <Route path='/entry' element={<Noerror/>}/>
       </Routes>
    </div>
  );
}

export default App;
