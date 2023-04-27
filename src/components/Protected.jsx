import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

function Protected({Component}){
    const navigate = useNavigate()
    useEffect(()=>{
        let loggedIn = localStorage.getItem('loggedIn')
        if(!loggedIn){
            navigate('/signIn')
        }
    })
    return(
        <div>
            <Component/>
        </div>
    )
}

export default Protected