import React, { useState } from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';

import './App.css';

function App() {
    const [currentPage, setCurrentPage] = useState('home');

    let viewingPage;
    if (currentPage === 'home') {
        viewingPage = <HomePage></HomePage>;
    } else if (currentPage === 'contact') {
        viewingPage = <ContactPage></ContactPage>;
    }

    return (
        <>
            <Header></Header>
            <Navbar setCurrentPage={setCurrentPage}></Navbar>
            {viewingPage}
        </>
    );
}

export default App;
