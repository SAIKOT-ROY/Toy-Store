import React from 'react';
import { Link } from 'react-router-dom';
import { HiArrowSmLeft } from "react-icons/hi";

const ErrorPage = () => {
    return (
        <div>
            <div>
                <img className='w-3/4 mx-auto' src="https://i.ibb.co/tppzPKY/404.jpg" alt="" />
            </div>
            <div>
                <Link
                 className=
                 'w-28 flex border mx-auto mt-10 mb-20 text-white bg-slate-900 py-3 gap-5 justify-center items-center rounded-lg'
                  to='/'><HiArrowSmLeft />Home</Link>
            </div>
        </div>
    );
};

export default ErrorPage;