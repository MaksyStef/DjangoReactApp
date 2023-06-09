import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Todo from './Todo.js'
import HelloWorld from './HelloWorld.js'
import InheretingPropsParent from './InheretingPropsParent.js'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/todos" element={<Todo />} />
        <Route path="/hello-world" element={<HelloWorld />}/>
        <Route path="/inherit-props" element={<InheretingPropsParent greetings="Welcome" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;