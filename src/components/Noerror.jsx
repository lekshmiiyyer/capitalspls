import { Button, TextField } from '@mui/material'
import React from 'react'

const Noerror = () => {
  return (
    <div style={{paddingTop:'120px'}}>
      <br></br>
      <TextField label='name'/><br/><br/>
      <TextField label='place'/><br/><br/>
      <Button>SUBMIT</Button>
    </div>
  )
}

export default Noerror
