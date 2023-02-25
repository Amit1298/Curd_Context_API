import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { Link } from 'react-router-dom'
import { Button, ListGroup, ListGroupItem } from 'reactstrap'

function UserList() {
  const {users, removeUser} = useContext(GlobalContext);
  console.log('users   => ', users);
  return (
    <ListGroup className='mt-4'>
      {users.map(user=>(
        <ListGroupItem className='d-flex'>
        <strong>{user.name}</strong>
      <div className='ml-auto'>
        <Link className='btn btn-warning mx-1' to={`/edit/${user.id}`}>Edit</Link>
        <Button onClick={()=> removeUser(user.id)} color='danger'>Delete</Button>
      </div>
      </ListGroupItem>
      ))}
    </ListGroup>
  )
}

export default UserList