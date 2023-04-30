import {  useRecoilValue, useSetRecoilState } from "recoil"
import { FeedCard } from "../components/Tweets/Tweets";
import { tweetsAtom } from "../Atom/Atom";


export function Feeds() {
    const tweets = useRecoilValue(tweetsAtom);
    const setTweets = useSetRecoilState(tweetsAtom);
  
    function toggleLike(index) {
      console.log(`like this tweet , ${index}`);
  
      const tweet = { ...tweets[index] };
  
      const updated = [...tweets];
      tweet.isLiked = !tweet.isLiked;
      tweet.isLiked ? tweet.likeCount++ : tweet.likeCount--;
      updated[index] = tweet;
      setTweets(updated);
    }
  
    return (
      <div>
        <h1>Feeds</h1>
        <hr />
        {tweets.map((tweet, index) => (
          <FeedCard
            onToggleLike={() => toggleLike(index)}
            key={tweet.id}
            tweet={tweet}
          />
        ))}
      </div>
    );
  }