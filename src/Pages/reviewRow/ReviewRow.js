import React from 'react';
import { Link } from 'react-router-dom';

const ReviewRow = ({ review, handleDelete, handleUpdate }) => {
    const { _id, reviewName, photoUrl, textArea, status, } = review;



    return (
        <tr>
            <th>
                <label>
                    <button onClick={() => handleDelete(_id)} className='btn btn-ghost btn-xs'>Delete</button>
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-24">
                            <img src={photoUrl} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{reviewName}</div>

                    </div>
                </div>
            </td>
            <td>
                {textArea}

            </td>

            <th>
                <button onClick={() => handleUpdate(_id)} className="btn btn-ghost btn-xs">{status ? status : 'Edit'}</button>
            </th>
        </tr>


    );
};

export default ReviewRow;