import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { constSelector, useRecoilValue, useSetRecoilState } from "recoil"
import { isLoginAtom, usersAtom} from "../../Atom/Atom";
import { Feeds } from "../../components/Feeds";
import { TweetForm } from "../../components/TweetForm";

export default function Home() {

  const isUserLoggedIn = useRecoilValue(isLoginAtom);
  const users = useRecoilValue(usersAtom);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isUserLoggedIn) {
      navigate("/signIn");
    }
  });
 

  return (
    <div className="container">
      <h1>Home Page</h1>
      <hr />

      <div>
        <div className="row">
          <div className="col-3 border">
            <h1>SideBar</h1>
          </div>
          <div className="col-6 border">
            <TweetForm />
            <hr />
            <Feeds />
          </div>
          <div className="col-3 border">
            <h1>RightBar</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
