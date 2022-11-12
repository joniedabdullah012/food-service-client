import React from 'react';

const ReviewRow = ({ review }) => {
    const { reviewName, photoUrl, textArea } = review;
    console.log(reviewName, photoUrl, textArea);
    return (
        <tr>
            <th>
                <label>
                    <button className='btn btn-ghost btn-xs'>Delete</button>
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
                <button className="btn btn-ghost btn-xs">Edit</button>
            </th>
        </tr>


    );
};

export default ReviewRow;