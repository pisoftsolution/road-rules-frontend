import React from "react";
import { Button } from "react-bootstrap";
import './All.css'
function User() {
  return (
    <div className="tab">
      <h4>Users</h4>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">S.No</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Role</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>junaid</td>
            <td>ali@gmail.com</td>
            <td>9701303201</td>
            <td>user</td>
            <td><Button>View Details</Button></td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>javeed</td>
            <td>ali@gmail.com</td>
            <td>9701303201</td>
            <td>user</td>
            <td><Button>View Details</Button></td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>jhon</td>
            <td>ali@gmail.com</td>
            <td>9701303201</td>
            <td>user</td>
            <td><Button>View Details</Button></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
export default User;
