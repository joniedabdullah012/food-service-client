
import { Link, useLoaderData } from 'react-router-dom';
import ReviewsForm from '../ReviewsForm/ReviewsForm';

const Reviews = () => {
    const { title, img, description, price } = useLoaderData()
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={img} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <h2 className="card-title">Price: {price}</h2>
                    <p>{description}</p>

                </div>
            </div>

            <ReviewsForm></ReviewsForm>






        </div>
    );
};

export default Reviews;