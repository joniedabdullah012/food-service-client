import React from 'react';
import ReviewTable from '../reviewTable/ReviewTable';

const ReviewsDetails = ({ review }) => {




    return (
        <div className="overflow-x-auto w-full">
            <table className="table w-full">

                <thead>
                    <tr>

                        <th>Name</th>
                        <th>Review</th>
                        <th>Email</th>
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