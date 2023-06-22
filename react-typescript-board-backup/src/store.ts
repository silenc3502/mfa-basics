import create from 'zustand';

interface StoreState {
    posts: number[];
    addPost: (postId: number) => void;
}

export const useStore = create<StoreState>((set) => ({
    posts: [],
    addPost: (postId: number) => set(state => ({ posts: [...state.posts, postId] })),
}));
