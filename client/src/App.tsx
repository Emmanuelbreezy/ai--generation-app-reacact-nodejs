import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import { logo } from "./assets";
import { Home, CreatePost } from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <header
        className="w-full 
       bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]"
      >
        <div className="max-w-7xl flex justify-between items-center mx-auto">
          <Link to="/">
            <h2 className="text-3xl font-extrabold text-zinc-800">
              Gen-<span className="text-[#6469ff]">AI</span>
            </h2>
          </Link>
          <Link
            to="/create-post"
            className="font-inter font-medium bg-[#6469ff]
            text-white px-4 py-2 rounded-md"
          >
            Create
          </Link>
        </div>
      </header>
      <main className="sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-post" element={<CreatePost />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
