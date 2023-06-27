import React, { useRef, useState, useEffect, Suspense } from 'react';
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
// import LegacyCollection from '../backup/LegacyCollection';

// import { Counter } from 'reactModuleApp/Counter';
import VueModuleTestApp from './vueModule/VueModuleTestApp';
import { realNaviBarMount } from 'vueRealNaviBar/RealNavigation'

import Home from '../Home';

import { Button } from '@mui/material';
import VuetifyBoardTestApp from './vuetifyBoard/VuetifyBoardTestApp';

const MainRouters = () => {
    const vueRef = useRef(null)
    const vuetifyRealNaviRef = useRef(null)
    const vuetifyTailwindBoardRef = useRef(null)

    const [naviHeight, setNaviHeight] = useState(0);

    useEffect(() => {
        realNaviBarMount(vuetifyRealNaviRef.current);
    
        const updateNaviHeight = () => {
          const height = vuetifyRealNaviRef.current.offsetHeight;
          setNaviHeight(height);
        };
    
        const observer = new MutationObserver(updateNaviHeight);
        observer.observe(vuetifyRealNaviRef.current, { attributes: true, childList: true, subtree: true });
    
        return () => {
          observer.disconnect();
        };
      }, []);
    
      useEffect(() => {
        console.log('Height of vuetifyRealNaviRef:', naviHeight);
      }, [naviHeight]);

    return (
        <div>
            <Suspense fallback={<div>로딩중 .......</div>}>
                <BrowserRouter>
                    <div>
                        <div style={{ zIndex: 9999, position: 'relative', top: '64px' }}>
                            <Button component={Link} to="/" variant="contained">홈</Button>
                            <Button component={Link} to="/vue-module-app" variant="contained">Vue Module App</Button>
                            <Button component={Link} to="/vuetify-board-app" variant="contained">Vuetify Board App</Button>
                        </div>
                    </div>
                    <Routes>
                        <Route
                            exact path="/"
                            element={<Home naviHeight={naviHeight}/>}
                        />
                        <Route
                            exact path="vue-module-app"
                            element={<VueModuleTestApp vueRef={vueRef} naviHeight={naviHeight}/>}
                        />
                        <Route
                            exact path="/vuetify-board-app"
                            element={<VuetifyBoardTestApp vuetifyTailwindBoardRef={vuetifyTailwindBoardRef} naviHeight={naviHeight}/>}
                        />
                    </Routes>
                </BrowserRouter>
            </Suspense>
            <div ref={vuetifyRealNaviRef} />
        </div>
    );
};

export default MainRouters;