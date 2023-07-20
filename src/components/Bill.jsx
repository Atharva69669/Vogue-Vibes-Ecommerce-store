import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, query, where, getDocs } from "firebase/firestore";

const Bill = (props) => {

    const [productData, setProductData] = useState(null);
    const [Subtotal, setSubtotal] = useState(1);
    const [state, setState] = useState(true);

    async function getData() {
        const collectionRef = collection(db, "Database");
        const id = parseInt(props.props.pro_id, 10);
        const q = query(collectionRef, where("productId", "==", id));
        const docSnap = await getDocs(q);
        docSnap.forEach((product) => {
            setProductData(product.data());
        });
    }

    const handleDelete = () => {
        props.onDeleteProduct(productData.productId);
        setState(!state);
    };

    useEffect(() => {
        getData();
    }, []);

    useEffect(() => {
        // Make sure productData is available before calculating subtotal
        if (productData) {
            props.onUpdateSubtotal(Subtotal * productData.productPrice, productData.productId);
        }
    }, [Subtotal, productData]);

    if (!productData || !state) {
        return null;
    }

    return (
        state && (
            <tbody>
                <tr>
                    {/* The rest of your JSX */}
                </tr>
            </tbody>
        )
    );
};

export default Bill;
