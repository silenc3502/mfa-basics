import React, {useEffect, useRef} from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom";

import { vuetifyTailwindBoardMount } from 'vuetifyTailwindBoardApp/vuetifyBootstrap'

const VuetifyBoardRemotesRouter = () => {
    const vuetifyTailwindBoardRef = useRef(null)

    useEffect(() => {
        vuetifyTailwindBoardMount(vuetifyTailwindBoardRef.current)
    }, []);

    return (
        <BrowserRouter>
            <Routes>
                {/* 다른 경로와 매칭될 때 해당 컴포넌트를 렌더링 */}
                <Route path="/vuetify-tailwind-board" render={() => <div ref={vuetifyTailwindBoardRef} />} />
                {/* 기본 경로인 "/"에 대한 컴포넌트를 렌더링 */}
                <Route exact path="/" render={() => <div>홈 페이지</div>} />
            </Routes>
        </BrowserRouter>
    )
};

export default VuetifyBoardRemotesRouter;