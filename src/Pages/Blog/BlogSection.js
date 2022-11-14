import React from 'react';
import useTitle from '../../Hooks/useTitle';

const BlogSection = () => {
    useTitle('Blog')
    return (
        <div>

            <div className=" m-6 card w-96 bg-neutral text-neutral-content">
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Difference between SQL and NoSQL</h2>
                    <p>SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL.</p>

                </div>
            </div>
            <div className=" m-6 card w-96 bg-neutral text-neutral-content">
                <div className="card-body items-center text-center">
                    <h2 className="card-title">What is JWT, and how does it work?</h2>
                    <p>What is JWT (JSON Web Token)? JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object. It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP)</p>

                </div>
            </div>
            <div className=" m-6 card w-96 bg-neutral text-neutral-content">
                <div className="card-body items-center text-center">
                    <h2 className="card-title">What is the difference between javascript and NodeJS?</h2>
                    <p>JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language.</p>

                </div>
            </div>
            <div className=" m-6 card w-96 bg-neutral text-neutral-content">
                <div className="card-body items-center text-center">
                    <h2 className="card-title">How does NodeJS handle multiple requests at the same time?</h2>
                    <p>NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.</p>

                </div>
            </div>
        </div>
    );
};

export default BlogSection;