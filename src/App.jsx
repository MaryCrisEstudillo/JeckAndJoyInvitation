import './App.css'
import FlipCard from "./flipCard"
import CardPage from './cardPage';
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  //   const renderPage = () => {
  //   const currentPath = window.location.pathname;
  //         if (currentPath === '/JeckAndJoyInvitation/mainPage') {
  //     return <CardPage/>;
  //   }
  //   return <FlipCard/>
  // };
  return (
    //     <div>
    //   {renderPage()}
    // </div>
    <BrowserRouter>
    <Routes>
    <Route path="/JeckAndJoyInvitation/" element={<FlipCard />} />
    <Route path="/JeckAndJoyInvitation/mainPage" element={<CardPage/>} />
    </Routes>
  </BrowserRouter>
  )
}

export default App
