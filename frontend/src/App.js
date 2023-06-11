import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Todo from './Todo.js';
import HelloWorld from './HelloWorld.js';
import FunctionsInheretingPropsParent from './FunctionsInheretingPropsParent.js';
import ClassesInheretingPropsParent from './ClassesInheretingPropsParent.js';
import EventHandle from './EventHandle.js';
import UseImageAsset from './UseImageAsset.js';
import UseVideoAsset from './UseVideoAsset.js';
function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/todos" element={<Todo />} />
          <Route path="/hello-world" element={<HelloWorld />}/>
          <Route path="/props-inherit">
            <Route path="/props-inherit/function" element={<FunctionsInheretingPropsParent greetings="This text is inherited" />} />
            <Route path="/props-inherit/class" element={<ClassesInheretingPropsParent greetings="This text is inherited" />} />
          </Route>
          <Route path="/events-handle" element={<EventHandle />}/>
          <Route path="/use-asset">
            <Route path="/use-asset/image" element={<UseImageAsset />} />
            <Route path="/use-asset/video" element={<UseVideoAsset />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default App;