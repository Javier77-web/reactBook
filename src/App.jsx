import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BookList from "./components/BookList.jsx";
import BookForm from "./components/BookForm.jsx";
import './css/global.css'
function App() {
  return (
    <Router>
      <div>
        <h1>Book Management System</h1>
        <Routes>
          <Route path="/" element={<BookList />} />
          <Route path="/add" element={<BookForm />} />
          <Route path="/edit/:id" element={<BookForm />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
