import React from 'react'
import Typography from '@mui/material/Typography';
import Popover from '@mui/material/Popover';
import {AiOutlineRetweet} from 'react-icons/ai'
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import DriveFileRenameOutlineOutlinedIcon from '@mui/icons-material/DriveFileRenameOutlineOutlined';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import style from "./PopOverRetweet.module.css"
const PopOverRetweet = () => {
    return (
        <PopupState variant="popover" popupId="demo-popup-popover">
            {(popupState) => (
                <div>
                     
                    {/* <button className={style.btn}  
                    {...bindTrigger(popupState)}>
                        <img src={photo} alt="" className={style.photo} /> Shalini Tiwari <MoreHorizOutlinedIcon /></button> */}
             <button className={style.btns}
              {...bindTrigger(popupState)}>
    <AiOutlineRetweet className={style.Retweet}/></button>
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
                        <Typography sx={{ p: 2 }}><AiOutlineRetweet/> Retweet</Typography>
                        <Typography sx={{ p: 2 }}> <DriveFileRenameOutlineOutlinedIcon/>Quote Tweet </Typography>
                    </Popover>
                </div>
            )}
        </PopupState>
    )
}

export default PopOverRetweet