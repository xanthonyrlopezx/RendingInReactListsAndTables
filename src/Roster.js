  
import React from "react";

function Roster(props) {
  const {detailed, roster} = props;
  if(detailed)
  {
    const rows = roster.map(({id, firstName, lastName, location}, index) => (
      <tr key= {index}>
         <td>{id}</td>
        <td>{firstName}</td>
        <td>{lastName}</td>
        <td>{location}</td>
      </tr>
    ));
    return (
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
  else {
    const list = roster.map(({firstName}, index) => <li key={index}>{firstName}</li>);
  return <ol>{list}</ol>;
  }
}

export default Roster;