import { Button, TextField } from '@mui/material'
import React from 'react'

const Noerror = () => {
  return (
    <div style={{paddingTop:'120px'}}>
      <br></br>
      <TextField label='Name'/><br/><br/>
      <TextField label='Designation'/><br/><br/>
      <TextField label='Location'/><br/><br/>
      <TextField label='Salary'/><br/><br/>
      <Button>SUBMIT</Button>
    </div>
  )
}

export default Noerror
