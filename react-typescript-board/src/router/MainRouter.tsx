import React, { Suspense } from 'react';
import { Route, Routes, Navigate } from "react-router-dom";

import LazyLoad from './LazyLoad';
import BoardListPage from '../domain/board/page/BoardListPage';
import BoardRegisterPage from "../domain/board/page/BoardRegisterPage";
import BoardReadPage from "../domain/board/page/BoardReadPage";
import BoardModifyPage from '../domain/board/page/BoardModifyPage';

const MainRouters = () => {
    return (
        <>
            <Suspense fallback={<LazyLoad/>}>
                <Routes>
                    <Route path="/" element={<Navigate to="/react-mui-board-app" replace />} />
                    {/* 게시판 리스트 */}
                    <Route path="/react-mui-board-app" element={<BoardListPage />} />
                    {/* 게시판 등록 페이지 */}
                    <Route path="/react-mui-board-app/register" element={<BoardRegisterPage />} />
                    {/* 게시판 상세 페이지 */}
                    <Route path="/react-mui-board-app/read/:boardId" element={<BoardReadPage />} />
                    {/* 게시판 수정 페이지 */}
                    <Route path="/react-mui-board-app/modify/:boardId" element={<BoardModifyPage />} />
                </Routes>
            </Suspense>
        </>
    );
};

export default MainRouters;