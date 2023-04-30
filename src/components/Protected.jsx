import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useRecoilValue } from "recoil"
import { isLoginAtom } from "../Atom/Atom";

function Protected({Component}){
    const isUserLoggedIn = useRecoilValue(isLoginAtom);
    const navigate = useNavigate();
    
    useEffect(() => {
        if (isUserLoggedIn === false) {
          navigate("/signIn");
        }
      });

    return(
        <div>
            <Component/>
        </div>
    )
}

export default Protected