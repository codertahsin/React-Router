import React from 'react'
import { Link } from 'react-router-dom'

const USER = [
    {
        id: 1,
        name: 'Arthur'
    },
    {
        id: 2,
        name: 'Jhon'
    },
    {
        id: 3,
        name: 'Rock'
    },
]

function UsersPage() {
  return (
    <div>
        <h1>Users</h1>
        <ul>
            {USER.map(user => (
                <li key={user.id}>
                <Link to={`/users/${user.id}`}>{user.name}</Link>
                </li>    
            ))}
        </ul>
    </div>
  )
}

export default UsersPage