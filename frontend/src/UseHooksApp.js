import { useEffect, useState } from "react";
import { Table } from "reactstrap";

function DataTable(props) {
  const [state, setState] = useState([])
  
  useEffect(()=> {
    const url = 'https://jsonplaceholder.typicode.com/todos';
    const result = fetch(url, { headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' } })
    .then(response => response.json())
    .then(data => data.slice(0, 10))
    .then(data => {
      data.forEach(item=> {
        delete item.userId;
      })
      return data;
    })
    .then(data => setState(data));
  }, [])

  const rows = state.map(item => {
    return (
      <tr>
        <th key={item.id}>{item.id}</th>
        <th key={item.id}>{item.title}</th>
        <th key={item.id}>{item.completed}</th>
      </tr>
    )
  });

  return (
    <Table>
      <thead>
        <tr>
          <th>#</th>
          <th>TITLE</th>
          <th>COMPLETED</th>
        </tr>
      </thead>
      <tbody>
       {rows}
      </tbody>
    </Table>
  )
}

export default function UseHooksApp (props) {
  return (
    <div className="wrapper p-4 w-100 h-100 d-flex justify-content-center align-items-center">
      <DataTable></DataTable>
    </div>
  )
}