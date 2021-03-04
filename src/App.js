import React, { useState } from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import SuppliesPage from './pages/SuppliesPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';

import './App.css';

function App() {
    const [currentPage, setCurrentPage] = useState('home');

    let viewingPage;
    if (currentPage === 'home') {
        viewingPage = <HomePage></HomePage>;
    } else if (currentPage === 'contact') {
        viewingPage = <ContactPage></ContactPage>;
    } else if (currentPage === 'supplies') {
        viewingPage = <SuppliesPage></SuppliesPage>;
    } else if (currentPage === 'services') {
        viewingPage = <ServicesPage></ServicesPage>;
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
