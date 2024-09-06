import './App.css';
import { Route, Routes } from "react-router-dom";
import { useState } from 'react';

// Importing Homepage component
import Homepage from './components/Homepage/Homepage.jsx';

// Importing semantic components
import Navbar from './components/SemanticComponents/Navbar/Navbar.jsx';
import Footer from './components/SemanticComponents/Footer/Footer.jsx';

// Importing Authentication components
import SignUp from './components/Authentication/SignUp/SignUp.jsx';
import SignIn from './components/Authentication/SignIn/SignIn.jsx';

// Importing error components
import PageNotFound from './components/ErrorComponents/PageNotFound/PageNotFound.jsx';

// Importing Footer components
import About from './components/FooterComponents/About/About.jsx';
import Contact from './components/FooterComponents/Contact/Contact.jsx';

// Importing Items components
import ItemsList from './components/ItemComponents/ItemsList/ItemsList.jsx';

import authenticationServices from './services/authenticationServices.js';

function App() {
  const [user, setUser] = useState(authenticationServices.getUser());
  return (
    <body>
      <Navbar user={user}/>
        <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/signin" element={<SignIn setUser={setUser}/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/user/:userId/item" element={<ItemsList/>}/>
          <Route path="*" element={<PageNotFound/>} />
        </Routes>
      <Footer/>
    </body>
  )
}

export default App
