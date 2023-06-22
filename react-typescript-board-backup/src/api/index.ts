import axios from 'axios';

interface Post {
    id: number;
    title: string;
}

export const getPosts = async (): Promise<Post[]> => {
    try {
        const response = await axios.get('http://localhost:7777/jpa-board/list');
        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch posts');
    }
};
