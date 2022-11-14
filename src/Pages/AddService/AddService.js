import React from 'react';

const AddService = () => {

    const handleAddService = () => {


    }
    return (
        <div className='m-6 w-3/4'>

            <h2 className='text-center text-4xl p-4 text-orange-400'>Add Service</h2>
            <form onSubmit={handleAddService}>

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
                    <input name="name" type="text" placeholder="Service Name" className="input input-bordered w-full " required />

                    <input name="photoUrl" type="text" placeholder="Photo URL" className="input input-bordered w-full " required />
                    <input name="price" type="text" placeholder="Service Price" className="input input-bordered w-full " required />




                </div>

                <div className='p-4'>
                    <textarea name='textArea' className="textarea textarea-info h-24 w-3/4" placeholder="Service Description" required></textarea>
                </div>

                <input className=" m-5 btn " type="submit" value="Add Service " />

            </form>

        </div>

    );
};

export default AddService;
