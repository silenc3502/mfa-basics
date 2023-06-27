import React, { useEffect } from 'react'

// import { vuetifyTailwindBoardMount } from 'vuetifyTailwindBoardApp/vuetifyBootstrap'

const VuetifyBoardTestApp = ({ vuetifyTailwindBoardRef, naviHeight }) => {
    // useEffect(() => {
    //     vuetifyTailwindBoardMount(vuetifyTailwindBoardRef.current);
    // }, []);

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
            Vuetify 끼리 충돌남
        </div>
    </div>
  )
}

export default VuetifyBoardTestApp