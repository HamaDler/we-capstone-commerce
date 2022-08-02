import React from "react";
import Star from "./Star";

export default function RatingStars({ rating }) {
    let ratingStars = [];

    for (var i = 0; i < rating; i++) {
        ratingStars[i] = <Star />;
    }
    return (
        <div className="flex gap-2 items-center mt-3">
            {ratingStars.map((ratingStar, index) => {
                return <div key={index}>{ratingStar}</div>;
            })}
        </div>
    );
}
