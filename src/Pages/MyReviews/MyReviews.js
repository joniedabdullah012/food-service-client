import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/authprovider/AuthProvider';
import useTitle from '../../Hooks/useTitle';
import ReviewRow from '../reviewRow/ReviewRow';
import Reviews from '../Reviews/Reviews';

const MyReviews = () => {
    useTitle('My-Reviews')

    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(`https://food-services-server.vercel.app/myreviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReviews(data))


    }, [user?.email])

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, want to cancel this review')
        if (proceed) {

            fetch(`https://food-services-server.vercel.app/myreviews/${id}`, {

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
    const handleUpdate = id => {
        fetch(`https://food-services-server.vercel.app/myreviews/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'Update' })

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    const remaining = reviews.filter(rev => rev._id !== id)
                    const edit = reviews.find(rev => rev._id === id)
                    edit.status = ('update')
                    const newReview = [...remaining, edit]
                    setReviews(newReview)
                }
            })
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
                                handleUpdate={handleUpdate}


                            ></ReviewRow>)
                        }






                    </tbody>


                </table>
            </div>

        </div>
    );
};

export default MyReviews;