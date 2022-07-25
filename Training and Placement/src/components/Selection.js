import React from "react";

export default function Selection() {
  return (
    <div
      className=""
      style={{
        height: "600px",
        objectFit: "cover",
        
      }}
    >
        <h1 className="title text-light container">Placement Records</h1>
      <table className="table container bg-secondary my-1 text-light table-bordered border-">
        <thead>
          <tr className="text-dark">
            <th scope="col"><strong>Year</strong></th>
            <th scope="col"><strong>No. of Selections</strong></th>
            <th scope="col"><strong>No. of Companies</strong></th>
            <th scope="col"><strong>Average Salary</strong></th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          <tr>
            <th scope="row">2022</th>
            <td>340</td>
            <td>50</td>
            <td>3.8 LPA</td>
          </tr>
          <tr>
            <th scope="row">2021</th>
            <td>200</td>
            <td>29</td>
            <td>3.5 LPA</td>
          </tr>
          <tr>
            <th scope="row">2020</th>
            <td>280</td>
            <td>30</td>
            <td>3.5 LPA</td>
          </tr>
          <tr>
            <th scope="row">2019</th>
            <td>300</td>
            <td>23</td>
            <td>3 LPA</td>
          </tr>
          <tr>
            <th scope="row">2018</th>
            <td>180</td>
            <td>14</td>
            <td>3 LPA</td>
          </tr>
          
        </tbody>
      </table>
    </div>
  );
}
