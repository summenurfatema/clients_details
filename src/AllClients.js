import React, { useEffect, useState } from 'react';
import SingleClient from './SingleClient';

const AllClients = () => {
 const [clients,setClients] =useState([])


useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>setClients(data))
},[clients])


  return (
    <div>
      {clients.map((client, index) => 
      <SingleClient client={client}/>)}
  
    </div>
  );
};

export default AllClients;