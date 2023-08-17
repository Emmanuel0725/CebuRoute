import React from "react";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import DetailsComp from '../components/DetailsComp';
import detailsData from '../detailsData';
import Review from '../components/Review';
import reviewData from '../reviewData';

export default function DetailPage() {
    const details = detailsData.map(item => (
        <DetailsComp key={item.id} {...item} />
    ));

    const reviews = reviewData.map(item => (
        <div key={item.id}>
             <Review username={item.username} date={item.date} review={item.review} />
        </div>
    ));

    return (
        <div>
            <Navbar />
            <div className='detail--page'>
                {details}
            </div>
            <div className="reviews-container">
                {reviews}
            </div>
            <Footer />
        </div>
    )
}