import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import { collection, query, where, getDocs } from "firebase/firestore";

const Bill = (props) => {
    const [productData, setProductData] = useState(null);
    const [Subtotal, setSubtotal] = useState(1);
    const [state, setState] = useState(true);

    async function getData(id) {
        const collectionRef = collection(db, "Database");
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

    const { pro_id } = props; // Destructure the specific prop used in useEffect
    useEffect(() => {
        const id = parseInt(pro_id, 10); // Use the specific prop inside useEffect
        getData(id); // Pass it to getData if needed
    }, [pro_id]); // Add it to the dependency array

    useEffect(() => {
        // Make sure productData is available before calculating subtotal
        if (productData) {
            props.onUpdateSubtotal(Subtotal * productData.productPrice, productData.productId);
        }
    }, [Subtotal, productData, props]); // Add 'props' to the dependency array

    if (!productData || !state) {
        return null;
    }

    return(
        state && 
            <tbody>
                <tr>
                    <td data-th="Product">
                        <div className="row">
                            <div className="col-sm-2 hidden-xs">
                            </div>
                            <div className="col-sm-10">
                                <h4 className="nomargin">{productData.productName}</h4>
                                <p>{productData.ProductDesc}</p>
                            </div>
                        </div>
                    </td>
                    <td data-th="Price">${productData.productPrice}</td>
                    <td data-th="Quantity">
                        <input type="number" value={Subtotal} className="form-control text-center" onChange={(e) => { setSubtotal(e.target.value) }} />
                    </td>
                    <td data-th="Subtotal" className="text-center">${Subtotal * productData.productPrice}</td>
                    <td className="actions" data-th="">
                        <button className="btn btn-danger btn-sm" onClick={handleDelete}>
                            <i className="fa fa-trash-o"></i>
                        </button>
                    </td>
                </tr>
            </tbody>
        
    )

};

export default Bill;
