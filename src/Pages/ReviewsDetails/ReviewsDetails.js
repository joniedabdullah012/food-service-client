import React from 'react';
import ReviewTable from '../reviewTable/ReviewTable';

const ReviewsDetails = ({ review }) => {
    console.log(review);
    const { email, photoUrl, reviewName, textArea } = review;
    console.log(email, photoUrl, reviewName, textArea);



    return (
        <div className="overflow-x-auto w-full">
            <table className="table w-full">

                <thead>
                    <tr>

                        <th>Name</th>
                        <th>Job</th>
                        <th>Favorite Color</th>
                        <th></th>
                    </tr>

                </thead>

                <ReviewTable
                    key={review._id}
                    review={review}

                ></ReviewTable>


            </table>
        </div>
    );
};

export default ReviewsDetails;