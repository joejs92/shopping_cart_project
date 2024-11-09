import { useEffect, useState } from 'react'
import Card from './Card';

function Shop(){
    const [items, setItems] = useState([]);
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(json=>setItems(json))
        .catch((error => console.error(error)));
    }, []);
  

  return (
    <>
      <div className='shopping'>
          {items.map((item)=>{
            return <Card key = {item.id} image = {item.image} title = {item.title} price = {item.price}/>
          })}
      </div>
    </>
  )
}

export default Shop;