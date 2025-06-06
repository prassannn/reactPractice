import React from 'react'
import { useEffect, useState } from 'react'


function GitHub() {
  const [data,setData] = useState([])
  useEffect(()=> {
    fetch('https://api.github.com/users/prassannn')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        setData(data)  
    })
    },[])
    return (
    <div className='bg-fuchsia-300 p-4 text-3xl text-center text-white m-4'>GitHub Followers:{data.public_repos}
    <img src="https://avatars.githubusercontent.com/u/133556317?v=4" alt="" width={200} />
    </div>
  )
}

export default GitHub