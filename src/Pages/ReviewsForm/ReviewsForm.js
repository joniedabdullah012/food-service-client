import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/authprovider/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';

const ReviewsForm = () => {
    const { _id, title, price } = useLoaderData()


    const { user } = useContext(AuthContext);
    console.log(user);

    const handleReviewAdd = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = user?.email || 'unregistraded';
        const photoUrl = form.photoUrl.value;
        const textArea = form.textArea.value;
        console.log(name, email, photoUrl, textArea);

        const review = {
            services: _id,
            serviceName: title,
            price,

            reviewName: name,
            email,
            photoUrl,
            textArea




        }



        fetch('https://food-services-server.vercel.app/reviews', {

            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)

        })
            .then(res => res.json())
            .then(data => {

                console.log(data)
                if (data.acknowledged) {
                    toast.success('Successfully created!');

                    form.reset();

                }

            })
            .catch(err => console.err(err))


    }
    return (
        <div className='p-5'>

            {
                user ?
                    <div>

                        <h2 className='text-center text-4xl p-4 text-orange-400'>Please add your review</h2>
                        <form onSubmit={handleReviewAdd}>

                            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
                                <input name="name" defaultValue={user?.displayName} type="text" placeholder="Your Name" className="input input-bordered w-full " required />

                                <input name="photoUrl" type="text" placeholder="PHOTO URL" className="input input-bordered w-full " defaultChecked={user?.photoURL
                                } required />

                                <input name="email" type="email" placeholder="email" defaultValue={user?.email} className="input input-bordered w-full " readOnly required />


                            </div>

                            <div className='p-4'>
                                <textarea name='textArea' className="textarea textarea-info h-24 w-full" placeholder="Write your Review" required></textarea>
                            </div>

                            <input className=" btn " type="submit" value="add your review " />

                        </form>

                    </div>

                    :
                    < div className='m-6 p-5'>
                        <h2 className='text-3xl text-orange-400'>Please Log in and add your review</h2>

                        <Link className=' m-6 font-semibold text-2xl' to='/login'>click Log in</Link>

                    </div>



            }
        </div>

    );
};

export default ReviewsForm;