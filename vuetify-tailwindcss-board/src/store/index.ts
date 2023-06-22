import { createStore, Store } from 'vuex';
import { InjectionKey } from 'vue';

import boardModule from './board/boardModule';

import { BoardState } from './board/states';
import { BoardActions } from './board/actions';
import { BoardMutations } from './board/mutations';

// State 타입 정의
export interface RootState {
    // RootState에 필요한 상태 정의
}

// Vuex Store 타입 정의
export type AppStore = Store<RootState> & {
    getters: {
        boardModule: BoardState;
    };
    commit<K extends keyof BoardMutations>(
        key: K,
        payload: Parameters<BoardMutations[K]>[1]
    ): ReturnType<BoardMutations[K]>;
    dispatch<K extends keyof BoardActions>(
        key: K,
        payload?: Parameters<BoardActions[K]>[1]
    ): ReturnType<BoardActions[K]>;
};

// InjectionKey 생성
export const storeKey: InjectionKey<AppStore> = Symbol('AppStore');

// Vuex Store 생성
export default createStore<RootState>({
    modules: {
        boardModule,
    },
});

export { boardModule };