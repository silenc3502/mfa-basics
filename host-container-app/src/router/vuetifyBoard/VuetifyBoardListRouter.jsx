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

                <div ref={vuetifyBoardListRef}/>
    )
}

export default VuetifyBoardListRouter