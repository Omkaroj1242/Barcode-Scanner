import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Barcode from './Barcode';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Barcode />
    </>
  )
}

export default App
