import { Table, TableCell, TableContainer, TableHead, TableRow,TableBody } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
const Pls = () => {
 
    var[users,setData]=useState([])
    useEffect(()=>{
        
      axios.get("http://localhost:8080/persons")
      .then((response)=>{    setData(users=response.data)
        console.log(response.data)
    })
    .catch(err=>console.log(err))
    },[])


  return (
    <div style={{padding:"100px"}}>
     
     <TableContainer style={{paddingTop:'100px'}}>
        <Table style={{backgroundColor:'yellowgreen'}}>
            <TableHead>
                <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Place</TableCell>
                    
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    users.map((value,index)=>{
                        return(
                            <TableRow key={index}>
                            <TableCell>{value.person_name}</TableCell>
                            <TableCell>{value.person_place}</TableCell>
                            

                            </TableRow>
                        )
                    })
                }
            </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default Pls
