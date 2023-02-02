import React from 'react';

const Pagination = ({rowPerPage, totalRow}) => {
    const pageNumber =[];
    for(let i=1;i <= Math.ceil(totalRow / rowPerPage); i++){
        pageNumber.push(i);

    }
    return (
        <div className='flex justify-center items-center my-6'>
            <ul className='flex text-2xl space-x-5'>
                {
                    pageNumber.map(number =>(
                        <li key={number} className='border px-6 py-4 rounded-md bg-[#40C463]'>
                            <a href='!#'>
                                {number}
                            </a>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default Pagination;