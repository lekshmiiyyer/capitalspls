import { Table, TableCell, TableContainer, TableHead, TableRow,TableBody } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './App.css';
import {AppBar, Box, Button, Toolbar, Typography}from "@mui/material"
import Pls from './components/Pls';
import Noerror from './components/Noerror';
import { Link, Route, Routes } from 'react-router-dom';
function App() {

  var[users,setData]=useState([])
  useEffect(()=>{
      
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then((response)=>{    setData(users=response.data)
      console.log(response.data)
  })
  .catch(err=>console.log(err))
  },[])



  return (
    <><div className="App">

      <AppBar style={{ backgroundColor: 'green' }}>
        <Toolbar>
          <Button color='inherit'><Link to={'/'} style={{ textDecoration: 'none', color: 'white', backgroundColor: 'purple' }}> HOME</Link> </Button>
          <Button color='inherit'><Link to={'/employee'} style={{ textDecoration: 'none', color: 'white', backgroundColor: 'purple' }}> EMPLOYEE</Link></Button>
        </Toolbar>
      </AppBar>
      {/* <Pls/>
   <Noerror/> */}
      <Routes>
        <Route path='/' />
        <Route path='/employee' element={<Noerror />} />
      </Routes>
    </div><div style={{ padding: "100px" }}>

        <TableContainer style={{ paddingTop: '100px' }}>
          <Table style={{ backgroundColor: 'yellowgreen' }}>
            <TableHead>
              <TableRow>
                <TableCell>id</TableCell>
                <TableCell>name</TableCell>
                <TableCell>email</TableCell>
                
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((value, index) => {
                return (
                  <TableRow key={index}>
                    <TableCell>{value.id}</TableCell>
                    <TableCell>{value.name}</TableCell>
                    <TableCell>{value.email}</TableCell>

                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </div></>






  );
}

export default App;
