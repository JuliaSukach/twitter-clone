import { Avatar, Button } from "@mui/material";
import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import db from "../firebase/firebase";
import "../css/feed/TweetBox.css";

import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase/firebase'; // Replace with your actual Firebase config import

const TweetBox = ({ onTweetAdded }) => {
    const [tweetMessage, setTweetMessage] = useState("")
    const [tweetImage, setTweetImage] = useState("")
    const [error, setError] = useState(null)
    const [user] = useAuthState(auth)
    const sendTweet = async (e) => {
        e.preventDefault();
        try {
            await addDoc(collection(db, 'posts'), {
                username: "happystark",
                displayName: user?.displayName || "Default Display Name",
                avatar:
                    "https://scontent-bom1-1.xx.fbcdn.net/v/t1.0-1/c0.33.200.200a/p200x200/51099653_766820610355014_8315780769297465344_o.jpg?_nc_cat=101&_nc_sid=7206a8&_nc_ohc=c1qBHkwAgVsAX8KynKU&_nc_ht=scontent-bom1-1.xx&oh=340b05bea693dd1671296e0c2d004bb3&oe=5F84CA62",
                verified: true,
                text: tweetMessage,
                image: tweetImage,
            })
            onTweetAdded();
        } catch (e) {
            console.error("Error adding document: ", e);
            setError("An error occurred while sending the tweet. Please try again.");
        }

        setTweetMessage("");
        setTweetImage("");
    }

    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src="https://scontent-bom1-1.xx.fbcdn.net/v/t1.0-1/c0.33.200.200a/p200x200/51099653_766820610355014_8315780769297465344_o.jpg?_nc_cat=101&_nc_sid=7206a8&_nc_ohc=c1qBHkwAgVsAX8KynKU&_nc_ht=scontent-bom1-1.xx&oh=340b05bea693dd1671296e0c2d004bb3&oe=5F84CA62" />
                    <input
                        value={tweetMessage}
                        onChange={(e) => setTweetMessage(e.target.value)}
                        placeholder="What's happening?"
                        type="text"
                    />
                </div>
                <input
                    placeholder="Optional: Enter image URL"
                    value={tweetImage}
                    onChange={(e) => setTweetImage(e.target.value)}
                    type="text"
                    className="tweetBox__imageInput"
                />
                <Button onClick={sendTweet} type="submit" className="tweetBox__button">
                    Tweet
                </Button>
            </form>
        </div>
    );
}

export default TweetBox;