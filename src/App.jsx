import Body from './components/Body';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router";
import Contact from './components/Contact';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Body />}>
          <Route path='/contact' element={<Contact />} />
        </Route>


      </Routes>
    </BrowserRouter>
  )
}

export default App;