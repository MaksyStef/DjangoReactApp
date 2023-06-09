import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Todo from './Todo.js'
import HelloWorld from './HelloWorld.js'
import FunctionsInheretingPropsParent from './FunctionsInheretingPropsParent.js'
import ClassesInheretingPropsParent from './ClassesInheretingPropsParent.js'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/todos" element={<Todo />} />
        <Route path="/hello-world" element={<HelloWorld />}/>
        <Route path="/props-inherit">
          <Route path="/props-inherit/function" element={<FunctionsInheretingPropsParent greetings="Welcome" />} />
          <Route path="/props-inherit/class" element={<ClassesInheretingPropsParent greetings="Welcome" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;