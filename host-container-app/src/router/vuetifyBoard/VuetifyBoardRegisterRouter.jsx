import React, { useEffect, useRef } from 'react'
import {Route, Routes} from "react-router-dom";

// import { vuetifyTailwindBoardMount } from 'vuetifyTailwindBoardApp/vuetifyBootstrap'
// import { boardListBootstrapMount } from 'vuetifyTailwindBoardApp/boardListBootstrap';
// import { boardRegisterBootstrapMount } from 'vuetifyTailwindBoardApp/boardRegisterBootstrap';

// { vuetifyTailwindBoardRef, naviHeight }
const VuetifyBoardRegisterRouter = () => {
    const vuetifyBoardRegisterRef = useRef(null)

    useEffect(() => {
        const loadRemoteComponent = async () => {
            const { boardRegisterBootstrapMount } = await import('vuetifyTailwindBoardApp/boardRegisterBootstrap')
            boardRegisterBootstrapMount(vuetifyBoardRegisterRef.current)
        }

        loadRemoteComponent()
    }, [vuetifyBoardRegisterRef])


    return (
        <div>
            <div id="content-wrapper">
                <div ref={vuetifyBoardRegisterRef}/>
            </div>
        </div>
    )
}

export default VuetifyBoardRegisterRouter