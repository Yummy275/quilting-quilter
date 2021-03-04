import Header from './components/Header';
import Navbar from './components/Navbar';
import HomeBillBoard from './components/HomeBillBoard';
import img from './imgs/home-fabrics.jpg';
import imgg from './imgs/home-notions.jpg';

import './App.css';

function App() {
    return (
        <>
            <Header></Header>
            <Navbar></Navbar>
            <HomeBillBoard bg={img} string="Fabrics"></HomeBillBoard>
            <HomeBillBoard bg={imgg} string="Notions"></HomeBillBoard>
        </>
    );
}

export default App;
