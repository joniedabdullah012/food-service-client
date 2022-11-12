import React, { useContext } from 'react';
import { AuthContext } from '../../context/authprovider/AuthProvider';

const ReviewsForm = () => {
    const { user } = useContext(AuthContext);
    return (
        <div className='p-5'>
            <h2 className='text-center text-4xl p-4 text-violet-400'>Please add your review</h2>
            <form>

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
                    <input type="text" placeholder="Your Name" className="input input-bordered w-full " defaultValue={user?.displayName} />
                    <input type="text" placeholder="PHOTO URL" className="input input-bordered w-full " defaultValue={user?.photoURL
                    } />
                    <input type="email" placeholder="email" defaultValue={user?.email} className="input input-bordered w-full " readOnly />


                </div>

                <div className='p-4'>
                    <textarea className="textarea textarea-info h-24 w-full" placeholder="Write your Review"></textarea>
                </div>



            </form>
        </div>

    );
};

export default ReviewsForm;