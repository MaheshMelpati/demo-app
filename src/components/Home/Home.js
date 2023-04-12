import React, { useState } from "react";

function Home() {
    const [showcity,setShowCity] = useState(false)
    const [citys,setCitys]=useState([])
    const [city,setCity]=useState('')
 const data = [
    { name: "Andra pradesh", value: "AP", city: ['vijayawadha', 'tirupati'] },
    { name: "Tamil Nadu", value: "TN", city: ['velur', 'tiruvanmamaly'] }
  ];
  const changehandelar =(e)=>{
    setShowCity(true)
    const scity = e.target.selectedOptions[0].dataset.index
    const citys = data[scity].city
    setCitys(citys)
  }
  return (
    <>
    <select  onChange={(e)=>changehandelar(e)}>
        <option>select one</option>
        {data.map((k,inx) =>{
            return(
            <option key={inx} value={k} data-index={inx}>{k.name}</option>
        )})}
    </select>
    {
        showcity ?
        <select value={city} onChange={(e)=>setCity(e.target.value)}>
            <option>select one</option>
            {
                citys.map((city, inx )=>{
                    return(
                        <option value={city} key={city}>{city}</option>
                    )
                })
            }
        </select>
        :null

    }
    </>
  )
}

export default Home;
