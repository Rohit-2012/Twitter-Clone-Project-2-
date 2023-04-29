



import React from 'react'
import Typography from '@mui/material/Typography';
import Popover from '@mui/material/Popover';
import  profile from '../../Assets/profile.png';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import style from "./PopOver.module.css"
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined'; 
import { isLoginAtom} from '../../Recoil/Atoms';
import {useRecoilState} from "recoil"
import { useNavigate } from 'react-router-dom';
const PopOver = () => {
    const tologin=useNavigate()
    const [loginStatus,setLoginStatus] = useRecoilState(isLoginAtom)
    function Loggedout(){
        
        setLoginStatus(false)
        tologin("/")
    }
     
    return (
        <PopupState variant="popover" popupId="demo-popup-popover">
            {(popupState) => (
                <div>
                     
                     <button className={style.btn}  
                     {...bindTrigger(popupState)}>
                       <img src={profile} alt="" className={style.profile} /> Satyadeep Raj<MoreHorizOutlinedIcon /></button>
                          <Popover
                        {...bindPopover(popupState)}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'center',
                        }}
                        transformOrigin={{
                            vertical: 'bottom',
                            horizontal: 'center',
                        }}
                    >
                        <Typography sx={{ p: 2 }}>Add an existing account</Typography>
                        <Typography sx={{ p: 2 }} onClick={Loggedout}>Log out </Typography>
                    </Popover>
                </div>
            )}
        </PopupState>
    )
}

export default PopOver