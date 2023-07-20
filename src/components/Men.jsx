import React, { useEffect, useState } from 'react';
import './styles/Men.css';
import Card from './Card';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';

const Men = () => {
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
        .filter((product) => product.Category === "Men")
        .map((product) => (
          <Card props={product} key={product.productId} />
        ))}
    </div>
  );

};

export default Men;
