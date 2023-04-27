import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import style from "./LeftSection.module.css";
import profile from "../../Assets/profile.png";
import Buttons from "../../Components/Buttons/Buttons";
import TagSharpIcon from "@mui/icons-material/TagSharp";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import FeaturedPlayListOutlinedIcon from "@mui/icons-material/FeaturedPlayListOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";


import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import { useState } from "react";
// import PopOver from "../../Atom/PopOver/PopOver";
// import { tweetDataAtom } from "../../Recoil/atom";
import { useRecoilState } from "recoil";

const arrs = [
  { icon: <HomeIcon style={{ fontSize: "28px" }} />, text: "Home" },
  { icon: <TagSharpIcon style={{ fontSize: "28px" }} />, text: "Explore" },
  {
    icon: <NotificationsNoneOutlinedIcon style={{ fontSize: "28px" }} />,
    text: "Notification",
  },
  { icon: <EmailOutlinedIcon style={{ fontSize: "28px" }} />, text: "Message" },
  {
    icon: <BookmarkBorderOutlinedIcon style={{ fontSize: "28px" }} />,
    text: "Bookmark",
  },
  {
    icon: <FeaturedPlayListOutlinedIcon style={{ fontSize: "28px" }} />,
    text: "Lists",
  },
  {
    icon: <PersonOutlineOutlinedIcon style={{ fontSize: "28px" }} />,
    text: "Profile",
  },
  {
    icon: <MoreHorizOutlinedIcon style={{ fontSize: "28px" }} />,
    text: "more",
  },
];
function LeftSection() {
  const [open, setOpen] = React.useState(false);

  const [tweet, setTweet] = useState("");
  // const[storeTweet,setStoreTweet]=useRecoilState(tweetDataAtom)

  function handleChange(e) {
    setTweet(e.target.value);
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className={style.mainDiv}>
        <div className={style.btnDiv}>
          <TwitterIcon
            style={{
              color: "#00acee",
              fontSize: "xx-large",
              marginLeft: "1rem",
            }}
          />

          {arrs.map((arr, index) => {
            return (
              <>
                <div key={index}>
                  <Buttons
                    className={style.icons}
                    image={arr.icon}
                    Sign={arr.text}
                  />
                </div>
              </>
            );
          })}

          <div>
            <Buttons
              className={style.btn1}
              Sign="Tweet"
              btnNext={handleClickOpen}
            />
            <Dialog open={open} onClose={handleClose}>
              <img src={profile} alt="" className={style.BigPhoto} />

              <textarea
                className={style.ForTweet}
                placeholder="What is happening ?"
                value={tweet}
                onChange={handleChange}
              />

              <DialogActions>
                <Buttons
                  btnNext={handleClose}
                  Sign=" Tweet"
                  className={style.btnTweet}
                />
              </DialogActions>
            </Dialog>
          </div>
          <br />

          {/* <PopOver /> */}
        </div>
      </div>
    </>
  );
}
export default LeftSection;
