import React from 'react';
import ReactDOM from 'react-dom/client';
import WebLayout from './layout';
// Import các chức năng cần thiết để sử dụng
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import KhoaHoc from './khoahoc';
import MainPage from './mainpage';
export default function HomePage() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WebLayout />}>
            <Route index element={<MainPage />}></Route>
            <Route path="khoahoc" element={<KhoaHoc />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HomePage />);


