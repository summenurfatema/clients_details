import React, { useEffect, useState } from 'react';
import Pagination from './Pagination';
import SingleClient from './SingleClient';

const AllClients = () => {
 const [clients,setClients] =useState([])
 
//  pagination
 const [currentPage, setCurrentPage]=useState(1)
 const [rowPerPage, setRowPerPage] =useState(3)

useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())          
    .then(data=>setClients(data))
},[])

// pagination

const indexOfLastRow = currentPage * rowPerPage;
const indexOfFirstRow = indexOfLastRow - rowPerPage;
const currentRow = clients.slice(indexOfFirstRow, indexOfLastRow)
const paginate =pageNumber=>setCurrentPage(pageNumber)

  return (
    <div className='flex flex-col justify-center pt-24'>
      {currentRow.map((client, index) => 
      <SingleClient client={client}/>)}
      <Pagination rowPerPage={rowPerPage} paginate={paginate} currentPage={currentPage} totalRow={clients.length}/>
  
    </div>
  );
};

export default AllClients;