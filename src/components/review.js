import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { saveReview } from '../actions/movieActions';

function ReviewForm({ movieId }) {
    const dispatch = useDispatch();
    const [reviewData, setReviewData] = useState({ review: '', rating: 0 });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setReviewData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(saveReview(movieId, reviewData));
        setReviewData({ review: '', rating: 0 });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Review:
                <textarea
                    name="review"
                    value={reviewData.review}
                    onChange={handleChange}
                />
            </label>
            <label>
                Rating:
                <input
                    type="number"
                    name="rating"
                    value={reviewData.rating}
                    onChange={handleChange}
                    max={5}
                    min={0}
                />
            </label>
            <button type="submit">Submit Review</button>
        </form>
    );
}

export default ReviewForm;
