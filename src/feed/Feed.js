import React, { useEffect, useState } from "react";
import "../css/feed/Feed.css";
import Post from "./Post";
import TweetBox from "./TweetBox";
import { collection, getDocs, query, where, } from "firebase/firestore";
import db from "../firebase/firebase";
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase/firebase'; // Replace with your actual Firebase config import

function Feed() {
    debugger
    const [user] = useAuthState(auth)
    const [posts, setPosts] = useState([])
    const fetchPost = async() => {
        try {
            debugger
            const querySnapshot = await getDocs(
                query(collection(db, 'posts'), where('displayName', '==', user.displayName))
            )
            const newData = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
            setPosts(newData)
        } catch (error) {
            console.error('Error fetching posts:', error);
        }
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
            {posts.map((post) => (
                <Post
                    onTweetAdded={fetchPost}
                    displayName={post.displayName}
                    username={post.username}
                    verified={post.verified}
                    text={post.text}
                    avatar={post.avatar}
                    image={post.image}
                    id={post.id}
                />
            ))}
        </div>
    );
}

export default Feed;