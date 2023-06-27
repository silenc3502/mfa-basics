import React, { useEffect } from 'react'
// import ReactTypeScriptBoardApp from 'reactTypescriptBoard/ReactTypeScriptBoardApp'
import { QueryClient, QueryClientProvider } from "react-query";
import {BrowserRouter, Route, Routes} from "react-router-dom";

import BoardReadPage from 'reactTypescriptBoard/BoardReadPage'
import BoardListPage from 'reactTypescriptBoard/BoardListPage'
import BoardRegisterPage from 'reactTypescriptBoard/BoardRegisterPage'
import BoardModifyPage from 'reactTypescriptBoard/BoardModifyPage'

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            retry: false,
            staleTime: 30000,
        }
    }
})

const ReactMuiBoardTestApp = ({ naviHeight }) => {

    useEffect(() => {
        const contentWrapper = document.getElementById('content-wrapper');
        if (contentWrapper && naviHeight) {
            const marginTop = (naviHeight + 20) + 'px';
            contentWrapper.style.marginTop = marginTop;
        }
    }, [naviHeight]);

    return (
        <div>
            <div id="content-wrapper">
                <QueryClientProvider client={queryClient}>
                    <Routes>
                        <Route path="/react-mui-board-app" element={<BoardListPage />} />
                        <Route path="/react-mui-board-app/register" element={<BoardRegisterPage />} />
                        <Route path="/react-mui-board-app/read/:boardId" element={<BoardReadPage />} />
                        <Route path="/react-mui-board-app/modify/:boardId" element={<BoardModifyPage />} />
                    </Routes>
                </QueryClientProvider>
            </div>
        </div>
    )
}

export default ReactMuiBoardTestApp