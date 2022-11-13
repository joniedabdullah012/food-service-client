import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../context/authprovider/AuthProvider';
import ReviewRow from '../reviewRow/ReviewRow';
import Reviews from '../Reviews/Reviews';

const MyReviews = () => {
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/myreviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReviews(data))


    }, [user?.email])

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, want to cancel this review')
        if (proceed) {

            fetch(`http://localhost:5000/myreviews/${id}`, {

                method: 'DELETE'

            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        toast.success('delete success')
                        const remaining = reviews.filter(rev => rev._id !== id)
                        setReviews(remaining)

                    }
                })
        }

    }

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
                                handleDelete={handleDelete}


                            ></ReviewRow>)
                        }






                    </tbody>


                </table>
            </div>

        </div>
    );
};

export default MyReviews;