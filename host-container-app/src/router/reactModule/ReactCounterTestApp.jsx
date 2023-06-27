import React, { useEffect } from 'react'
import { Counter } from 'reactModuleApp/Counter';

const ReactCounterTestApp = ({ naviHeight }) => {

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
                <Counter/>
            </div>
        </div>
    )
}

export default ReactCounterTestApp