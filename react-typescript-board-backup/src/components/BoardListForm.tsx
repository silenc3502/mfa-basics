import React from 'react';

interface BoardListFormProps {
    onAddPost: () => void;
}

const BoardListForm: React.FC<BoardListFormProps> = ({ onAddPost }) => {
    const handleAddPost = () => {
        onAddPost();
    };

    return (
        <div>
            <button
                className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
                onClick={handleAddPost}
            >
                게시물 추가
            </button>
        </div>
    );
};

export default BoardListForm;
