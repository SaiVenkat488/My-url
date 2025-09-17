import React,{useEffect, useState} from 'react'
import Service from '../utils/http'

const MyUrls = () => {
    const service = new Service();
    const [data,setData]=useState(null);
    const getData = async () => {
        try {
            const response = await service.get("user/my/urls")
            console.log(response)
            setData(response)
        }
        catch(err)
        {
            console.log(err)

        } 

      }
    useEffect(()=>{
      getData()
    }, [])
  return (
    <div>MyUrls</div>
  )
}

export default MyUrls