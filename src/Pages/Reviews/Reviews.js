
import { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import ReviewsDetails from '../ReviewsDetails/ReviewsDetails';
import ReviewsForm from '../ReviewsForm/ReviewsForm';





const Reviews = () => {
    const { _id, title, img, description, price } = useLoaderData()

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/myreviews')
            .then(res => res.json())
            .then(data => {
                setReviews(data)


            })


    }, [])







    return (
        <div>

            <div className='  '>
                <div className="card w-full bg-base-100 shadow-xl m-6">
                    <figure><img className='w-96' src={img} alt="" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{title}</h2>
                        <h2 className="card-title">Price: {price}</h2>
                        <p>{description}</p>

                    </div>




                </div>
                <h3 className=' p-5 text-5xl text-center text-orange-400'>All Review</h3>
                <div className=' w-2/3 m-6'>
                    {
                        reviews.map(review => <ReviewsDetails
                            key={review._id}
                            review={review}
                        >

                        </ReviewsDetails>)
                    }

                </div>


                <ReviewsForm></ReviewsForm>
            </div>










        </div>
    );
};

export default Reviews;