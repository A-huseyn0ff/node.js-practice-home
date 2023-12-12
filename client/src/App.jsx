
import { useEffect, useState } from 'react';
import './App.scss';

function App() {
  const [data,setData]=useState([])
 
  useEffect(()=>{
    const fetchdata =async function () {
      const res=await fetch('http://localhost:5000')
      const jsondata=await res.json()
      setData(jsondata)
    }
    fetchdata()
},[])
  return (
 <>
 <div className='products'>
  <h2>Our Products</h2>
  <div className='row'>
  {data && data.map((item)=>(
    <div className='product'>
<img src={item.productimage} alt="" />
<h2>{item.name}</h2>
<p>${item.price}.00</p>
    </div>
  ))}
  </div>
 </div>
 </>
  );
}

export default App;
