import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Todo from './Todo.js'
import HelloWorld from './HelloWorld.js'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/todos" element={<Todo />} />
        <Route path="/hello-world" element={<HelloWorld />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;