import { Avatar } from "@mui/material";
import {
    ChatBubbleOutline,
    FavoriteBorder,
    Publish,
    Repeat,
    VerifiedUser,
} from "@mui/icons-material";
import React, { useState } from "react";
import "../css/feed/Post.css";
import { doc, deleteDoc } from "firebase/firestore";
import db from "../firebase/firebase";

function Post({ displayName, username, verified, text, image, avatar, id, onTweetAdded }) {
    const [isMenuVisible, setMenuVisibility] = useState(false)
    const toggleMenu = () => {
        setMenuVisibility(!isMenuVisible);
    };
    const handleOptionClick = (action, id) => {
        if (action === 'delete') {
            const docRef = doc(db, 'posts', id);
            deleteDoc(docRef)
                .then(() => {
                    console.log("Entire Document has been deleted successfully.")
                    onTweetAdded();
                })
                .catch(error => {
                    console.log(error);
                })
        }
    }
    return (
        <div className="post" id={id}>
            <div className="post__avatar">
                <Avatar src={avatar} />
            </div>
            <div className="post__body">
                <div className="post__header">
                    <div className="post__headerText">
                        <h3>
                            {displayName}{" "}
                            <span className="post__headerSpecial">
                                {verified && <VerifiedUser className="post__badge" />} @
                                {username}
                            </span>
                        </h3>
                    </div>
                    <div className="post__option" onClick={ toggleMenu }>
                        <svg viewBox="0 0 24 24">
                            <g>
                                <path d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"/>
                            </g>
                        </svg>
                        {isMenuVisible && (
                            <div className="menu">
                                <ul>
                                    <li onClick={() => handleOptionClick('delete', id)}>Delete Post</li>
                                </ul>
                            </div>
                        )}
                    </div>
                    <div className="post__headerDescription">
                        <p>{text}</p>
                    </div>
                </div>
                <img src={image} alt="" />
                <div className="post__footer">
                    <ChatBubbleOutline fontSize="small" />
                    <Repeat fontSize="small" />
                    <FavoriteBorder fontSize="small" />
                    <Publish fontSize="small" />
                </div>
            </div>
        </div>
    );
}

export default Post;