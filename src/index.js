import React from 'react';
import ReactDOM from 'react-dom/client';
import WebLayout from './layout';
// Import các chức năng cần thiết để sử dụng
import { BrowserRouter, Routes, Route } from 'react-router-dom';
export default function HomePage() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WebLayout />}>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HomePage />);


