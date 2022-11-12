import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/authprovider/AuthProvider';
import ReviewRow from '../reviewRow/ReviewRow';
import Reviews from '../Reviews/Reviews';

const MyReviews = () => {
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/myreviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReviews(data))


    }, [user?.email])

    return (
        <div>
            <h2 className='text-center text-5xl p-5 font-semibold  text-orange-500'> My Review</h2>

            <div className="overflow-x-auto w-full">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Name</th>
                            <th>Review</th>
                            <th>Edit</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            reviews.map(review => <ReviewRow
                                key={review._id}
                                review={review}


                            ></ReviewRow>)
                        }






                    </tbody>


                </table>
            </div>

        </div>
    );
};

export default MyReviews;