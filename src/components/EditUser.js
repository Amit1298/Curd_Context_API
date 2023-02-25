import React from 'react';
import { Link } from 'react-router-dom';
import {Button, Form, FormGroup, Input, Label} from 'reactstrap';

function EditUser() {
  return (
    <Form>
        <FormGroup>
            <Label>Name</Label>
            <Input type='text' placeholder='Enter Name' />
        </FormGroup>
        <Button type='submit'>Edit</Button>
        <Link to="/" className='btn btn-danger mx-2'>Cancel</Link>
    </Form>
  )
}

export default EditUser