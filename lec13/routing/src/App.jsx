import React from 'react'
import {BrowserRouter, Route, Routes, Link, useParams} from 'react-router-dom'
function App() {
  return (
    <div>
      {/* <Home></Home>
      <About></About>
      <Contact></Contact> */}
  
      <BrowserRouter>
      <header>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </header>
      <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/about' element={<About></About>}></Route>
      <Route path='/contact' element={<Contact></Contact>}></Route>
      <Route path='/profile/:name' element={<Profile></Profile>}></Route>
      <Route path='*' element={<h1>404 Not Found</h1>}></Route>
      </Routes>
</BrowserRouter>
    </div>
  )
}
function Profile() {
  let {name} = useParams();
  return (
    <div>
      <h1>Profile page of {name}</h1>
    </div>
  )
}

function Home() {
  return (
    <div>
      <h1>home</h1>
    </div>
  )
}
function About() {
  return (
    <div>
      <h1>About</h1>
    </div>
  )
}
function Contact() {
  return (
    <div>
      <h1>Contact</h1>
    </div>
  )
}
function PageNotFound() {
  return (
    <div>
      <h1>page not Found</h1>
    </div>
  )
}


export default App