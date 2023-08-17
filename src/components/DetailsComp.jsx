import React, { useState } from 'react';
import addressIcon from "/images/maps-and-flags.png"
import timeIcon from "/images/clock.png"
import userIcon from "/images/user.png"
import Review from '../components/Review';


export default function DetailsComp(props) {
    const [selectedImage, setSelectedImage] = useState(props.img);

    const handleThumbnailClick = (image) => {
        setSelectedImage(image);
    };
    

    return (
        <div className="detail--pages">
            <div className="detail--text">
                <h1 className="detail--title">{props.title}</h1>
                <div className="detail--address-time"> 
                    <p> <img className="icon" src={addressIcon}  />
                        {props.address}
                    </p>
                    <p> <img className="icon" src={timeIcon}  />
                        {props.time}
                    </p> 
                </div>
                <div className="rating-stars">
                    {[1, 2, 3, 4, 5].map((index) => (
                        <span key={index} className="star">⭐</span>
                    ))}
                    <div className="detail--review-category">
                        <span> • {props.reviewCount} reviews</span>
                        <span> • {props.categories}</span>
                    </div>
                </div>
            </div>
            <div className="detail--sections">
                <div className="detail--about">
                    <h1 className="detail--title1">About</h1>
                    <p>{props.about}</p>
                    <p>{props.about1}</p>
                </div>
                <div className="detail--pictures">
                    <div className="details-images">
                        <img className='image-main' src={`../images/${selectedImage}`} alt="Destination" />
                        <div className="thumbnail-row">
                            {props.images.map((image, index) => (
                            <img
                                key={index}
                                className="thumbnail"
                                src={`../images/${image}`}
                                alt={`Thumbnail ${index + 1}`}
                                onClick={() => handleThumbnailClick(image)}
                                />
                            ))}
                        </div>
                    </div>
                 </div>
            </div>  
            <div className='detail--review'>
                    <div className="review--stars">
                        <h1>Reviews</h1>
                        <div className="star--rating">
                            {[1, 2, 3, 4, 5].map((index) => (
                            <span key={index} className="star">⭐</span> ))}
                            <span> • {props.rating}</span>
                            <span> • {props.reviewCount} </span>
                        </div>
                        <div className="progress--bars">
                            {[1, 2, 3, 4, 5].map((index) => (
                            <div key={index} className="progress--bar">
                            {6 - index}
                            </div>
                            ))}
                        </div>
                    </div>
                    <div className="review--write">
                        <div className="user">
                            <img className="user--logo" src={userIcon}  />
                            <span className='user--username'>Elaine Suganob</span>
                        </div>
                        <div>
                            <button className='add--review'>Add a Review</button>
                        </div>
                        <hr></hr>
                        <Review />
                    </div>    
                </div>       
        </div>
    );
}

