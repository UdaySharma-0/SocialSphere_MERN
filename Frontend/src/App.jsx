import PostList from "./components/PostList";
import React from "react"
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import CreatePost from "./pages/CreatePost";
import Feed from "./pages/Feed";

const App = ()=>{
  return (
  <Router>
    <Routes>
      <Route path="/" element={ <Feed /> }></Route>
      <Route path="/create-post" element={ <CreatePost /> }/>
      <Route path="/about" element={<h1>About Us</h1>}></Route>
      <Route path="/feed" element={ <Feed /> }/>
    </Routes>
  </Router>
  )
}

export default App;