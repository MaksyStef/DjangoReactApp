import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TodoApp from './Todo.js';
import HelloWorldApp from './HelloWorld.js';
import FunctionsInheretingPropsParentApp from './FunctionsInheretingPropsParent.js';
import ClassesInheretingPropsParentApp from './ClassesInheretingPropsParent.js';
import EventHandleApp from './EventHandle.js';
import UseImageAssetApp from './UseImageAsset.js';
import UseVideoAssetApp from './UseVideoAsset.js';
import CalculatorApp from './Calculator.js';
import RenderListApp from './RenderLists.js';
import UseContextApp from './UseContextApp.js';
import UseHooksApp from './UseHooksApp.js';
import HocTechniqueApp from './HocTechniqueApp.js';
import RenderPropApp from './RenderProp.js';
import IndexApp from './IndexApp.js';
function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<IndexApp />} />
          <Route path="/hello-world" element={<HelloWorldApp />}/>
          <Route path="/calculator" element={<CalculatorApp />} />
          <Route path="/todos" element={<TodoApp />} />
          <Route path="/props-inherit">
            <Route path="/props-inherit/function" element={<FunctionsInheretingPropsParentApp greetings="This text is inherited" />} />
            <Route path="/props-inherit/class" element={<ClassesInheretingPropsParentApp greetings="This text is inherited" />} />
          </Route>
          <Route path="/events-handle" element={<EventHandleApp />}/>
          <Route path="/use-asset">
            <Route path="/use-asset/image" element={<UseImageAssetApp />} />
            <Route path="/use-asset/video" element={<UseVideoAssetApp />} />
          </Route>
          <Route path="/render-list" element={<RenderListApp />}/>
          <Route path="/use-context" element={<UseContextApp />}/>
          <Route path="/use-hooks" element={<UseHooksApp />}/>
          <Route path="/hoc-technique" element={<HocTechniqueApp />}/>
          <Route path="/render-prop" element={<RenderPropApp />}/>
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default App;