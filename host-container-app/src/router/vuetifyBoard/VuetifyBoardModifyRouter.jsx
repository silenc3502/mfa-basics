import React, { useEffect, useRef } from 'react'
import {useParams} from "react-router-dom";

const VuetifyBoardModifyRouter = () => {
    const { boardId } = useParams();
    const vuetifyBoardModifyRef = useRef(null)

    console.log('vuetifyBoardModifyRef - boardId: ' + boardId)

    useEffect(() => {
        const loadRemoteComponent = async () => {
            const { modifyBootstrapMount } = 
                await import('vuetifyTailwindBoardApp/otherModifyBootstrap')
            
            modifyBootstrapMount(vuetifyBoardModifyRef.current, boardId)
        }

        loadRemoteComponent()
    }, [vuetifyBoardModifyRef, boardId])


    return (
        <div>
            <div id="content-wrapper">
                <div ref={vuetifyBoardModifyRef}/>
            </div>
        </div>
    )
}

export default VuetifyBoardModifyRouter