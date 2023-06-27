import React, { useEffect, useRef } from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes, Link} from 'react-router-dom'
import MainRouters from './router/MainRouter';

const App = () => {
  return (
    <div>
      <MainRouters/>
    </div>
  );
}
export default App

ReactDOM.render(<App />, document.getElementById("app"));
