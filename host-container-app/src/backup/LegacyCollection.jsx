import React, { useEffect, useRef } from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes, Link} from 'react-router-dom'
import { QueryClient, QueryClientProvider } from "react-query";

import { mount } from 'vueModuleApp/Sample';
import { Counter } from 'reactModuleApp/Counter';
import { navigationBarMount } from 'vueNavigationPageModule/FailNaviBarPage'
import { realNaviBarMount } from 'vueRealNaviBar/RealNavigation'
import { TodoApp } from 'reactZustandStateModule/TodoApp'
import { ZustateCounter } from 'reactZustateAppModule/ZustateCounter'
import { ReactQueryStarter } from 'reactQueryAppModule/ReactQueryStarter'
import ReactTypeScriptBoardApp from 'reactTypescriptBoard/ReactTypeScriptBoardApp'
import { vuetifyTailwindBoardMount } from 'vuetifyTailwindBoardApp/vuetifyBootstrap'

import "../index.css";

const VuetifyTailwindBoardComponent = ({ vuetifyTailwindBoardRef }) => {
    useEffect(() => {
        vuetifyTailwindBoardMount(vuetifyTailwindBoardRef.current);
    }, []);

    return <div ref={vuetifyTailwindBoardRef} />;
};

const RouterComponent = ({ vuetifyTailwindBoardRef }) => {
    return (
        <BrowserRouter>
            <div>
                <Link to="/">홈</Link>
                <Link to="/vuetify-tailwind-board">Vu3 Vuetify3 게시판</Link>
            </div>
            <Routes>

                <Route
                    path="/vuetify-tailwind-board"
                    element={<VuetifyTailwindBoardComponent vuetifyTailwindBoardRef={vuetifyTailwindBoardRef} />}
                />
            </Routes>
        </BrowserRouter>
    );
};

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            retry: false,
            staleTime: 30000,
        }
    }
})

const LegacyCollection = () => {
    const vueRef = useRef(null)
    const vueNavigationRef = useRef(null)
    const vuetifyRealNaviRef = useRef(null)
    const vuetifyTailwindBoardRef = useRef(null)
  
    useEffect(() => {
      mount(vueRef.current);
      navigationBarMount(vueNavigationRef.current)
      realNaviBarMount(vuetifyRealNaviRef.current)
      vuetifyTailwindBoardMount(vuetifyTailwindBoardRef.current)
    }, []);
  
    return (
        <div style={{ position: 'relative' }}>
          <div>Name: host-container-app</div>
          <div>Framework: react</div>
          <div>Language: JavaScript</div>
          <div>CSS: Empty CSS</div>
  
          {/* <RouterComponent vuetifyTailwindBoardRef={vuetifyTailwindBoardRef} /> */}
  
          <h1>나는 React: Vue, React에 대한 Container 역할!</h1>
          <div ref={vueRef} />
          <Counter/>
          <h2>Vue Navigation Bar</h2>
          <div ref={vueNavigationRef} />
          <ZustateCounter/>
          <ReactQueryStarter/>
          
          {/* <div style={{ position: 'relative' }}>
            <QueryClientProvider client={queryClient}>
              <BrowserRouter>
                <ReactTypeScriptBoardApp/>
              </BrowserRouter>
            </QueryClientProvider>
          </div> */}
          <div ref={vuetifyTailwindBoardRef}/>
          <div ref={vuetifyRealNaviRef} />
        </div>
    );
}

export default LegacyCollection