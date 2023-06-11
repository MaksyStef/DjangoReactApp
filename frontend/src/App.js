import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Todo from './Todo.js'
import HelloWorld from './HelloWorld.js'
import FunctionsInheretingPropsParent from './FunctionsInheretingPropsParent.js'
import ClassesInheretingPropsParent from './ClassesInheretingPropsParent.js'
import EventHandle from './EventHandle.js'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/todos" element={<Todo />} />
        <Route path="/hello-world" element={<HelloWorld />}/>
        <Route path="/props-inherit">
          <Route path="/props-inherit/function" element={<FunctionsInheretingPropsParent greetings="This text is inherited" />} />
          <Route path="/props-inherit/class" element={<ClassesInheretingPropsParent greetings="This text is inherited" />} />
        </Route>
        <Route path="/events-handle" element={<EventHandle />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;