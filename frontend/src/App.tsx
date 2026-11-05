import { Routes, Route } from "react-router-dom"
import News from "./News/News"
import Home from "./Home/Home"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/news" element={<News />}/>
      </Routes>
    </>
  )
}

export default App
