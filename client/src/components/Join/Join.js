import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input, Container  } from 'reactstrap';

import './Join.css'

const Join = () => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  const onClick = (e) => (!name || !room) ? e.preventDefault() : null;
  return (
    <div className='joinOuterContainer'>
      <Container className='joinInnerContainer'>
        <Form className=''>
          <h1 className='heading'>Join</h1>
          <FormGroup>
            <Label for="name">Name</Label>
            <Input placeholder='asd' id='name' className='joinInput' type='text' onChange={(e) => setName(e.target.value)}/>
          </FormGroup>
          <FormGroup>
            <Label for="room">Room</Label>
            <Input placeholder='asd' id='room' className='joinInput' type='text' onChange={(e) => setRoom(e.target.value)}/>
          </FormGroup>
          <Link onClick={onClick} to={`/chat?name=${name}&room=${room}`}>
            <Button color="primary" className='button' type='submit'>Join</Button> 
          </Link>
        </Form>
      </Container>
    </div>
  )
}

export default Join