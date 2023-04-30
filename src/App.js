import SignUp from './pages/SignUp/SignUp';
import { Route, Routes } from "react-router-dom";
import './App.css';
import Home from './pages/Home/Home';
import SignIn from './pages/SignIn/Sign-In';
import Protected from './components/Protected'

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Protected Component = {Home} />} />
      {/* <Route path="/" element={<Home />} /> */}
      <Route path="/signUp" element={<SignUp />} />
      <Route path="/signIn" element={<SignIn />} />
      <Route path="/*" element={<h1>404: Page Not found</h1>} />
      </Routes>

    </div>
  );
}

export default App;
