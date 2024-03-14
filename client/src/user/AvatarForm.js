import React, { useState } from 'react'
import '../css/home/Home.css'
import '../css/user/AvatarForm.css'
import Popup from '../utils/popup/Popup'

const AvatarForm = () => {
    const [isOpen, setIsOpen] = useState(false)

    const togglePopup = () => {
        setIsOpen(!isOpen)
    }
    return (
        <div className="container margin-avatar">
            <div className="container">
                <div aria-label="Account menu" onClick={togglePopup} role="button" className="container avatarAlign avatarBorder avatarDisplay avatarDirection menu outlineNone">
                    <div className="container">
                        <div className="container displayBlock oveflow avatarBlock">
                            <div className="bottomZero fullHeight posAbsolute leftZero rightZero fullWidth">
                                <div className="container displayBlock fullHeight fullWidth posAbsolute verticalAlignCenter oveflow">
                                    <div className="bottomZero fullHeight posAbsolute leftZero rightZero fullWidth">
                                        <div className="container avatarBorder avatarDim overflowHidden posAbsolute">
                                            <div role="presentation" className="container fullHeight fullWidth outlineNone presentation">
                                                <div className="container avatarBorder overflowHidden noPointer posAbsolute verticalAlignCenter presentationWrap">
                                                    <div className="container displayBlock overflowHidden">
                                                        <div className='emptyDiv'></div>
                                                        <div className="bottomZero fullHeight posAbsolute leftZero rightZero fullWidth">
                                                            <div aria-label="сложная функция" className="container overflowHidden z-index-0">
                                                                <div className="container avatarImg bottomZero fullHeight leftZero posAbsolute rightZero fullWidth" style={{backgroundImage: `url(${'https://pbs.twimg.com/profile_images/664453813550473216/ATAys5gX_bigger.jpg'})` }}></div>
                                                                <img alt="сложная функция" draggable="true" src="https://pbs.twimg.com/profile_images/664453813550473216/ATAys5gX_bigger.jpg" className="css-9pa8cd"/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container flexShrink maxWidth outlineNone">
                        <div className="container flexShrink maxWidth outlineNone flexGrow margin-avatar">
                            <div className="container flexShrink maxWidth outlineNone">
                                <div className="container avatarAlign avatarDirection maxWidth">
                                    <div dir="ltr" className="containerBlock minWidth font fontWeight avatarAlign avatarDisplay overflowHidden no-white-space">
                                        <span className="containerBlock maxWidth overflowHidden no-white-space minWidth fontInherit">
                                            <span className="containerBlock minWidth fontInherit">сложная функция</span>
                                            <span className="containerBlock minWidth fontInherit verticalAlign"></span>
                                        </span>
                                    </div>
                                    <div dir="ltr" className="containerBlock minWidth font fontWeightLight flexInline avatarDirection flexShrink maxWidth-0">
                                        <span className="containerBlock minWidth fontInherit avatarAlign flexInline"></span>
                                    </div>
                                </div>
                            </div>
                            <div className="container avatarAlign avatarDirection flexShrink">
                                <div tabindex="-1" className="container flexShrink maxWidth outlineNone">
                                    <div className="container">
                                        <div dir="ltr" className="containerBlock maxWidth overflowHidden no-white-space minWidth font fontWeightLight avatarDirection fontStyle fontSettings">
                                            <span className="containerBlock minWidth fontInherit">@yulia_sukach</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container flexAlignEnd flexGrow">
                        <svg viewBox="0 0 24 24" aria-hidden="true" className="inlineBlock currentColor height-1 maxWidth relative verticalAlignBottom userSelectNone dotColor">
                            <g><path d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"></path></g>
                        </svg>
                    </div>
                </div>
                {isOpen && <Popup onClose={togglePopup}/>}
            </div>
        </div>
    )
}

export default AvatarForm