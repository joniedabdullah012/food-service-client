import React from 'react';

const ReviewTable = ({ review }) => {
    const { photoUrl, reviewName, email, textArea } = review;
    return (


        <tr>

            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
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
            <td>{email}</td>

        </tr>






    );
};

export default ReviewTable;