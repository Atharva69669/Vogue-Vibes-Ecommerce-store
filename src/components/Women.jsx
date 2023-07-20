import React from 'react'
import  { useEffect, useState } from "react"
import {db} from '../firebase'
import {collection,getDocs} from 'firebase/firestore'
import './styles/Women.css'
import Card from './Card'


const Women = () => {
  const [data, setData] = useState([]);

  async function getData() {
    try {
      const collectionRef = collection(db, 'Database');
      const querySnapshot = await getDocs(collectionRef);

      const fetchedData = querySnapshot.docs.map((doc) => doc.data());

      setData(fetchedData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="product">
      {data
        .filter((product) => product.Category === "Women")
        .map((product) => (
          <Card props={product} key={product.productId} />
        ))}
    </div>
    
  );
}

export default Women