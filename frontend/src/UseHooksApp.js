import { useEffect, useState, useReducer } from "react";
import { Table, Card, CardBody, CardFooter, CardTitle, CardSubtitle, CardColumns } from "reactstrap";

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

const walletReducer = (state, action) => {
  if (action.type === 'recieve') return {money: state.money + 10};
  if (action.type === 'spend') return {money: state.money - 10};
  return state;
}
function WalletState(props) {

  const [state, dispatch] = useReducer(walletReducer, {money: 0});

  return (
    <Card>
      <CardBody>
        <CardTitle>Current balance:</CardTitle>
        <CardSubtitle>{state.money}</CardSubtitle>
      </CardBody>
      <CardFooter>
        <button onClick={()=>{dispatch({type:'recieve'})}}>Recieve Salary</button>
        <button onClick={()=>{dispatch({type:'spend'})}}>Spend Earnings</button>
      </CardFooter>
    </Card>
  )
}
export default function UseHooksApp (props) {
  return (
    <div className="wrapper p-4 w-100 min-vh-100 d-flex flex-column justify-content-center align-items-center">
      <DataTable></DataTable>
      <WalletState></WalletState>
    </div>
  )
}