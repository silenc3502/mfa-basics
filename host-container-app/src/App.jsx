import React, { useEffect, useRef } from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes, Link} from 'react-router-dom'
import { QueryClient, QueryClientProvider } from "react-query";

import { mount } from 'vueModuleApp/Sample';
import { Counter } from 'reactModuleApp/Counter';
import { navigationBarMount } from 'vueNavigationPageModule/NavigationBarPage'
import { realNaviBarMount } from 'vueRealNaviBarModule/RealNavigation'
import { TodoApp } from 'reactZustandStateModule/TodoApp'
import { ZustateCounter } from 'reactZustateAppModule/ZustateCounter'
import { ReactQueryStarter } from 'reactQueryAppModule/ReactQueryStarter'
import ReactTypeScriptBoardApp from 'reactTypescriptBoard/ReactTypeScriptBoardApp'
import { vuetifyTailwindBoardMount } from 'vuetifyTailwindBoardApp/vuetifyBootstrap'

import "./index.css";
//import VuetifyBoardRemotesRouter from "./VuetifyBoardRemotesRouter";

const VuetifyTailwindBoardComponent = ({ vuetifyTailwindBoardRef }) => {
    useEffect(() => {
        vuetifyTailwindBoardMount(vuetifyTailwindBoardRef.current);
    }, []);

    return <div ref={vuetifyTailwindBoardRef} />;
};

const VuetifyTailwindBoardContainer = ({ vuetifyTailwindBoardRef }) => {
    return (
        <Route path="/vuetify-tailwind-board">
            <VuetifyTailwindBoardComponent vuetifyTailwindBoardRef={vuetifyTailwindBoardRef} />
        </Route>
    );
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
                {/* 다른 경로에 대한 라우트 설정 */}
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

const App = () => {
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

      {/*<VuetifyBoardRemotesRouter/>*/}
      <RouterComponent vuetifyTailwindBoardRef={vuetifyTailwindBoardRef} />

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
