import React, { useState, useRef } from "react";
import productsFromFile from "../../data/products.json";

function AddProduct() {
    const [idUnique, setIdUnique] = useState(true);
    const [productId, setProductId] = useState("");
    const [productName, setProductName] = useState("");
    const [productPrice, setProductPrice] = useState("");
    const [productImage, setProductImage] = useState("");
    const [productDescription, setProductDescription] = useState("");
    const [productCategory, setProductCategory] = useState("");
    const [productActive, setProductActive] = useState("");
    const idRef = useRef();

    function checkIdUniqueness() {
        const enteredId = idRef.current.value;
        const isIdUnique = !productsFromFile.some(product => product.id === Number(enteredId));
        setIdUnique(isIdUnique);
        setProductId(enteredId);
    }

    function handleAddProduct() {
        // Create a new product object
        const newProduct = {
            id: productId,
            name: productName,
            price: productPrice,
            image: productImage,
            description: productDescription,
            category: productCategory,
            active: productActive,
        };
        // Add the new product to the products array
          productsFromFile.push(newProduct);
    }

    return (
        <div>
            <div>
                {idUnique === false && <div>ID not unique!</div>}
                <label>Product ID:</label><br />
                <input ref={idRef} onChange={checkIdUniqueness} type="number" /> <br />
                <label>Product Name:</label><br />
                <input type="text" value={productName} onChange={(e) => setProductName(e.target.value)} />
                <label>Product Price:</label><br />
                <input type="text" value={productPrice} onChange={(e) => setProductPrice(e.target.value)} />
                <label>Product Image:</label><br />
                <input type="text" value={productImage} onChange={(e) => setProductImage(e.target.value)} />
                <label>Product Description:</label><br />
                <input type="text" value={productDescription} onChange={(e) => setProductDescription(e.target.value)} />
                <label>Product Category:</label><br />
                <input type="text" value={productCategory} onChange={(e) => setProductCategory(e.target.value)} />
                <label>Product Activity:</label><br />
                <input disabled={idUnique === false} type="text" value={productActive} onChange={(e) => setProductActive(e.target.value)} />
            </div>
            <button onClick={handleAddProduct}>Add Product</button>
        </div>
    );
}

export default AddProduct;
