import React, { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/authprovider/AuthProvider';

const GoogleLogin = () => {
    const { googleSignIn } = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation()
    const from = location.state?.from?.pathname || `/`;



    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });

            })
            .catch(err => console.error(err))
    }



    return (
        <div className='ml-6'>
            <button onClick={handleGoogleSignIn} className='btn  '>Google</button>

        </div>
    );
};

export default GoogleLogin;