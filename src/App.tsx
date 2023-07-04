import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landing from "./pages/Landing"
import Template from './pages/Template';
import SongPage from './pages/SongPage';
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/songlist' element={<Template />} />
          <Route path='/songlist/:id' element={<SongPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
