import React, { useEffect, useState } from "react";
import "./Feed.css";
import Post from "./Post";
import TweetBox from "./TweetBox";
import { collection, getDocs } from "firebase/firestore";
import db from "../firebase/firebase";

function Feed() {
    const [posts, setPosts] = useState([]);

    const fetchPost = async() => {
        await getDocs(collection(db, 'posts'))
            .then((querySnapshot) => {
                const newData = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
                setPosts(newData)
            })
    }

    useEffect(() => {
        fetchPost()
    }, []);

    return (
        <div className="feed">
            <div className="feed__header">
                <h2>Home</h2>
            </div>
            <TweetBox onTweetAdded={fetchPost}/>
            {posts.map((post, i) => (
                <Post
                    onTweetAdded={fetchPost}
                    displayName={post.displayName}
                    username={post.username}
                    verified={post.verified}
                    text={post.text}
                    avatar={post.avatar}
                    image={post.image}
                    key={post.i}
                />
            ))}
        </div>
    );
}

export default Feed;