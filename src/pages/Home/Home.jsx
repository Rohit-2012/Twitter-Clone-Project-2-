import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useRecoilValue } from "recoil"
import { isLoginAtom } from "../../Atom/Atom";

export default function Home() {
  const isUserLoggedIn = useRecoilValue(isLoginAtom);
    const navigate = useNavigate();
    
    useEffect(() => {
        if (!isUserLoggedIn) {
          navigate("/signIn");
        }
      });

    return(
        <div>
            <h1>WELCOME TO TWITTER</h1>
        </div>
    )
}
