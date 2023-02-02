import React, { useState } from "react";

const SingleClient = ({ client }) => {
  const { name, username, email, address, phone, website, company } = client;
const [visible, setVisible] = useState(false)


  return (
    <div className="font-serif">
      <table className="table w-full border text-2xl text-center">
        <thead className="hidden my-5">
          <tr>
            <th>name</th>
            <th>username</th>
            <th>city</th>
            <th>button</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="w-1/4">{name}</td>

            <td className="w-1/4">
              <p className="font-bold">User Name</p>
              <p>@{username}</p>
            </td>

            <td className="w-1/4">
              <p className="font-bold">City</p>
              <p>{address.city}</p>
            </td>
            <td className="w-1/4">
{visible? 
              <button onClick={()=>setVisible(false)} className="px-4 py-2 bg-[#40C463] rounded-3xl">
                Hide Details
              </button>
              :
              <button onClick={()=>setVisible(true)}  className="px-4 py-2 bg-[#40C463] rounded-3xl">
              View Details
            </button>     
}
            </td>
          </tr>
        </tbody>
      </table>
      {visible && 
      <div className="flex justify-start space-x-24 pl-10 py-16 text-2xl">

        <div className="space-y-10">
         <div className="space-y-3">
         <p className="font-semibold">Contact person</p>
          <p>{name}</p>
         </div>
         <div className="space-y-3">
         <p className="font-semibold">Email</p>
          <p>{email}</p>
         </div>
         <div className="space-y-3">
         <p className="font-semibold">Phone</p>
          <p>{phone}</p>
         </div>
        </div>

        <div  className="space-y-10">
        <div className="space-y-3">
        <p className="font-semibold">WebSite</p>
          <p>{website}</p>
        </div>
        <div className="space-y-3">
        <p className="font-semibold">Adress</p>
          <p>{address.suite}, {address.street}, {address.city}</p>
          
        </div>
        <div className="space-y-3">
          <p className="font-semibold">Company</p>
          <p>{company.name}</p>
        </div>
        </div>
     
      </div>
      
}


    </div>
  );
};

export default SingleClient;
