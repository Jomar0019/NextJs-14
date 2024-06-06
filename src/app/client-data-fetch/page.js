"use client";

import { useEffect, useState } from "react";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then(res => res.json())

const ClientSideDataFetching = () => {

  // const [ loading, setLoading ] = useState(false);

  // const [ users, setUsers ] = useState([]);

  // const fetchUsers = async () => {
    
  //   try {
  //     const api = await fetch("https://dummyjson.com/users");
  //     const res = await api.json();

  //     if(res?.users) {
  //       setUsers(res.users)
  //       setLoading(false)
  //     }
  //   } catch(error) {
  //     console.log(error)
  //     setUsers([])
  //     setLoading(false)
  //   }
  // }

  
  // useEffect(() => {
  //   fetchUsers();
  // }, [])
  
  
  const { data, error, isLoading } = useSWR('https://dummyjson.com/users', fetcher);
  if(error) return <div>Failed to load</div>
  if(isLoading) return <h3>Loading... Please wait</h3>
    return (
      <div>

        <ul>
          {data && data?.users && data?.users.length > 0 ? 
          data?.users.map(user => (
            <li key={user.id} className="p-2">{user.firstName}</li>
          ))
          : null
          }
        </ul>
      </div>
    )
  }
  
  export default ClientSideDataFetching
  