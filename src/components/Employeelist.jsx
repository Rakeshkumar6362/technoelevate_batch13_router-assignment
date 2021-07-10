import React from 'react'

export default function Employeelist() {
    return (
        <div>
            <h1 className="text-center text-info">Employee List</h1>
            <br />
            <table className="table table-hover w-75 m-auto table-dark">
  <thead>
    <tr>
      <th scope="col">Employee ID</th>
      <th scope="col">Name</th>
      <th scope="col">Designation</th>
      <th scope="col">Salary</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">TY001</th>
      <td>ARUN</td>
      <td>SSD</td>
      <td>45000</td>
    </tr>
    <tr>
      <th scope="row">TY002</th>
      <td>PRASHANTH</td>
      <td>HR</td>
      <td>25000</td>
    </tr>
    <tr>
      <th scope="row">TY003</th>
      <td>VIJAY</td>
      <td>SSD</td>
      <td>25000</td>

    </tr>
    <tr>
      <th scope="row">TY004</th>
      <td >KIRAN</td>
      <td>HR</td>
      <td>35000</td>

    </tr>
  </tbody>
</table>
            
        </div>
    )
}
