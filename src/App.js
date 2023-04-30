import SignUp from './pages/SignUp/SignUp';
import { Route, Routes } from "react-router-dom";
import './App.css';
import { useEffect } from 'react';
import Home from './pages/Home/Home';
import SignIn from './pages/SignIn/Sign-In';
import Protected from './components/Protected'
import { fetchTweets } from "./Services/tweets";
import { fetchUsers } from "./Services/users";
import { useSetRecoilState } from "recoil";
import { tweetsAtom, usersAtom } from "./Atom/Atom";

function App() {

  const setTweets = useSetRecoilState(tweetsAtom);
  const setUsers = useSetRecoilState(usersAtom);

  useEffect(() => {
    fetchTweets().then((tweets) => {
      setTweets(tweets);
    });
    fetchUsers().then((users) => {
      setUsers(users);
    });
  }, []);

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
