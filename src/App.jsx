import Body from './components/Body';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router";
import Login from './components/Login';
import { Provider } from 'react-redux';
import store from './store/store';
import Feed from './components/Feed';
import Profile from './components/Profile';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Body />}>
            <Route path='/' element={<Feed />}/>
            <Route path='/login' element={<Login />} />
            <Route path='/profile' element={<Profile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App;