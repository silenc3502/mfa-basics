import React, { useRef, useState, useEffect, Suspense } from 'react';
import {MemoryRouter, Route, Routes, Link, BrowserRouter} from "react-router-dom";
// import LegacyCollection from '../backup/LegacyCollection';

import VueModuleTestApp from './vueModule/VueModuleTestApp';
import { realNaviBarMount } from 'vueRealNaviBar/RealNavigation'

import Home from '../Home';

import { Button } from '@mui/material';
import VuetifyBoardTestApp from './vuetifyBoard/VuetifyBoardTestApp';
import ReactCounterTestApp from "./reactModule/ReactCounterTestApp";

import ReactMuiBoardTestApp from "./reactMuiBoard/ReactMuiBoardTestApp";

const MainRouters = () => {
    const vueRef = useRef(null)
    const vuetifyRealNaviRef = useRef(null)
    const vuetifyTailwindBoardRef = useRef(null)

    const [naviHeight, setNaviHeight] = useState(0);
    const buttonRef = useRef(null);

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

    useEffect(() => {
        if (buttonRef.current) {
            const buttonElement = buttonRef.current;
            const computedStyle = getComputedStyle(buttonElement);
            const height = computedStyle.height;

            console.log('Height of Button:', height);
        }
    }, []);

    return (
        <div>
            {vuetifyRealNaviRef.current ? (
            <Suspense fallback={<div>로딩중 .......</div>}>
                <BrowserRouter>
                    <div>
                        <div style={{ position: 'relative', top: '64px' }}>
                            <Button ref={buttonRef} component={Link} to="/" variant="contained">홈</Button>
                            <Button component={Link} to="/vue-module-app" variant="contained">Vue Module App</Button>
                            <Button component={Link} to="/vuetify-board-app" variant="contained">Vuetify Board App</Button>
                            <Button component={Link} to="/react-counter" variant="contained">React Counter App</Button>
                            <Button component={Link} to="/react-mui-board-app" variant="contained">React MUI Board App</Button>
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
                        <Route
                            exact path="/react-counter"
                            element={<ReactCounterTestApp naviHeight={naviHeight}/>}
                        />
                    </Routes>
                    <ReactMuiBoardTestApp naviHeight={naviHeight}/>
                </BrowserRouter>
            </Suspense>
            ) : null}
            <div ref={vuetifyRealNaviRef} />
        </div>
    );
};

export default MainRouters;