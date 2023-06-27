import React, { useEffect, useState } from 'react'

// import { vuetifyTailwindBoardMount } from 'vuetifyTailwindBoardApp/vuetifyBootstrap'

const VuetifyBoardTestApp = ({ vuetifyTailwindBoardRef, naviHeight }) => {
    const [isLoaded, setIsLoaded] = useState(false);

    // useEffect(() => {
    //     vuetifyTailwindBoardMount(vuetifyTailwindBoardRef.current);
    // }, [vuetifyTailwindBoardRef]);

    useEffect(() => {
        const loadRemoteComponent = async () => {
            const { vuetifyTailwindBoardMount } = await import('vuetifyTailwindBoardApp/vuetifyBootstrap');
            vuetifyTailwindBoardMount(vuetifyTailwindBoardRef.current);
        };

        loadRemoteComponent();
    }, [vuetifyTailwindBoardRef]);

    useEffect(() => {
        const contentWrapper = document.getElementById('content-wrapper');
        if (contentWrapper && naviHeight) {
          const marginTop = naviHeight + 'px';
          contentWrapper.style.marginTop = marginTop;
        }
      }, [naviHeight]);

  return (
    <div>
        <div id="content-wrapper">
            <div ref={vuetifyTailwindBoardRef}/>
        </div>
    </div>
  )
}

export default VuetifyBoardTestApp