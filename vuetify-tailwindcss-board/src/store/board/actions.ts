import { ActionContext } from 'vuex';
import { BoardState, Board } from './states';
import {
    REQUEST_BOARD_LIST_TO_SPRING,
    REQUEST_BOARD_TO_SPRING,
} from './mutation-types';
import axiosInst from '../../utility/axiosInstance';
import { AxiosResponse } from "axios";

export type BoardActions = {
    requestBoardListToSpring(context: ActionContext<BoardState, any>): void;
    requestCreateBoardToSpring(context: ActionContext<BoardState, unknown>, payload: {
        title: string;
        content: string;
        writer: string;
    }): Promise<AxiosResponse>;
    requestBoardToSpring(context: ActionContext<BoardState, any>, boardId: number): void;
    requestDeleteBoardToSpring(context: ActionContext<BoardState, any>, boardId: number): Promise<void>;
    requestBoardModifyToSpring(context: ActionContext<BoardState, any>, payload: {
        title: string;
        content: string;
        boardId: number;
        writer: string;
    }): Promise<void>;
};

const actions: BoardActions = {
    async requestBoardListToSpring(context: ActionContext<BoardState, any>): Promise<void> {
        try {
            const res: AxiosResponse<any, any> = await axiosInst.springAxiosInst.get('/jpa-board/list');
            const data: Board[] = res.data
            console.log('res: ', res)
            context.commit(REQUEST_BOARD_LIST_TO_SPRING, data);
        } catch (error) {
            console.error(error);
        }
    },
    async requestCreateBoardToSpring(context: ActionContext<BoardState, any>, payload: { title: string, content: string, writer: string }): Promise<AxiosResponse<any, any>> {
        const { title, content, writer } = payload;

        try {
            const res: AxiosResponse = await axiosInst.springAxiosInst.post('/jpa-board/register', { title, content, writer });
            console.log('res: ', res.data)
            alert('게시물 등록 성공!');
            return res.data;
        } catch (error) {
            alert('문제 발생!');
            throw error;
        }
    },
    async requestBoardToSpring(context: ActionContext<BoardState, any>, boardId: number): Promise<void> {
        try {
            const res: AxiosResponse<Board> = await axiosInst.springAxiosInst.get(`/jpa-board/${boardId}`);
            context.commit(REQUEST_BOARD_TO_SPRING, res.data);
        } catch (error) {
            console.error(error);
        }
    },
    async requestDeleteBoardToSpring(context: ActionContext<BoardState, any>, boardId: number): Promise<void> {
        try {
            await axiosInst.springAxiosInst.delete(`/jpa-board/${boardId}`);
            alert('삭제 성공!');
        } catch (error) {
            alert('문제 발생!');
            throw error;
        }
    },
    async requestBoardModifyToSpring(context: ActionContext<BoardState, any>, payload: { title: string, content: string, boardId: number, writer: string }): Promise<void> {
        const { title, content, boardId, writer } = payload;

        console.log("title: " + title + ", content: " + content + ", writer: " + writer + ", boardId: " + boardId);

        try {
            await axiosInst.springAxiosInst.put(`/jpa-board/${boardId}`, { title, content, writer });
            alert("수정 성공!");
        } catch (error) {
            alert('문제 발생!');
            throw error;
        }
    },
};

export default actions;