import React, { useEffect, useRef } from 'react'
import {Route, Routes} from "react-router-dom";

// import { vuetifyTailwindBoardMount } from 'vuetifyTailwindBoardApp/vuetifyBootstrap'
// import { boardListBootstrapMount } from 'vuetifyTailwindBoardApp/boardListBootstrap';
// import { boardRegisterBootstrapMount } from 'vuetifyTailwindBoardApp/boardRegisterBootstrap';

const VuetifyBoardTestApp = ({ vuetifyTailwindBoardRef, naviHeight }) => {
    // const [isLoaded, setIsLoaded] = useState(false);
    //
    // // useEffect(() => {
    // //     vuetifyTailwindBoardMount(vuetifyTailwindBoardRef.current);
    // // }, [vuetifyTailwindBoardRef]);
    //
    useEffect(() => {
        const loadRemoteComponent = async () => {
            const { vuetifyTailwindBoardMount } = await import('vuetifyTailwindBoardApp/vuetifyBootstrap');
            vuetifyTailwindBoardMount(vuetifyTailwindBoardRef.current);
        };

        loadRemoteComponent();
    }, [vuetifyTailwindBoardRef]);
    //
    // useEffect(() => {
    //     const contentWrapper = document.getElementById('content-wrapper');
    //     if (contentWrapper && naviHeight) {
    //       const marginTop = naviHeight + 'px';
    //       contentWrapper.style.marginTop = marginTop;
    //     }
    //   }, [naviHeight]);

    // useEffect(() => {
    //     const loadRemoteComponent = async () => {
    //         const { boardListBootstrapMount } = await import('vuetifyTailwindBoardApp/boardListBootstrap');
    //         boardListBootstrapMount(vuetifyTailwindBoardRef.current);
    //     };
    //
    //     loadRemoteComponent();
    // }, [vuetifyTailwindBoardRef]);

    const vuetifyBoardListRef = useRef(null)
    const vuetifyBoardRegisterRef = useRef(null)

    // useEffect(() => {
    //     const loadRemoteComponent = async () => {
    //         const { boardListBootstrapMount } = await import('vuetifyTailwindBoardApp/boardListBootstrap');
    //         boardListBootstrapMount(vuetifyBoardListRef.current);
    //
    //         console.log(vuetifyBoardListRef.current)
    //     };
    //
    //     loadRemoteComponent();
    // }, [vuetifyBoardListRef.current]);

    // useEffect(() => {
    //     if (vuetifyBoardListRef.current) {
    //         boardListBootstrapMount(vuetifyBoardListRef.current);
    //     }
    // }, []);

    // useEffect(() => {
    //     if (vuetifyBoardRegisterRef.current) {
    //         boardRegisterBootstrapMount(vuetifyBoardRegisterRef.current);
    //     }
    // }, []);
    //
    // useEffect(() => {
    //     const loadRemoteComponent = async () => {
    //         const { boardListBootstrapMount } = await import('vuetifyTailwindBoardApp/boardListBootstrap')
    //         boardListBootstrapMount(vuetifyBoardListRef.current)
    //     }
    //
    //     loadRemoteComponent()
    // }, [vuetifyBoardListRef])


    return (
        <div>
            <div id="content-wrapper">
                <div ref={vuetifyTailwindBoardRef}/>
                {/*<Routes>*/}
                {/*    <Route path="/vuetify-board-app" element={<div ref={vuetifyBoardListRef} />} />*/}
                {/*    <Route path="/vuetify-board-app/register" element={<div ref={vuetifyBoardRegisterRef} />} />*/}
                {/*    /!*<Route path="/react-mui-board-app/read/:boardId" element={<BoardReadPage />} />*!/*/}
                {/*    /!*<Route path="/react-mui-board-app/modify/:boardId" element={<BoardModifyPage />} />*!/*/}
                {/*</Routes>*/}
            </div>
        </div>
    )
}

export default VuetifyBoardTestApp