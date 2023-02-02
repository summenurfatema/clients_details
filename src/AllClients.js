import React, { useEffect, useState } from 'react';
import Pagination from './Pagination';
import SingleClient from './SingleClient';

const AllClients = () => {
 const [clients,setClients] =useState([])


useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>setClients(data))
},[clients])

// pagination
const [currentPage, setCurrentPage]=useState(1)
const [rowPerPage, setRowPerPage] =useState(5)
const indexOfLastRow = currentPage * rowPerPage;
const indexOfFirstRow = indexOfLastRow - rowPerPage;
const  currentRow = clients.slice(indexOfFirstRow, indexOfLastRow)

  return (
    <div>
      {clients.map((client, index) => 
      <SingleClient client={client}/>)}
      <Pagination rowPerPage={rowPerPage} totalRow={clients.length}/>
  
    </div>
  );
};

export default AllClients;