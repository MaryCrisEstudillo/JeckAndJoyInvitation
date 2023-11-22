import './App.css'
import FlipCard from "./flipCard"
import CardPage from './cardPage';
import './index.css'
import { HashRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <HashRouter>
    <Routes>
    <Route path="/" element={<FlipCard />} />
    <Route path="mainPage" element={<CardPage/>} />
    </Routes>
  </HashRouter>
  )
}

export default App
