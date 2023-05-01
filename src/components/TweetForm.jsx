import React from "react";
import { useSetRecoilState } from "recoil";
import { tweetsAtom } from "../Atom/Atom";
import {GoFileMedia} from 'react-icons/go'
import {RiFileGifFill} from 'react-icons/ri'
import {BiPoll} from 'react-icons/bi'
import {BsFillEmojiSmileFill} from 'react-icons/bs'

export function TweetForm() {
    const setTweets = useSetRecoilState(tweetsAtom);
    const [tweet, setTweet] = React.useState({
      id: Date.now(),
      content:
        "Aspernatur accusamus porro perspiciatis occaecati assumenda modi. Eaque nesciunt quisquam quidem enim rem. Ab corrupti atque vero quos sed facilis odit nemo voluptas. Illo distinctio dolore accusantium. Sequi deserunt qui debitis explicabo. Ipsa atque suscipit repudiandae velit architecto.",
      createdAt: "2022-09-10T07:47:45.804Z",
      image: `https://picsum.photos/1000/500?q=${Date.now()}`,
      tweetedBy: {
        id: "a2b9f2ce-a4bf-45bd-a545-5ee996ffa451",
        name: "Verna Pouros",
      },
      likeCount: 563,
      commentCount: 504,
      reTweetsCount: 63,
      isLiked: false,
    });
  
    const handlSubmit = (event) => {
      event.preventDefault();
      setTweets((tweets) => {
        return [tweet, ...tweets];
      });
    };
  
    const handleChange = (event) => {
      setTweet({
        ...tweet,
        [event.target.name]: event.target.value,
        image: `https://picsum.photos/1000/500?q=${Date.now()}`,
      });
    };
  
    return (
      <form onSubmit={handlSubmit}>
        <textarea
          onChange={handleChange}
          name="content"
          className="form-control"
        ></textarea>
        <GoFileMedia style={{color:'blue', fontSize:'2rem'}}/>
        <RiFileGifFill style={{color:'blue', fontSize:'2rem'}}/>
        <BiPoll style={{color:'blue', fontSize:'2rem'}}/>
        <BsFillEmojiSmileFill style={{color:'blue', fontSize:'2rem'}}/>
        <button className="btn" type="submit">
          Tweet
        </button>
      </form>
    );
  }