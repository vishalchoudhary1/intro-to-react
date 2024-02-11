import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'


function Github() {
    const data = useLoaderData();
    // const [data, setData] = useState([])
    // useEffect(()=>{
    //     fetch(`https://api.github.com/users/hiteshchoudhary`)
    //     .then(response => response.json())
    //     .then(data => {
    //         setData(data)
    //     })
    // },[])
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers: {data.followers ? data.followers : 'NaN'}
    <img src={data.avatar_url} alt="github picture" width={300} /></div>
  )
}

export default Github

export const githubInfoLoader = async() =>{
    const response = await fetch(`https://api.github.com/users/vishalchoudhary1`)
    // .then(response.json())
    return response.json();
}