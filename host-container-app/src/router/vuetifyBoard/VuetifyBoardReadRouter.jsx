import React, { useEffect, useRef } from 'react'
import {useParams} from "react-router-dom";

const VuetifyBoardReadRouter = () => {
    const { boardId } = useParams();
    const vuetifyBoardReadRef = useRef(null)

    console.log('VuetifyBoardReadRouter - boardId: ' + boardId)

    useEffect(() => {
        const loadRemoteComponent = async () => {
            const { boardReadBootstrapMount } = await import('vuetifyTailwindBoardApp/boardReadBootstrap')
            boardReadBootstrapMount(vuetifyBoardReadRef.current, boardId)
        }

        loadRemoteComponent()
    }, [vuetifyBoardReadRef, boardId])


    return (
        <div>
            <div id="content-wrapper">
                <div ref={vuetifyBoardReadRef}/>
            </div>
        </div>
    )
}

export default VuetifyBoardReadRouter