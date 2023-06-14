import { Component, useEffect, useState } from 'react';
import Wrapper from './components/Wrapper.js';
import { Table } from 'reactstrap';


function FetchData ({url, render}) {
  const [state, setState] = useState({data: []});

  useEffect(()=> {
    const data = fetch(url)
                .then(resp=>resp.json())
                .then(data=>data.slice(0, 10))
                .then(data=>setState({data: data}))
  }, [])
  return render(state.data);
}

const RenderTodo = data => {
  const rows = data.map(item => {
    return (
      <tr>
        <th>{item.id}</th>
        <th>{item.title}</th>
        <th>{item.completed ? "TRUE" : "FALSE"}</th>
      </tr>
    )
  })
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

const RenderComments = data => {
  const rows = data.map(item => {
    return (
      <tr>
        <th>{item.postId}</th>
        <th>{item.id}</th>
        <th>{item.name}</th>
        <th>{item.email}</th>
        <th>{item.body}</th>
      </tr>
    )
  });

  return (
    <Table>
      <thead>
        <tr>
          <th>#</th>
          <th>USER ID</th>
          <th>EMAIL</th>
          <th>TITLE</th>
          <th>BODY</th>
        </tr>
      </thead>
      <tbody>
        {rows}
      </tbody>
    </Table>
  )
}

export default class RenderPropApp extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Wrapper style={{gap: "84px"}}>
        <FetchData url={"https://jsonplaceholder.typicode.com/todos"} render={RenderTodo} />
        <FetchData url={"https://jsonplaceholder.typicode.com/comments"} render={RenderComments} />
      </Wrapper>
    )
  }
}