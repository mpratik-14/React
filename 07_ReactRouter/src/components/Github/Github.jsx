import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router'

function Github() {
    const data = useLoaderData()
    console.log("DATA is :"+data);
    

    // const [data, setData] = useState([]);
    // useEffect(() => {
    //     fetch('https://api.github.com/users/mpratik-14')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data)
    //     })

    // }, [])

    return (
        <div className='text-center m-4 bg-gray-500 text-white p-4 text-3xl'>
            Github followers: {data.followers}
            <img src={data.avatar_url} alt="Git picture" width={100}/>
        </div>
    )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/mpratik-14')

    return response.json()
}