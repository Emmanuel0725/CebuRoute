import React from "react"
import userIcon from "/images/user.png"

export default function Review (props) {
    return (
        <>
        <div className="review--row">
            <div className="user--logo-and-name">
                <img className="user--logo" src={userIcon} alt="User Logo" />
                <span className='user--username'> {props.username} </span>
            </div>
            <div className="star--rating-and-date">
                {[1, 2, 3, 4, 5].map((index) => (
                <span key={index} className="star">⭐</span> ))}
                <span className="date--posted">Posted {props.date} </span>
            </div>
        </div>
        <div className="user--review">
            <p>{props.review}</p>
            <hr></hr>
        </div>
        </>
    )
}