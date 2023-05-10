import React, { useEffect, useRef } from 'react';
import ReactDOM from "react-dom";

import { mount } from 'vueModuleApp/Sample';
import { Counter } from 'reactModuleApp/Counter';
import { navigationBarMount } from 'vueNavigationPageModule/NavigationBarPage'
import { realNaviBarMount } from 'vueRealNaviBarModule/RealNavigation'
import { TodoApp } from 'reactZustandStateModule/TodoApp'

import "./index.css";

const App = () => {
  const vueRef = useRef(null)
  const vueNavigationRef = useRef(null)
  const vuetifyRealNaviRef = useRef(null)

  useEffect(() => {
    mount(vueRef.current);
    navigationBarMount(vueNavigationRef.current)
    realNaviBarMount(vuetifyRealNaviRef.current)
  }, []);

  return (
    <div>
      <div ref={vuetifyRealNaviRef} />
      <div>Name: host-container-app</div>
      <div>Framework: react</div>
      <div>Language: JavaScript</div>
      <div>CSS: Empty CSS</div>

      <h1>나는 React: Vue, React에 대한 Container 역할!</h1>
      <div ref={vueRef} />
      <Counter/>
      <h2>Vue Navigation Bar</h2>
      <div ref={vueNavigationRef} />
      <TodoApp/>
    </div>
  );
}
export default App

ReactDOM.render(<App />, document.getElementById("app"));
