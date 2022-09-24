import React from "react";
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";

function UserPage() {
  let Params = useParams();
  return (
    <div>
      <br />
    <h3>User: {Params.userId}</h3>
    <br />
    <Link to="/users">back to user</Link>
    </div>
  )
}

export default UserPage;