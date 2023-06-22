import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

import "./index.scss";
import BoardListPage from "./components/BoardListPage";

const App: React.FC = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <div>Name: react-typescript-board</div>
    <div>Framework: react</div>
    <div>Language: TypeScript</div>
    <div>CSS: Tailwind</div>

    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <div className="max-w-md mx-auto p-4">
          <h1 className="text-2xl font-bold mb-4">게시판</h1>
          <Link to="/" className="text-blue-500 underline mb-4 block">
            홈
          </Link>

          <Routes>
            <Route exact path="/" component={BoardListPage} />
            {/*<Route path="/posts/:postId" component={PostDetails} />*/}
          </Routes>
        </div>
      </BrowserRouter>
    </QueryClientProvider>
  </div>
);

export { App }
