import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {Button, Form, FormGroup, Input, Label} from 'reactstrap';
import { GlobalContext } from '../context/GlobalState';

function AddUser() {
  const [addUser] = useContext(GlobalContext);
  const history = useNavigate();

  const onSubmit = () =>{
    const newUser = {
      id: 4,
      name: "User Four"
    }
    history('/');
  }
  return (
    <Form onSubmit={onSubmit}>
        <FormGroup>
            <Label>Name</Label>
            <Input type='text' placeholder='Enter Name' />
        </FormGroup>
        <Button type='submit'>Submit</Button>
        <Link to="/" className='btn btn-danger mx-2'>Cancel</Link>
    </Form>
  )
}

export default AddUser