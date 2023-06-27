import React, { useEffect } from 'react'
import { mount } from 'vueModuleApp/Sample';

const VueModuleTestApp = ({ vueRef, naviHeight }) => {
    useEffect(() => {
        mount(vueRef.current);
    }, []);

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
                <div ref={vueRef}/>
            </div>
        </div>
      )
}

export default VueModuleTestApp