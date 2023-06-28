import React, { useEffect, useRef } from 'react'

const VuetifyBoardListRouter = () => {
    const vuetifyBoardListRef = useRef(null)

    useEffect(() => {
        const loadRemoteComponent = async () => {
            const { boardListBootstrapMount } = await import('vuetifyTailwindBoardApp/boardListBootstrap')
            boardListBootstrapMount(vuetifyBoardListRef.current)
        }

        loadRemoteComponent()
    }, [vuetifyBoardListRef])


    return (
        <div>
            <div id="content-wrapper">
                <div ref={vuetifyBoardListRef}/>
            </div>
        </div>
    )
}

export default VuetifyBoardListRouter