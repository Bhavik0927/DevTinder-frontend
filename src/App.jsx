import Body from './components/Body';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router";
import Login from './components/Login';
import { Provider } from 'react-redux';
import store from './store/store';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Body />}>
            <Route path='/login' element={<Login />} />
          </Route>


        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App;