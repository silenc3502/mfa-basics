import React, { useEffect, useRef } from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from "react-query";

import { mount } from 'vueModuleApp/Sample';
import { Counter } from 'reactModuleApp/Counter';
import { navigationBarMount } from 'vueNavigationPageModule/NavigationBarPage'
//import { realNaviBarMount } from 'vueRealNaviBarModule/RealNavigation'
//import { TodoApp } from 'reactZustandStateModule/TodoApp'
import { ZustateCounter } from 'reactZustateAppModule/ZustateCounter'
import { ReactQueryStarter } from 'reactQueryAppModule/ReactQueryStarter'
import ReactTypeScriptBoardApp from 'reactTypescriptBoard/ReactTypeScriptBoardApp'
//import { vuetifyTailwindBoardMount } from 'vuetifyTailwindBoardApp/vuetifyBootstrap'
//const MyComponent = lazy(() => import('./MyComponent'));

import "./index.css";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            retry: false,
            staleTime: 30000,
        }
    }
})

const App = () => {
  const vueRef = useRef(null)
  const vueNavigationRef = useRef(null)
  const vuetifyRealNaviRef = useRef(null)
  const vuetifyTailwindBoardRef = useRef(null)

  useEffect(() => {
    mount(vueRef.current);
    navigationBarMount(vueNavigationRef.current)
    //realNaviBarMount(vuetifyRealNaviRef.current)
    import('vueRealNaviBarModule/RealNavigation')
      .then((module) => {
        const realNaviBarMount = module.default;
        realNaviBarMount(vuetifyRealNaviRef.current);
      })
      .catch((error) => {
        console.error('Error while loading remote module:', error);
      });
    //vuetifyTailwindBoardMount(vuetifyTailwindBoardRef.current)
    import('vuetifyTailwindBoardApp/vuetifyBootstrap')
      .then((module) => {
        const vuetifyTailwindBoardMount = module.default;
        vuetifyTailwindBoardMount(vuetifyTailwindBoardRef.current);
      })
      .catch((error) => {
        console.error('Error while loading remote module:', error);
      });
  }, []);

  return (
    <div style={{ position: 'relative' }}>
      <div>Name: host-container-app</div>
      <div>Framework: react</div>
      <div>Language: JavaScript</div>
      <div>CSS: Empty CSS</div>

      <h1>나는 React: Vue, React에 대한 Container 역할!</h1>
      <div ref={vueRef} />
      <Counter/>
      <h2>Vue Navigation Bar</h2>
      <div ref={vueNavigationRef} />
      <ZustateCounter/>
      <ReactQueryStarter/>
      <div ref={vuetifyRealNaviRef} />
      <div style={{ position: 'relative' }}>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <ReactTypeScriptBoardApp/>
          </BrowserRouter>
        </QueryClientProvider>
      </div>
      <div ref={vuetifyTailwindBoardRef}/>
    </div>
  );
}
export default App

ReactDOM.render(<App />, document.getElementById("app"));
