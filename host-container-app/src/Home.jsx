import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

const Home = ({ naviHeight }) => {
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
        안녕
        </div>
    </div>
  )
}

export default Home